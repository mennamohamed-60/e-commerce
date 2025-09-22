import { Button } from "@/components/ui/button";
import React from "react";

export default function ClearButton({
  onClear,
  isClearing,
}: {
  onClear: () => void;
  isClearing: boolean;
}) {
  return (
    <>
      <Button
        disabled={isClearing}
        onClick={onClear}
        type="button"
        className="text-gray-900 bg-white border border-green-600 focus:outline-none 
         hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-normal rounded-lg 
         text-xl px-5 py-2.5 mt-6 cursor-pointer flex items-center justify-center mx-auto"
      >
        {isClearing ? (
          <i className="fa-solid fa-spinner fa-spin fa-lg text-green-600"></i>
        ) : (
          "Clear Your Cart"
        )}
      </Button>
    </>
  );
}
