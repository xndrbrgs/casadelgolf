import RecentProducts from "@/components/products/RecentProducts";

export default async function Home() {
  return (
    <main className="relative">
      <div className="relative bg-red-400 h-[clamp(480px,640px)]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1>HERO</h1>
        </div>
      </div>
      <RecentProducts />
    </main>
  );
}
