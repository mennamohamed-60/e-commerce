"use client";
import React from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { GetWishlist, DeleteFromWishlist } from "@/app/_services/wishlist";
import { AddToCart } from "@/app/_services/addToCart";
import { toast } from "sonner";
import { productType } from "@/app/_interfaces/AllProducts";
import Image from "next/image";

export default function Wishlist() {
  const queryClient = useQueryClient();

  const {
    data: wishlistData,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["/wishlist"],
    queryFn: GetWishlist,
  });

  const [removingId, setRemovingId] = React.useState<string | null>(null);
  const [addingId, setAddingId] = React.useState<string | null>(null);

  const { mutate: removeFromWishlist } = useMutation({
    mutationFn: DeleteFromWishlist,
    onSuccess: (data) => {
      setRemovingId(null);
      toast.success(data.message || "Removed from wishlist", {
        duration: 2000,
        position: "top-right",
        style: {
          background: "#059669",
          color: "#000",
          fontSize: "14px",
          fontWeight: "600",
          borderRadius: "8px",
        },
        icon: "🗑️",
      });
      queryClient.invalidateQueries({ queryKey: ["/wishlist"] });
    },
  });

  const { mutate: addToCart } = useMutation({
    mutationFn: AddToCart,
    onSuccess: (_data, productId) => {
      setAddingId(null);
      removeFromWishlist(productId);
      queryClient.invalidateQueries({ queryKey: ["/cart"] });
      toast.success("Product added successfully to your cart", {
        duration: 2000,
        position: "top-right",
        style: {
          background: "#059669",
          color: "#000",
          fontSize: "14px",
          fontWeight: "600",
          borderRadius: "8px",
        },
        icon: "🎉",
      });
    },
  });

  if (isLoading)
    return <i className="fa-solid fa-spinner fa-spin fa-2xl text-white"></i>;
  if (isError) return <h1>{(error as Error).message}</h1>;

  return (
    <div className="flex justify-center items-center min-h-screen mt-10">
      <div className="relative shadow-md sm:rounded-lg p-5 sm:p-10 w-[95%] sm:w-[90%] m-auto">
        <h2 className="font-semibold text-3xl mb-5 text-center sm:text-left">
          Wishlist
        </h2>

        {wishlistData?.count === 0 ? (
          <p className="text-center text-2xl text-gray-500">
            Your wishlist is empty ❤️
          </p>
        ) : (
          <div className="space-y-5">
            {wishlistData?.data.map((product: productType) => (
              <div
                key={product.id}
                className="bg-white border dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 rounded-lg p-4 flex flex-col sm:flex-row gap-4"
              >
                <div className="flex justify-center sm:justify-start">
                  {/* <img
                    className="w-32 sm:w-28 md:w-32 max-w-full max-h-full rounded-lg"
                    src={product.imageCover}
                    alt={product.title}
                  /> */}


                  <Image width={80} height={160} className="w-32 sm:w-28 md:w-32 max-w-full max-h-full rounded-lg"
                    src={product.imageCover}
                    alt={product.title} ></Image>
                </div>

                <div className="flex flex-col sm:flex-row justify-between w-full">
                  <div>
                    <p className="text-lg sm:text-xl font-medium">
                      {product.title}
                    </p>
                    <p className="text-lg text-green-600">
                      {product.price} EGP
                    </p>

                    <div
                      onClick={() => {
                        setRemovingId(product.id);
                        removeFromWishlist(product.id);
                      }}
                      className="text-red-700 cursor-pointer mt-2 flex items-center gap-2"
                    >
                      {removingId === product.id ? (
                        <i className="fa-solid fa-spinner fa-spin text-red-700"></i>
                      ) : (
                        <>
                          <i className="fa-solid fa-trash"></i>
                          <span>Remove</span>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="mt-3 sm:mt-0 flex items-start sm:items-center">
                    <button
                      onClick={() => {
                        setAddingId(product.id);
                        addToCart(product.id);
                      }}
                      disabled={addingId === product.id}
                      className="text-gray-900 bg-white border border-green-600 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-normal rounded-lg text-lg px-5 py-2.5 cursor-pointer"
                    >
                      {addingId === product.id ? (
                        <i className="fa-solid fa-spinner fa-spin"></i>
                      ) : (
                        "Add to Cart"
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
