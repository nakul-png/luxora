"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import Navbar from "../../components/Navbar";

export default function OrderTrackingPage() {
  const router = useRouter();

  const [order, setOrder] = useState(null);

  useEffect(() => {
    const savedOrder =
      localStorage.getItem("luxora_order");

    if (savedOrder) {
      setOrder(JSON.parse(savedOrder));
    }
  }, []);

  if (!order) {
    return (
      <>
        <Navbar />

        <main className="tracking-page">

          <button
            className="back-btn"
            onClick={() => router.back()}
          >
            ← Back
          </button>

          <div className="tracking-card">

            <h1>
              📦 Track Your Order
            </h1>

            <p>
              No recent order found.
            </p>

            <Link href="/shop">
              <button className="continue-btn">
                Continue Shopping
              </button>
            </Link>

          </div>

        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="tracking-page">

        <button
          className="back-btn"
          onClick={() => router.back()}
        >
          ← Back
        </button>

        <div className="tracking-card">

          <h1>
            📦 Track Your Order
          </h1>

          <h2>
            Order ID: #{order.orderId}
          </h2>

          <p className="tracking-id">
            Tracking ID:{" "}
            <strong>
              {order.trackingId}
            </strong>
          </p>

          <p className="delivery-date">
            Estimated Delivery:
            <strong>
              {" "}
              {order.estimatedDelivery}
            </strong>
          </p>

          <div className="tracking-status">

            <div className="status active">
              ✅ Order Confirmed
            </div>

            <div className="status active">
              📦 Packed
            </div>

            <div className="status">
              🚚 Shipped
            </div>

            <div className="status">
              🚛 Out for Delivery
            </div>

            <div className="status">
              🎉 Delivered
            </div>

          </div>

          <Link href="/shop">
            <button className="continue-btn">
              Continue Shopping
            </button>
          </Link>

        </div>

      </main>
    </>
  );
}