import React from "react";
import { getAllCategories } from "../_services/getAllCategories";
import CategoryCard from "../_Components/CategoryCard/CategoryCard";

export default async function Categories() {
  const allCategories = await getAllCategories();
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 m-5 mt-30 sm:mt-30  lg:m-30">
        {allCategories?.map((category) => (
          <CategoryCard key={category._id} category={category}></CategoryCard>
        ))}
      </div>
    </>
  );
}
