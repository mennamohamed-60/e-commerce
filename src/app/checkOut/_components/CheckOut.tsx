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
import { checkOutFormType, checkOutSchema } from "@/app/_interfaces/checkOut.schema";
import { checkOutOnLine } from "../_actions/checkOut.actions";

export default function CheckOut({cartId}:{cartId:string}) {
    
  const form = useForm<checkOutFormType>({
    resolver:zodResolver(checkOutSchema),
    defaultValues: {
      details: "",
      phone: "",
      city: "",
    },
  });
   async function myHandleSubmit(data:checkOutFormType){
    const shippingAddress =data;
    const res = await checkOutOnLine(cartId, '',shippingAddress );
    console.log("check out test " ,res);
    if(res?.status ==='success'){
      window.location.href=res?.session?.url;  
    }


     
  }
  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(myHandleSubmit)}>
          <FormField
            control={form.control}
            name="details"
            render={({ field }) => (
              <FormItem className="mb-5">
                <FormLabel className="text-lg font-light"> details:</FormLabel>
                <FormControl>
                  <Input {...field} type="text" />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="mb-5">
                <FormLabel className="text-lg font-light"> phone:</FormLabel>
                <FormControl>
                  <Input {...field} type="tel" />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem className="mb-5">
                <FormLabel className="text-lg font-light">city:</FormLabel>
                <FormControl>
                  <Input {...field} type="text" />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          

         

          <Button className=" h-15 w-30 text-2xl  mt-4 cursor-pointer block ml-auto bg-green-600">
             pay now
          </Button>
        </form>
      </Form>
    </>
  );
}
