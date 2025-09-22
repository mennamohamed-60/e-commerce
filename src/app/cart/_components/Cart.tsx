"use client";
import { CartRes } from "@/app/_interfaces/cart.types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import QuantityButton from "./QuantityButton";
import ClearButton from "./ClearButton";
import { DeleteItemFromCart } from "@/app/_services/deleteItemFromCart";
import { toast } from "sonner";
import { clearCart } from "@/app/_services/clearCart";
import Link from "next/link";
import Image from "next/image";







export default function Cart() {
  const [removingId, setRemovingId] = React.useState<string | null>(null);
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: DeleteItemFromCart,
    onSuccess: (mutationData) => {
      setRemovingId(null);
      toast.success(mutationData.message || "Product removed successfully ", {
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

      queryClient.invalidateQueries({ queryKey: ["/cart"] });
    },
    onError: (error: Error) => {
      setRemovingId(null);
      toast.error(error.message || "log in first ", {
        position: "top-right",
        duration: 2000,
        style: { background: "red", color: "#fff" },
        icon: "⚠️",
      });
    },
  });

  const { mutate: clearAll, isPending: isClearing } = useMutation({
    mutationFn: clearCart,
    onSuccess: (mutationData) => {
      toast.success(mutationData.message || "Products cleared successfully ", {
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

      queryClient.invalidateQueries({ queryKey: ["/cart"] });
    },
    onError: (error: Error) => {
      toast.error(error.message || "log in first ", {
        position: "top-right",
        duration: 2000,
        style: { background: "red", color: "#fff" },
        icon: "⚠️",
      });
    },
  });

  const {
    data: cartData,
    isLoading,
    isError,
    error,
  } = useQuery<CartRes>({
    queryKey: ["/cart"],
    queryFn: async () => {
      const res = await fetch(`/api/cart`);
      const payload = await res.json();
      return payload;
    },
  });

  if (isLoading) {
    return <i className="fa-solid fa-spinner fa-spin fa-2xl text-white"></i>;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen mt-20 px-2 sm:px-5">
      <div className="relative shadow-md sm:rounded-lg p-5 sm:p-10 lg:p-20 w-full sm:w-[95%] lg:w-[90%] m-auto">
        <div className="flex flex-col sm:flex-row justify-between gap-3">
          <h2 className="font-semibold text-2xl sm:text-4xl">Cart Shop</h2>
          <Link
            href={`/checkOut/${cartData?.cartId}`}
            className="text-center focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-base sm:text-lg cursor-pointer px-4 py-2 sm:px-5 sm:py-2.5"
          >
            check out
          </Link>
        </div>

        <div className="flex flex-col sm:flex-row justify-between font-medium mt-3 mb-3 gap-2">
          <p className="text-lg sm:text-xl">
            total price:{" "}
            <span className=" text-green-600">
              {cartData?.data.totalCartPrice} EGP
            </span>
          </p>
          <p className="text-lg sm:text-xl">
            total number of items:{" "}
            <span className=" text-green-600">{cartData?.numOfCartItems}</span>
          </p>
        </div>

        <table className="w-full text-xs sm:text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <tbody>
            {cartData?.data.products.map((product) => (
              <tr
                key={product._id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="px-3 sm:px-6 py-4 font-semibold text-gray-900 dark:text-white flex flex-col sm:flex-row gap-3 w-full">
                  <div className="flex justify-center sm:justify-start">
                    {/* <img
                      className="w-40 sm:w-32 md:w-40 max-w-full max-h-full rounded-lg"
                      src={product.product.imageCover}
                      alt={product.product.title}
                    /> */}

                    <Image  width={100} height={150} className="w-40 sm:w-32 md:w-40 max-w-full max-h-full rounded-lg"
                      src={product.product.imageCover}
                      alt={product.product.title}></Image>
                  </div>

                  <div className="flex flex-col sm:flex-row justify-between w-full">
                    <div>
                      <p className="text-lg sm:text-xl font-medium mt-1 break-words">
                        {product.product.title}
                      </p>
                      <p className="text-lg sm:text-xl font-medium mt-1">
                        {product.price} EGP
                      </p>

                      <div
                        onClick={() => {
                          setRemovingId(product.product._id);
                          mutate(product.product._id);
                        }}
                        className=" text-red-700 cursor-pointer mt-2"
                      >
                        {isPending && removingId === product.product._id ? (
                          <i className="fa-solid fa-spinner fa-spin fa-2x text-red-700"></i>
                        ) : (
                          <>
                            <i className="fa-solid fa-trash"></i>
                            <span> Remove</span>
                          </>
                        )}
                      </div>
                    </div>

                    <div className="mt-3 sm:mt-0 flex items-start sm:items-center">
                     <QuantityButton props={product}></QuantityButton>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <ClearButton onClear={() => clearAll()} isClearing={isClearing} />
      </div>
    </div>
  );
}













