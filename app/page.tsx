import { getRecentProducts } from "@/lib/actions/stripe.actions";
import Image from "next/image";

export default async function Home() {
  const products = await getRecentProducts();
  return (
    <main className="relative h-[300vh]">
      <div className="relative bg-red-400 h-[640px]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1>HERO</h1>
        </div>
      </div>
      <div className="relative flex flex-col items-center">
        <div className="relative bg-black w-full flex items-center justify-center py-[clamp(8px,16px)]">
          <h2 className="text-white text-[clamp(32px,48px)] uppercase">
            Latest Items
          </h2>
        </div>
        <div className="relative grid grid-cols-12 gap-8 w-full p-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="col-span-3 bg-gray-200 p-4 rounded"
            >
              <div className="grid grid-cols-12 gap-x-3">
                <div className="relative col-span-6 h-64">
                  <Image
                    src={product.images[0] || "/images/placeholder.png"}
                    fill
                    className="object-cover"
                    alt={product.name}
                  />
                </div>
                <div className="col-span-6">
                  <h3 className="font-bold text-[clamp(16px,24px)]">
                    {product.name}
                  </h3>
                  <p>{product.description}</p>
                  <p>
                    {typeof product.default_price === "string"
                      ? product.default_price
                      : JSON.stringify(product.default_price)}
                  </p>
                  <a
                    href={product.url || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    Visit Product
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
