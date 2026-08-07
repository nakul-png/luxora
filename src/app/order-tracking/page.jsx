"use client";

import Navbar from "../../components/Navbar";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function OrderTrackingPage() {
  const router = useRouter();

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

          <h1>📦 Track Your Order</h1>

          <h2>Order ID: LX10256</h2>

          <p className="tracking-id">
            Tracking ID: <strong>TRK987654321</strong>
          </p>

          <p className="delivery-date">
            Estimated Delivery:
            <strong> 10 August 2026</strong>
          </p>

          <div className="tracking-status">

            <div className="status active">
              ✅ Order Confirmed
            </div>

            <div className="status active">
              📦 Packed
            </div>

            <div className="status active">
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