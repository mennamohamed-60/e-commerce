"use client";

export async function AddToWishlist(productId: string) {
  const res = await fetch("/api/wishlist", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ productId }),
  });

  const data = await res.json();
  if (!res.ok || data.status === 401 || data.error) {
    throw new Error(data.message || "Failed to add to wishlist");
  }
  return data;
}

// /////////////////////////////

export async function DeleteFromWishlist(productId: string) {
  const res = await fetch(`/api/wishlist/${productId}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
  });

  const data = await res.json();
  if (!res.ok || data.status === 401 || data.error) {
    throw new Error(data.message || "Failed to delete from wishlist");
  }
  return data;
}
////////////////////////////////


export async function GetWishlist() {
  const res = await fetch("/api/wishlist", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
  });

  const data = await res.json();
  if (!res.ok || data.status === 401 || data.error) {
    throw new Error(data.message || "Failed to get wishlist");
  }
  return data;
}