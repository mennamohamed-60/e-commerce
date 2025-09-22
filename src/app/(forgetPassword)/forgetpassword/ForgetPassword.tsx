"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function ForgotPassword() {
  const router = useRouter();
  const form = useForm({
    defaultValues: { email: "" },
  });

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = form;

  async function onSubmit(values: { email: string }) {
    try {
      const res = await fetch(
        "https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: values.email }),
        }
      );

      const data = await res.json();

      if (data.statusMsg === "success") {
        toast.success("Check your email for reset code", {
          position: "top-center",
          style: { background: "#059669", color: "#000", fontWeight: "600" },
          icon: "📩",
        });
        router.push("/verifyResetCode");
      } else {
        toast.error(data.message || "Failed to send reset code", {
          position: "top-center",
          style: { background: "red", color: "#fff" },
          icon: "⚠️",
        });
      }
    } catch  {
      toast.error("Something went wrong", {
        position: "top-center",
        style: { background: "red", color: "#fff" },
        icon: "⚠️",
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="w-[80%] mx-auto mt-30">
        <FormField
          control={control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">Email :</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="email"
                  placeholder="Enter your email"
                  className="h-10"
                />
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
            "Send Reset Code"
          )}
        </Button>
      </form>
    </Form>
  );
}

