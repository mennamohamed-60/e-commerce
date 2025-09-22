import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

const API_URL = process.env.API;

export async function GET(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  if (!token?.accessToken) {
    return NextResponse.json({ status: 401, error: "unauthorized" });
  }

  const res = await fetch(`${API_URL}/wishlist`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      token: token.accessToken,
    },
  });

  const data = await res.json();
  return NextResponse.json(data);
}

export async function POST(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  if (!token?.accessToken) {
    return NextResponse.json({ status: 401, error: "unauthorized" });
  }

  const { productId } = await req.json();

  const res = await fetch(`${API_URL}/wishlist`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      token: token.accessToken,
    },
    body: JSON.stringify({ productId }),
  });

  const data = await res.json();
  return NextResponse.json(data);
}
