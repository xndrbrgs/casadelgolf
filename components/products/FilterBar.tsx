"use client";

import { useRouter, useSearchParams } from "next/navigation";

export function FilterBar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const updateFilter = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    params.set("key", key);
    params.set("value", value);

    router.push(`/products?${params.toString()}`);
  };

  return (
    <div className="flex gap-4">
      <button
        onClick={() => updateFilter("Type", "IRONS")}
        className="px-4 py-2 bg-black text-white rounded"
      >
        Irons
      </button>

      <button
        onClick={() => updateFilter("Type", "DRIVER")}
        className="px-4 py-2 bg-black text-white rounded"
      >
        Drivers
      </button>

      <button
        onClick={() => updateFilter("Brand", "Callaway")}
        className="px-4 py-2 bg-black text-white rounded"
      >
        Callaway
      </button>
    </div>
  );
}
