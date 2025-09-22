import React from "react";
import { productDetailsprops } from "@/app/_interfaces/AllProducts";
import { getSpecificProduct } from "@/app/_services/getSpecificProduct.services";

import AddToCartButton from "@/app/products/_components/AddToCart.Button";
import WishlistButton from "@/app/_Components/WishlistButton/WishlistButton";
import MySwiper from "@/app/_Components/MySwiper/MySwiper";

export default async function productDetails(props: { params: Promise<{ id: string }> }) {
  const { id } = await props.params;
  const productDetails = await getSpecificProduct(id); 

  const imagesList =
    productDetails?.images?.map((img: string) => ({
      src: img,
    })) || [];

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center min-h-screen gap-8 mt-10 w-[90%] m-auto">
      <div className="w-full lg:w-1/3 flex justify-center lg:justify-start">
        <MySwiper
          imagesList={imagesList}
          slidesPerView={1}
          pagination={true}
          height={600}
          
        />
      </div>

      <div className="w-full lg:w-2/3 flex flex-col justify-center gap-4 lg:items-start">
        <p className="text-green-700 mb-2">{productDetails?.category.name}</p>
        <h1 className="font-bold text-2xl sm:text-3xl">
          {productDetails?.title}
        </h1>
        <p className="mt-2">{productDetails?.description}</p>

        <div className="flex flex-row items-center justify-between mt-4 w-[80%]">
          <p className="font-light text-lg">{productDetails?.price} EGP</p>
          <div className="flex items-center gap-2">
            <i className="fa-solid fa-star text-amber-300 fa-sm"></i>
            <p>{productDetails?.ratingsAverage}</p>
          </div>
        </div>

        <div className="flex items-center gap-2 mt-4 w-full">
          <AddToCartButton id={id} />
      <WishlistButton productId={id} />
        </div>
      </div>
    </div>
  );
}
