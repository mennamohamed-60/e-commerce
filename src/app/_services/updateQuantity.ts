"use client";

export async function updateQuantity({
  productId,
  count,
}: {
  productId: string;
  count: number;
}) {
  const res = await fetch(`/api/cart/${productId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ count }),
  });

  const data = await res.json();

  if (!res.ok || data.status === 401 || data.error) {
    throw new Error(data.message || "Failed to update quantity");
  }

  return data;
}
