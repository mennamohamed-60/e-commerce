import React from "react";
import { getCategoryProducts } from "@/app/_services/getCategoryProducts";
import {
  categoryType,
  productType,
  subcategoriesType,
} from "@/app/_interfaces/AllProducts";
import ProductCard from "@/app/_Components/ProductCard/ProductCard";
import { GetAllSubCategoriesOnCategory } from "@/app/_services/GetAllSubCategoriesOnCategory";
import { getCategoryById } from "@/app/_services/getCategoryById";

export default async function CategoryDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const products: productType[] = await getCategoryProducts(id);
  const subCategories: subcategoriesType[] =
    await GetAllSubCategoriesOnCategory(id);
  const category: categoryType | null = await getCategoryById(id);

  return (
    <>
      <div className="w-[90%] m-auto mt-30">
        <h2 className="text-center text-4xl text-green-600 font-semibold m-5">
          {category?.name} subcategories
        </h2>
        {subCategories.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {subCategories.map((sub) => (
              <div
                key={sub._id}
                className="mb-3 rounded-lg my-box relative group overflow-hidden border-2"
              >
                <h1 className="text-center text-3xl mb-4 mt-4">{sub.name}</h1>
              </div>
            ))}
          </div>
        ) : (
          <div></div>
        )}
      </div>

      <div className="w-[90%] m-auto mt-5">
        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="min-h-screen flex justify-center items-center">
            <p className="text-green-600 text-center text-2xl">
              No products found in this category.
            </p>
          </div>
        )}
      </div>
    </>
  );
}
