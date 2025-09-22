"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";

import { loginSchema } from "@/app/_interfaces/login.validation.schema";
import { loginFormType } from "@/app/_interfaces/login.types";
import { toast } from "sonner";

import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import Link from "next/link";

export default function LginForm() {
  const router = useRouter();
  const RhfObj = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = RhfObj;

  async function myHandleSubmit(data: loginFormType) {
    const res = await signIn("credentials", { ...data, redirect: false });
    if (res?.ok) {
      toast.success("Welcome back 🎉", {
        description: "You can now log in",
        duration: 2000,
        position: "top-center",
        style: {
          background: "#059669",
          color: "#fff",
          fontSize: "14px",
          borderRadius: "8px",
        },
      });

      router.push("/");
    } else {
      toast.error("Email or Password is incorrect ⚠️", {
        position: "top-center",
        duration: 2000,
        style: { background: "red", color: "#fff" },
      });
    }
  }

  return (
    <Form {...RhfObj}>
      <form onSubmit={handleSubmit(myHandleSubmit)}>
        <FormField
          control={control}
          name="email"
          render={({ field }) => (
            <FormItem className="mb-5">
              <FormLabel className="text-lg font-light">Email:</FormLabel>
              <FormControl>
                <Input {...field} type="email" placeholder="Enter your email" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="password"
          render={({ field }) => (
            <FormItem className="mb-5">
              <FormLabel className="text-lg font-light">Password:</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="password"
                  placeholder="Enter your password"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <Button
            type="submit"
            className="px-6 h-15 cursor-pointer .py-3 text-lg lg:text-xl bg-green-600 hover:bg-green-700 order-1 sm:order-none"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <i className="fa-solid fa-spinner fa-spin mr-2 "></i>
            ) : (
              "Log in"
            )}
          </Button>

          <Link
            href="/forgetpassword"
            className="text-green-600 hover:underline text-base lg:text-lg text-center order-2  sm:order-none"
          >
            Forgot your password?
          </Link>
        </div>
      </form>
    </Form>
  );
}
