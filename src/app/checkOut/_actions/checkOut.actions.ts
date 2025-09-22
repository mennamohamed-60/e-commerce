'use server'
import { getTuokenAuth } from "@/app/_services/getTokenAuth";

type shippingAddressType = {
  details: string;
  phone: string;
  city: string;
};

export async function checkOutOnLine(
  cartId: string,
  url: string = process.env.NEXT_PUBLIC_API_URL as string,
  shippingAddress: shippingAddressType
) {
   const token =await getTuokenAuth();
   const res =await fetch(`${process.env.API}/orders/checkout-session/${cartId}?url=${url}` , {
    method:'POST',
    body:JSON.stringify({
        shippingAddress
    }),
    headers:{
         "Content-Type": "application/json",
          token,

    }
   })
   const data = await res.json();

   return data;

}
