import Stripe from 'stripe'
import { defineEventHandler, readBody, createError } from 'h3'

const config = useRuntimeConfig()
const stripe = new Stripe(config.stripeServerKey, {
})

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { priceId } = body

  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'payment', // This should be 'payment' or 'subscription'
      success_url: `${config.public.publicUrl}/success`,
      cancel_url: `${config.public.publicUrl}/cancel`,
    })

    if (!session.url) {
      throw new Error('No URL returned from Stripe')
    }

    return { url: session.url }
  } catch (error) {
    console.error('Error creating checkout session:', error)
    return createError({ statusCode: 500, message: 'Error creating checkout session' })
  }
})