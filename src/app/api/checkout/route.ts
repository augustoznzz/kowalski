import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
  if (!stripeSecretKey) {
    return NextResponse.json({ error: "Stripe API key not set." }, { status: 500 });
  }
  const { default: Stripe } = await import("stripe");
  const stripe = new Stripe(stripeSecretKey, { apiVersion: "2024-04-10" });

  const { items } = await req.json();
  // Exemplo: [{ id: '1', name: 'Produto 1', price: 199.9, quantity: 1 }]
  const line_items = items.map((item: { id: string; name: string; price: number; quantity: number }) => ({
    price_data: {
      currency: "brl",
      product_data: {
        name: item.name,
      },
      unit_amount: Math.round(item.price * 100),
    },
    quantity: item.quantity,
  }));

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items,
      mode: "payment",
      success_url: `${req.nextUrl.origin}/checkout?success=1`,
      cancel_url: `${req.nextUrl.origin}/checkout?canceled=1`,
    });
    return NextResponse.json({ url: session.url });
  } catch (err) {
    const error = err as Error;
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
