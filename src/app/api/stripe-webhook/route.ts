import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import nodemailer from 'nodemailer';
import { generateEmailHTML } from '@/emails/PurchaseReceiptHTML';
import { products, Product } from '@/data/products';

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
      // Initialize SMTP transporter
      const smtpHost = process.env.SMTP_HOST;
      const smtpUser = process.env.SMTP_USER;
      const smtpPass = process.env.SMTP_PASS;
      
      if (!smtpHost || !smtpUser || !smtpPass) {
        console.error("SMTP configuration not set.");
        return NextResponse.json({ error: 'Email service not configured.' }, { status: 500 });
      }
      
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: 587,
        secure: false,
        auth: {
          user: smtpUser,
          pass: smtpPass
        }
      });

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
        const localProduct = products.find((p: Product) => p.id === product.metadata.product_id);
        
        if (!localProduct) {
          console.warn(`Product with ID ${product.metadata.product_id} not found in local data.`);
          return null;
        }
        
        return {
          ...localProduct,
          downloadUrl: `https://example.com/download/${localProduct.id}/${session.id}`
        };
      }).filter(p => p !== null) as (typeof products[0] & { downloadUrl: string })[];

      // Generate the email HTML using our simple template
      const emailHtml = generateEmailHTML({
        products: purchasedProducts,
        orderId: session.id
      });

      await transporter.sendMail({
        from: 'Kowalski <noreply@kowalski.com>',
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

interface Product {
  id: string;
  name: string;
  price: number;
  downloadUrl: string;
}

interface EmailData {
  products: Product[];
  orderId: string;
}

export function generateEmailHTML({ products, orderId }: EmailData): string {
  const productsList = products.map(product => `
    <tr>
      <td style="padding: 10px; border-bottom: 1px solid #eee;">
        <strong>${product.name}</strong><br>
        R$ ${(product.price / 100).toFixed(2).replace('.', ',')}
      </td>
      <td style="padding: 10px; border-bottom: 1px solid #eee; text-align: center;">
        <a href="${product.downloadUrl}" style="background-color: #000; color: white; padding: 8px 16px; text-decoration: none; border-radius: 4px;">Download</a>
      </td>
    </tr>
  `).join('');

  const total = products.reduce((sum, product) => sum + product.price, 0);

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Recibo de Compra - Kowalski</title>
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="text-align: center; margin-bottom: 30px;">
        <h1 style="color: #000; margin: 0;">Kowalski</h1>
        <p style="color: #666; margin: 5px 0;">Obrigado pela sua compra!</p>
      </div>
      
      <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
        <h2 style="margin: 0 0 10px 0; color: #000;">Detalhes do Pedido</h2>
        <p><strong>Número do Pedido:</strong> ${orderId}</p>
      </div>
      
      <div style="margin-bottom: 20px;">
        <h3 style="color: #000;">Produtos Adquiridos:</h3>
        <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
          <thead>
            <tr style="background-color: #f0f0f0;">
              <th style="padding: 10px; text-align: left; border-bottom: 2px solid #ddd;">Produto</th>
              <th style="padding: 10px; text-align: center; border-bottom: 2px solid #ddd;">Download</th>
            </tr>
          </thead>
          <tbody>
            ${productsList}
          </tbody>
          <tfoot>
            <tr style="background-color: #f9f9f9;">
              <td style="padding: 15px; font-weight: bold; border-top: 2px solid #ddd;">
                Total: R$ ${(total / 100).toFixed(2).replace('.', ',')}
              </td>
              <td style="padding: 15px; border-top: 2px solid #ddd;"></td>
            </tr>
          </tfoot>
        </table>
      </div>
      
      <div style="background-color: #f0f8ff; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
        <p style="margin: 0; color: #666;">
          <strong>Instruções:</strong> Clique nos links de download acima para baixar seus produtos. 
          Os links estarão disponíveis por 30 dias a partir da data da compra.
        </p>
      </div>
      
      <div style="text-align: center; color: #666; font-size: 14px; border-top: 1px solid #eee; padding-top: 20px;">
        <p>Em caso de dúvidas, entre em contato conosco.</p>
        <p>&copy; ${new Date().getFullYear()} Kowalski. Todos os direitos reservados.</p>
      </div>
    </body>
    </html>
  `;
}
