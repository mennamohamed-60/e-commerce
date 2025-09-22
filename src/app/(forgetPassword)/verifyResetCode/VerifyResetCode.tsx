"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function VerifyResetCode() {
  const router = useRouter();
  const form = useForm({ defaultValues: { resetCode: "" } });
  const { control, handleSubmit , formState: { isSubmitting }  } = form;

  async function onSubmit(values: { resetCode: string }) {
    try {
      const res = await fetch("https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await res.json();

      if (data.status === "Success") {
        toast.success("Code verified successfully ✅", {
          position: "top-center",
          style: { background: "#059669", color: "#000", fontWeight: "600" },
        });
        router.push("/resetPassword"); 
      } else {
        toast.error(data.message || "Invalid reset code", {
          position: "top-center",
          style: { background: "red", color: "#fff" },
          icon: "⚠️",
        });
      }
    } catch {
      toast.error("Something went wrong", {
        position: "top-center",
        style: { background: "red", color: "#fff" },
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="w-[80%] mx-auto mt-30">
        <FormField
          control={control}
          name="resetCode"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">Reset Code</FormLabel>
              <FormControl>
                <Input {...field} type="text" placeholder="Enter reset code"  className="h-10"/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="mt-4 w-full bg-green-600"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <i className="fa-solid fa-spinner fa-spin mr-2"></i>
          ) : (
            "Verify Code"
          )}
        </Button>
      </form>
    </Form>
  );
}
