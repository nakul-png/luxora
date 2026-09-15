"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";

export default function OrderSuccess() {
  const [orderId, setOrderId] = useState("");

  useEffect(() => {
    let existingOrder = localStorage.getItem("luxora_order");

    if (existingOrder) {
      const order = JSON.parse(existingOrder);
      setOrderId(order.orderId);
      return;
    }

    const newOrderId =
      "LX" + Date.now().toString().slice(-6);

    const order = {
      orderId: newOrderId,
      trackingId:
        "TRK" + Date.now().toString().slice(-9),
      estimatedDelivery: "3–5 Business Days",
      paymentStatus: "Pending",
      orderStatus: "Confirmed",
    };

    localStorage.setItem(
      "luxora_order",
      JSON.stringify(order)
    );

    setOrderId(newOrderId);
  }, []);

  return (
    <>
      <Navbar />

      <main className="success-page">
        <div className="success-card">

          <div className="success-icon">
            ✔
          </div>

          <h1>
            Order Placed Successfully!
          </h1>

          <p>
            Thank you for shopping with{" "}
            <strong>LUXORA</strong>.
            Your order has been received and is
            being prepared.
          </p>

          <div className="order-info">

            <p>
              <strong>Order ID:</strong>{" "}
              #{orderId || "Creating..."}
            </p>

            <p>
              <strong>
                Estimated Delivery:
              </strong>{" "}
              3–5 Business Days
            </p>

            <p>
              <strong>
                Payment Status:
              </strong>{" "}
              Pending
            </p>

          </div>

          <div className="success-buttons">

            <Link href="/order-tracking">
              <button className="checkout-btn">
                📦 Track Order
              </button>
            </Link>

            <Link href="/shop">
              <button className="continue-btn">
                Continue Shopping
              </button>
            </Link>

            <Link href="/">
              <button className="home-btn">
                Back to Home
              </button>
            </Link>

          </div>

        </div>
      </main>
    </>
  );
}