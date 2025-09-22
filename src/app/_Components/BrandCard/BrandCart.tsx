"use client"

import React from "react";
import { brandCardProps } from "../ProductCard/productCard.type";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogPortal,
} from "@/components/ui/dialog";
import Image from "next/image";

export default function BrandCart({ brand }: brandCardProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="mb-3 rounded-lg my-box relative group overflow-hidden border-2 cursor-pointer hover:shadow-lg transition">
          {/* <img
            className="w-full h-40 sm:h-48 object-cover"
            src={brand.image}
            alt={brand.name}
          /> */}

          <Image width={100} height={150} className="w-full h-40 sm:h-48 object-cover"
            src={brand.image}
            alt={brand.name} />
          <h1 className="text-green-700 text-center text-xl sm:text-2xl mb-2 mt-2">
            {brand.name}
          </h1>
        </div>
      </DialogTrigger>

      <DialogPortal>
        <DialogContent className="sm:max-w-[400px] mt-10 mx-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl text-green-700 text-center">
              {brand.name}
            </DialogTitle>
          </DialogHeader>

          <div className="flex flex-col items-center gap-4 p-4">
            {/* <img
              src={brand.image}
              alt={brand.name}
              className="w-40 sm:w-60 h-40 sm:h-60 object-contain rounded-lg border"
            /> */}

            <Image width={100} height={150}  src={brand.image}
              alt={brand.name}
              className="w-40 sm:w-60 h-40 sm:h-60 object-contain rounded-lg border" />
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}
