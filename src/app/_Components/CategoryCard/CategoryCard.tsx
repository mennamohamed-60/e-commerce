import Link from "next/link";
import React from "react";
import { categoryCardType } from "../ProductCard/productCard.type";
import Image from "next/image";

export default function CategoryCard({ category }: categoryCardType) {
  return (
    <>
      <div className="mb-3 rounded-lg my-box relative group overflow-hidden border-2">
        <Link href={`/specificCategory/${category._id}`}>
          {/* <img
            className="h-60 sm:h-72 md:h-80 w-full object-cover"
            src={category.image}
            alt={category.name}
          /> */}

          <Image width={200} height={200} className="h-60 sm:h-72 md:h-80 w-full object-cover"
            src={category.image}
            alt={category.name}/>  
          <h1 className="text-green-700 text-center text-xl sm:text-2xl md:text-3xl mb-4 mt-4">
            {category.name}
          </h1>
        </Link>
      </div>
    </>
  );
}
