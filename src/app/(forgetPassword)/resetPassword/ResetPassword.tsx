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

export default function ResetPassword() {
  const router = useRouter();
  const form = useForm({ defaultValues: { email: "", newPassword: "" } });
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = form;

  async function onSubmit(values: { email: string; newPassword: string }) {
    try {
      const res = await fetch(
        "https://ecommerce.routemisr.com/api/v1/auth/resetPassword",
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        }
      );

      const data = await res.json();

      if (data.token) {
        toast.success("Password reset successfully 🎉", {
          position: "top-center",
          style: { background: "#059669", color: "#000", fontWeight: "600" },
        });
        router.push("/login");
      } else {
        toast.error(data.message || "Failed to reset password", {
          position: "top-center",
          style: { background: "red", color: "#fff" },
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

        <FormField
          control={control}
          name="newPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">New Password :</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="password"
                  placeholder="Enter new password"
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
            "Reset Password"
          )}
        </Button>
      </form>
    </Form>
  );
}
