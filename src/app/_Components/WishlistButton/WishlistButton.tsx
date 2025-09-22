"use client";
import React from "react";
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import { AddToWishlist, DeleteFromWishlist, GetWishlist } from "@/app/_services/wishlist";
import { toast } from "sonner";
import { productType } from "@/app/_interfaces/AllProducts";

export default function WishlistButton({ productId }: { productId: string }) {
  const queryClient = useQueryClient();

  const { data: wishlistData } = useQuery({
    queryKey: ["/wishlist"],
    queryFn: GetWishlist,
  });


  const isInWishlist = wishlistData?.data?.some((item: productType) => item.id === productId);

  const { mutate: add, isPending: adding } = useMutation({
    mutationFn: AddToWishlist,
    onSuccess: (data) => {
      toast.success(data.message || "Product added to wishlist ", {
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
      queryClient.invalidateQueries({ queryKey: ["/wishlist"] });
    },
    onError: ( ) => {
      toast.error( "faild ... log in frist ", {
        duration: 2000,
        position: "top-right",
        style: { background: "red", color: "#fff", fontSize: "14px", fontWeight: "600", borderRadius: "8px" },
        icon: "⚠️",
      });
    },
  });


  const { mutate: remove, isPending: removing } = useMutation({
    mutationFn: DeleteFromWishlist,
    onSuccess: (data) => {
      toast.success(data.message || "Product removed from wishlist 🗑️", {
        duration: 2000,
        position: "top-right",
        style: {
          background: "#059669",
          color: "#000",
          fontSize: "14px",
          fontWeight: "600",
          borderRadius: "8px",
        },
        icon: "✅",
      });
      queryClient.invalidateQueries({ queryKey: ["/wishlist"] });
    },
    onError: (error: Error) => {
      toast.error(error.message || "Failed to remove from wishlist", {
        duration: 2000,
        position: "top-right",
        style: { background: "red", color: "#fff", fontSize: "14px", fontWeight: "600", borderRadius: "8px" },
        icon: "⚠️",
      });
    },
  });


  const isLoading = adding || removing;

  return (
    <>
      {isLoading ? (
        <i className="fa-solid fa-spinner fa-spin fa-2xl text-gray-500"></i>
      ) : (
        <i
          className={`fa-solid fa-heart fa-2xl cursor-pointer transition-colors duration-200 ${
            isInWishlist ? "text-red-600" : "text-black"
          }`}
          onClick={() => (isInWishlist ? remove(productId) : add(productId))}
        />
      )}
    </>
  );
}
