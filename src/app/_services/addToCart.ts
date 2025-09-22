"use client";

export async function AddToCart(productId: string) {
  const res = await fetch("/api/cart", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",

    body: JSON.stringify({ productId }),
  });

  const data = await res.json();

  if (!res.ok || data.status === 401 || data.error) {
    throw new Error(data.message || "Failed to add to cart");
  }

  return data;
}
