"use client";

type Order = {
  id: string;
  createdAt: string;
  totalOrderPrice: number;
  isPaid: boolean;
  isDelivered: boolean;
};

export default function OrdersClient({ orders }: { orders: Order[] }) {
  if (!orders || orders.length === 0) {
    return <p className="text-gray-500 text-lg">No orders found 🚫</p>;
  }

  return (
    <div className="space-y-6">
      {orders.map((order) => (
        <div
          key={order.id}
          className="border rounded-lg p-4 shadow-md bg-white"
        >
          <p>
            <strong>Order Number:</strong> {order.id}
          </p>
          <p>
            <strong>Date:</strong>{" "}
            {new Date(order.createdAt).toLocaleDateString()}
          </p>
          <p>
            <strong>Total:</strong> {order.totalOrderPrice} EGP
          </p>
          <p>
            <strong>Paid:</strong> {order.isPaid ? "✔️ Yes" : "❌ No"}
          </p>
          <p>
            <strong>Delivered:</strong>{" "}
            {order.isDelivered ? "🚚 Yes" : "⌛ No"}
          </p>
        </div>
      ))}
    </div>
  );
}
