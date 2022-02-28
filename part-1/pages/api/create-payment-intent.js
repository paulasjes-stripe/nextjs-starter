import Stripe from 'stripe';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

    const paymentIntent = await stripe.paymentIntents.create({
      amount: 1000,
      currency: 'eur',
      payment_method_types: ['card']
    });

    res.status(200).json({
      clientSecret: paymentIntent.client_secret,
    });
  } else {
    res.status(405).end('Method not allowed');
  }
}