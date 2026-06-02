'use server';

import { stripe } from '../stripe';

export const getRecentProducts = async () => {
    try {
        const products = await stripe.products.list(
            {
                limit: 4,
            }
        );
        return products.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw new Error('Failed to fetch products');
    }
};