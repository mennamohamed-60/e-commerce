'use client'
import React from "react";
import { productCardProps } from "./productCard.type";
import Link from "next/link";
import AddToCartButton from "@/app/products/_components/AddToCart.Button";

import WishlistButton from "../WishlistButton/WishlistButton";
import Image from "next/image";

export default function ProductCard({ product }: productCardProps) {
  

  
  return (
    <>
      <div className="  p-3 rounded-lg my-box relative group overflow-hidden">
        <Link href={`productDetails/${product.id}`}>
          <div className="">
            <Image src={product.imageCover} width={300} height={600} alt={product.title} />

            <p className="text-green-700 mb-2">{product.category.name}</p>
            <h1 className="font-medium">
              {product.title.split(" ", 2).join(" ")}
            </h1>
            <div className=" flex justify-between  mb-10">
              <p className="font-light"> {product.price} EGP</p>
              <div className="flex justify-end items-center gap-2">
                <i className="fa-solid fa-star text-amber-300 fa-sm"></i>
                <p>{product.ratingsAverage}</p>
              </div>
            </div>
          </div>
        </Link>

        <div className="flex items-center gap-2 mt-4">
          <AddToCartButton id={product.id}></AddToCartButton>

         <WishlistButton productId={product.id} />
        </div>
      </div>
    </>
  );
}


