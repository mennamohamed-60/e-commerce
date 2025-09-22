import { getTuokenAuth } from "@/app/_services/getTokenAuth";
import OrdersClient from "./_components/OrdersClient";
import { getServerSession } from "next-auth";
import { authOptions } from "@/Auth";

export default async function AllOrdersPage() {
  const session = await getServerSession(authOptions);
  const token = await getTuokenAuth();

  if (!session?.user?.id) {
    throw new Error("User ID not found in session");
  }

  const userId = session.user.id;

  const res = await fetch(`${process.env.API}/orders/user/${userId}`, {
    headers: {
      token: token,
    },
    cache: "no-store",
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`Failed to fetch orders: ${res.status} - ${errorText}`);
  }

  const orders = await res.json();

  return <OrdersClient orders={orders} />;
}
