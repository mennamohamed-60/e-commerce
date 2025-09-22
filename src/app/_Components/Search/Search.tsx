"use client";

import { useState, useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { productType } from "@/app/_interfaces/AllProducts";

export default function Search({
  products,
}: {
  products: productType[] | null;
}) {
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    if (search.trim() === "") {
      setFilteredProducts(products);
    } else {
      const result = products?.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredProducts(result?.length ? result : products);
    }
  }, [search, products]);

  return (
    <>
      <div className="flex justify-center mt-40 sm:mt-30 px-4   ">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for products..."
          className="border border-gray-300 rounded-lg p-3 w-full sm:w-[80%] lg:w-[60%] 
            focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 
            transition-all duration-200"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 m-10 sm:m-30"> {filteredProducts?.map((product) => ( <ProductCard key={product.id} product={product} /> ))} </div>
    </>
  );
}
