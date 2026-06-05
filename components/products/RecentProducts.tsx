import { getRecentProducts } from "@/lib/actions/stripe.actions";
import { Link } from "next-view-transitions";
import Image from "next/image";

const RecentProducts = async () => {
  const products = await getRecentProducts();
  return (
    <div className="relative flex flex-col items-center">
      <div className="relative bg-black w-full flex items-center justify-center py-[clamp(8px,16px)]">
        <h2 className="text-white text-[clamp(32px,42px)] uppercase font-jetbrains">
          Latest Items
        </h2>
      </div>
      <div className="relative grid grid-cols-12 gap-8 w-full p-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="col-span-12 lg:col-span-6 bg-gray-200 p-4 rounded"
          >
            <div className="grid grid-cols-12 gap-x-3">
              <div className="relative col-span-6 h-[clamp(256px,512px)]">
                <Image
                  src={product.images[0] || "/images/placeholder.png"}
                  fill
                  className="object-cover"
                  alt={product.name}
                />
              </div>
              <div className="col-span-6 space-y-2 lg:space-y-4 flex flex-col whitespace-normal">
                <h3 className="font-bold text-[clamp(16px,36px)] font-jetbrains">
                  {product.name}
                </h3>
                <p className="text-[clamp(10px,14px)]">{product.description}</p>
                <p className="text-[clamp(12px,36px)] text-red-500 font-bold">
                  {product.prices && product.prices.length > 0
                    ? `$${(product.prices[0].unit_amount || 0) / 100}`
                    : "Price not available"}
                </p>
                <div className="relative">
                  <span className="inline-block text-[clamp(10px,14px)] bg-black text-white px-2 py-1">
                    {product.metadata &&
                    Object.keys(product.metadata).length > 0
                      ? Object.values(product.metadata)[0]
                      : "No metadata available"}
                  </span>
                </div>
              </div>
            </div>
            <Link
              href={product.url || "#"}
              className="relative mt-4 bg-black text-white px-4 py-2 rounded transition-all duration-300 hover:text-gray-300 hover:underline items-center w-full justify-center flex"
            >
              SHOP NOW
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProducts;
