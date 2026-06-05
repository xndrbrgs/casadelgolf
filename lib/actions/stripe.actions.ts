'use server';

import { stripe } from '../stripe';

export const getRecentProducts = async () => {
    try {
        const products = await stripe.products.list({
            limit: 4,
            active: true,
            created: {gte: Math.floor(Date.now() / 1000) - 30 * 24 * 60 * 60, // Last 30 days
            },
        });
        
        const productsWithPrices = await Promise.all(
            products.data.map(async (product) => {
                const prices = await stripe.prices.list({
                    product: product.id,
                });
                return {
                    ...product,
                    prices: prices.data,
                };
            })
        );
        
        return productsWithPrices;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw new Error('Failed to fetch products');
    }
};

export const getProductsByFilters = async (
  filters: Record<string, string>
) => {
  try {
    const products = await stripe.products.list({
      limit: 100,
      active: true,
    });

    const matchedProducts = products.data.filter((product) =>
      Object.entries(filters).every(([key, value]) => {
        if (!value) return true;
        return product.metadata[key]?.toLowerCase() === value.toLowerCase();
      })
    );

    const productsWithPrices = await Promise.all(
      matchedProducts.map(async (product) => {
        const prices = await stripe.prices.list({
          product: product.id,
        });

        return {
          ...product,
          prices: prices.data,
        };
      })
    );

    return productsWithPrices;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch products");
  }
};