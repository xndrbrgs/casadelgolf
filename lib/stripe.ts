import Stripe from "stripe"

export const stripe = new Stripe(process.env.STRIPE_SK_OFFICIAL!, {
    apiVersion: "2026-05-27.dahlia",
    typescript: true,
})