import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { Resend } from 'resend';
import { render } from '@react-email/render';
import React from 'react';
import PurchaseReceiptEmail from '@/emails/PurchaseReceipt';
import { products } from '@/data/products';

export async function POST(req: NextRequest) {
  // Initialize Stripe with environment variable check
  const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
  if (!stripeSecretKey) {
    console.error("STRIPE_SECRET_KEY is not set.");
    return NextResponse.json({ error: 'Stripe not configured.' }, { status: 500 });
  }
  
  const stripe = new Stripe(stripeSecretKey);
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!webhookSecret) {
    console.error("STRIPE_WEBHOOK_SECRET is not set.");
    return NextResponse.json({ error: 'Webhook secret not configured.' }, { status: 500 });
  }

  const signature = req.headers.get('stripe-signature');
  if (!signature) {
    return NextResponse.json({ error: 'No Stripe signature found.' }, { status: 400 });
  }

  let event: Stripe.Event;
  try {
    const body = await req.text();
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err) {
    const error = err as Error;
    console.error(`Webhook signature verification failed: ${error.message}`);
    return NextResponse.json({ error: `Webhook Error: ${error.message}` }, { status: 400 });
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;

    try {
      // Initialize Resend only when needed
      const resendApiKey = process.env.RESEND_API_KEY;
      if (!resendApiKey) {
        console.error("RESEND_API_KEY is not set.");
        return NextResponse.json({ error: 'Email service not configured.' }, { status: 500 });
      }
      
      const resend = new Resend(resendApiKey);

      // Retrieve the session with line items
      const sessionWithLineItems = await stripe.checkout.sessions.retrieve(
        session.id,
        { expand: ['line_items.data.price.product'] }
      );

      const lineItems = sessionWithLineItems.line_items?.data;
      if (!lineItems) {
        throw new Error('Could not retrieve line items from session.');
      }
      
      const customerEmail = session.customer_details?.email;
      if (!customerEmail) {
        throw new Error('Customer email not found in session.');
      }

      const purchasedProducts = lineItems.map(item => {
        const product = item.price?.product as Stripe.Product;
        const localProduct = products.find(p => p.id === product.metadata.product_id);
        
        if (!localProduct) {
          console.warn(`Product with ID ${product.metadata.product_id} not found in local data.`);
          return null;
        }
        
        return {
          ...localProduct,
          downloadUrl: `https://example.com/download/${localProduct.id}/${session.id}`
        };
      }).filter(p => p !== null) as (typeof products[0] & { downloadUrl: string })[];

      // Send the purchase receipt email using React.createElement
      const emailElement = React.createElement(PurchaseReceiptEmail, { 
        products: purchasedProducts, 
        orderId: session.id 
      });
      
      const emailHtml = await render(emailElement);

      await resend.emails.send({
        from: 'Kowalski <onboarding@resend.dev>',
        to: customerEmail,
        subject: 'Sua compra na Kowalski',
        html: emailHtml,
      });

      console.log(`Purchase receipt sent to ${customerEmail}`);

    } catch (error) {
      console.error("Error processing checkout session:", error);
    }
  }

  return NextResponse.json({ received: true });
}
