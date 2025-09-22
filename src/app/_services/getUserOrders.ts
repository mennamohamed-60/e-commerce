'use server'

import { getTuokenAuth } from "@/app/_services/getTokenAuth";

export async function getUserOrders(userId: string) {
  const token = await getTuokenAuth();

  const res = await fetch(`${process.env.API}/orders/user/${userId}`, {
    headers: {
      "Content-Type": "application/json",
      token,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch user orders");
  }

  return res.json();
}
