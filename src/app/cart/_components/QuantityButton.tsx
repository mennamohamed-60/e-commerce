
import { Product } from "@/app/_interfaces/cart.types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateQuantity } from "@/app/_services/updateQuantity";
import { toast } from "sonner";
import React from "react";

export default function QuantityButton({ props }: { props: Product }) {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: updateQuantity,
    onSuccess: () => {
      toast.success("Quantity updated", {
        duration: 1500,
        style: { background: "#059669", color: "#fff" },
      });
      queryClient.invalidateQueries({ queryKey: ["/cart"] });
    },
    onError: (error: Error) => {
      toast.error(error.message || "Something went wrong");
    },
  });

  const handleIncrease = () => {
    mutate({ productId: props.product._id, count: props.count + 1 });
  };

  const handleDecrease = () => {
    if (props.count > 1) {
      mutate({ productId: props.product._id, count: props.count - 1 });
    }
  };

  return (
    <div className="flex items-center">
      <button
        onClick={handleDecrease}
        disabled={isPending || props.count <= 1}
        className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 
          text-gray-500 bg-white border border-gray-300 rounded-full 
          disabled:opacity-50 disabled:cursor-not-allowed
          hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200"
        type="button"
      >
        <svg
          className="w-3 h-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 2"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M1 1h16"
          />
        </svg>
      </button>

     
      <p className="text-green-600 text-xl">
        {isPending ? (
          <i className="fa-solid fa-spinner fa-spin text-green-600"></i>
        ) : (
          props.count
        )}
      </p>

      <button
        onClick={handleIncrease}
        disabled={isPending}
        className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium 
          text-gray-500 bg-white border border-gray-300 rounded-full 
          disabled:opacity-50 disabled:cursor-not-allowed
          hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200"
        type="button"
      >
        <svg
          className="w-3 h-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 18"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 1v16M1 9h16"
          />
        </svg>
      </button>
    </div>
  );
}
