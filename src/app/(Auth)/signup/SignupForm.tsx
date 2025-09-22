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
import { HandleSubmit } from "@/app/(Auth)/signup/signup.actions";
import { schema } from "@/app/_interfaces/signup.validation.schema";
import { registerFormType } from "@/app/_interfaces/signup.types";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function SignupForm() {
  const router = useRouter();

  const RhfObj = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
  });

  const { control, handleSubmit, formState: { isSubmitting } } = RhfObj;

  async function myHandleSubmit(data: registerFormType) {
    const resOutput = await HandleSubmit(data);

    if (resOutput === true) {
      toast.success("Congrats! Created successfully 🎉", {
        description: "You can now log in",
        duration: 2000,
        position:'top-center',
        style: { background: "#059669", color: "#fff", fontSize: "14px", borderRadius: "8px" },
      });
      router.push("/login");
    } else {
      toast.error(resOutput, {
        position:'top-center',
        duration: 2000,
        style: { background: "red", color: "#fff" },
        icon: "⚠️",
      });
    }
  }

  return (
    <Form {...RhfObj}>
      <form onSubmit={handleSubmit(myHandleSubmit)}>
        {["name", "email", "password", "rePassword", "phone"].map((fieldName) => (
          <FormField
            key={fieldName}
            control={control}
            name={fieldName as keyof registerFormType}
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel className="text-lg font-light capitalize">
                  {fieldName === "rePassword" ? "Confirm Password:" : `${fieldName}:`}
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type={
                      fieldName.includes("password")
                        ? "password"
                        : fieldName === "phone"
                        ? "tel"
                        : "text"
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto px-6 py-3 text-lg sm:text-xl mt-4 bg-green-600 hover:bg-green-700 h-15  cursor-pointer"
        >
          {isSubmitting ? (
            <i className="fa-solid fa-spinner fa-spin mr-2"></i>
          ) : (
            "Register"
          )}
        </Button>
      </form>
    </Form>
  );
}
