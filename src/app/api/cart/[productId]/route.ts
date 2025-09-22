import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

const API_URL = process.env.API;

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ productId: string }> }
): Promise<NextResponse> {
  const { productId } = await params;

  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  if (!token?.accessToken) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const res = await fetch(`${API_URL}/cart/${productId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      token: token.accessToken,
    },
    cache: "no-store",
  });

  const data = await res.json();
  return NextResponse.json(data, { status: res.status });
}

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ productId: string }> }
): Promise<NextResponse> {
  const { productId } = await params;

  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  if (!token?.accessToken) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const { count }: { count: number } = await req.json();

  const res = await fetch(`${API_URL}/cart/${productId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      token: token.accessToken,
    },
    body: JSON.stringify({ count }),
  });

  const data = await res.json();
  return NextResponse.json(data, { status: res.status });
}
