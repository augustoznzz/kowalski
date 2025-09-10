import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
    if (!stripeSecretKey) {
      return NextResponse.json({ error: "Stripe API key not configured." }, { status: 500 });
    }

    const { default: Stripe } = await import("stripe");
    const stripe = new Stripe(stripeSecretKey);

    const body = await req.json();
    const { items } = body;

    if (!items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json({ error: "Carrinho vazio ou inválido." }, { status: 400 });
    }

    // Validar e formatar items para o Stripe
    const line_items = items.map((item: { id: string; name: string; price: number; quantity: number }) => {
      if (!item.name || !item.price || !item.quantity) {
        throw new Error("Item inválido no carrinho.");
      }
      
      return {
        price_data: {
          currency: "brl",
          product_data: {
            name: item.name,
            metadata: {
              product_id: item.id
            }
          },
          unit_amount: Math.round(item.price * 100), // Converter para centavos
        },
        quantity: item.quantity,
      };
    });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items,
      mode: "payment",
      success_url: `${req.nextUrl.origin}/checkout?success=1`,
      cancel_url: `${req.nextUrl.origin}/checkout?canceled=1`,
      metadata: {
        order_source: "kowalski_website"
      }
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Stripe checkout error:", err);
    const error = err as Error;
    return NextResponse.json({ 
      error: `Erro ao processar pagamento: ${error.message}` 
    }, { status: 500 });
  }
}
