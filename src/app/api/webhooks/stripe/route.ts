import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { Resend } from 'resend';
import PurchaseReceiptEmail from '@/emails/PurchaseReceipt';
import { products } from '@/data/products';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: NextRequest) {
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
          // This could be a simple log or a more robust error handling
          console.warn(`Product with ID ${product.metadata.product_id} not found in local data.`);
          return null;
        }
        
        return {
          ...localProduct,
          downloadUrl: `https://example.com/download/${localProduct.id}/${session.id}` // Placeholder URL
        };
      }).filter(p => p !== null) as (typeof products[0] & { downloadUrl: string })[];


      // Send the purchase receipt email
      await resend.emails.send({
        from: 'Kowalski <onboarding@resend.dev>', // Replace with your domain
        to: customerEmail,
        subject: 'Sua compra na Kowalski',
        react: <PurchaseReceiptEmail products={purchasedProducts} orderId={session.id} />,
      });

      console.log(`Purchase receipt sent to ${customerEmail}`);

    } catch (error) {
      console.error("Error processing checkout session:", error);
      // Do not return a 500 to Stripe, as it might retry unnecessarily for some errors.
      // Log the error for monitoring.
    }
  }

  return NextResponse.json({ received: true });
}
