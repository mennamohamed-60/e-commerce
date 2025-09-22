'use client'
import { AddToCart } from '@/app/_services/addToCart'
import { Button } from '@/components/ui/button'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import { toast } from "sonner";

export default function AddToCartButton({id}:{id:string}) {
  const queryClient =useQueryClient();
    const { mutate, isPending  } = useMutation({
  mutationFn: AddToCart,
  onSuccess: (data) => {
    toast.success(data.message || 'Product added successfully to your cart', {
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

    queryClient.invalidateQueries({queryKey:['/cart']});
  },
  onError: (error:Error) => {
    toast.error(error.message ||"log in first ", {
      position: "top-right",
      duration: 2000,
      style: { background: "red", color: "#fff" },
      icon: "⚠️",
    });
  },
});


  return (
   <>
   <Button  onClick={()=>mutate(id)}
              type="button"
              className="bg-green-700 cursor-pointer text-white hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 w-3/4 transform translate-y-[150%] transition-transform duration-500 group-hover:translate-y-0"
            >
                {isPending ? <i className="fa-solid fa-spinner fa-spin fa-lg text-white"></i> : '+ Add to cart'}
              
            </Button></>
  )
}


