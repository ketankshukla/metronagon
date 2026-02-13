import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: NextRequest) {
  try {
    const { priceId } = await req.json();

    if (!priceId) {
      return NextResponse.json(
        { error: "Price ID is required" },
        { status: 400 }
      );
    }

    const session = await stripe.checkout.sessions.create({
      ui_mode: "embedded",
      line_items: [{ price: priceId, quantity: 1 }],
      mode: "payment",
      return_url: `${req.nextUrl.origin}/thank-you?session_id={CHECKOUT_SESSION_ID}`,
      allow_promotion_codes: true,
    });

    return NextResponse.json({ clientSecret: session.client_secret });
  } catch (error) {
    console.error("Stripe checkout error:", error);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
