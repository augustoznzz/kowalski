import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { Resend } from 'resend';
import PurchaseReceiptEmail from '@/emails/PurchaseReceipt';
import { products } from '@/data/products';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: NextRequest) {
  const signature = req.headers.get('stripe-signature');
  if (!signature) {
    return new NextResponse('No signature', { status: 400 });
  }

  let event: Stripe.Event;
  try {
    const text = await req.text();
    event = stripe.webhooks.constructEvent(
      text,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    const error = err as Error;
    console.error(`Webhook signature verification failed: ${error.message}`);
    return new NextResponse(`Webhook Error: ${error.message}`, { status: 400 });
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;

    try {
      const customerEmail = session.customer_details?.email;
      const productIds = JSON.parse(session.metadata?.product_ids || '[]') as string[];
      
      if (!customerEmail || productIds.length === 0) {
        console.error('Missing customer email or product IDs in session metadata');
        return new NextResponse('Webhook Error: Missing data', { status: 400 });
      }

      const purchasedProducts = products.filter(p => productIds.includes(p.id));
      const total = (session.amount_total || 0) / 100;

      // Enviar e-mail de confirmação
      await resend.emails.send({
        from: 'Kowalski <no-reply@yourdomain.com>', // TODO: Configure um domínio verificado no Resend
        to: customerEmail,
        subject: 'Sua compra na Kowalski foi confirmada!',
        react: <PurchaseReceiptEmail products={purchasedProducts} total={total} />,
      });

      console.log(`Receipt email sent to ${customerEmail}`);

    } catch (error) {
      console.error('Error processing checkout session:', error);
      return new NextResponse('Internal Server Error', { status: 500 });
    }
  }

  return new NextResponse(null, { status: 200 });
}
