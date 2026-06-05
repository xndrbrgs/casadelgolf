import { FilterBar } from "@/components/products/FilterBar";
import { getProductsByFilters } from "@/lib/actions/stripe.actions";

export default async function ProductsPage({ searchParams }: any) {
  const products = await getProductsByFilters(searchParams);

  return (
    <div className="flex">
      <FilterBar />

      <div className="grid grid-cols-3 gap-4 p-6">
        {products.map((p: any) => (
          <div key={p.id} className="border p-4">
            <h2>{p.name}</h2>
            <p>{p.metadata.brand}</p>
            <p>{p.metadata.condition}</p>
            <p>${p.prices[0]?.unit_amount / 100}</p>
          </div>
        ))}
      </div>
    </div>
  );
}