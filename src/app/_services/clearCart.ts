"use client";

export async function clearCart() {
  const res = await fetch(`/api/cart`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });

  const data = await res.json();

  if (!res.ok || data.status === 401 || data.error) {
    throw new Error(data.message || "Failed to clear cart");
  }

  return data;
}
