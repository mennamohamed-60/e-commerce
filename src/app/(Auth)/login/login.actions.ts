"use server";
import {loginFormType } from "@/app/_interfaces/login.types";
import { cookies } from 'next/headers'; 

export async function Handlelogin(data: loginFormType) {
  

  const res = await fetch(
    "https://ecommerce.routemisr.com/api/v1/auth/signin",
    {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const finalRes = await res.json();
 

  if (finalRes.message === "success") {
   const token = finalRes.token;

    
    const cookieStore = await cookies(); 
    cookieStore.set({
      name: 'token',
      value: token,
      path: '/',
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24,
      sameSite:'strict'
    });

    return true;
  } else {
    return finalRes.message;
  }
}
