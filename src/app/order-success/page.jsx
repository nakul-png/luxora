"use client";

import Link from "next/link";
import Navbar from "../../components/Navbar";

export default function OrderSuccess() {
  return (
    <>
      <Navbar />

      <main className="success-page">
        <div className="success-card">

          <div className="success-icon">
            ✔
          </div>

          <h1>Order Placed Successfully!</h1>

          <p>
            Thank you for shopping with <strong>LUXORA</strong>.
            Your order has been confirmed and is being prepared.
          </p>

          <div className="order-info">
            <p><strong>Order ID:</strong> #LX10256</p>
            <p><strong>Estimated Delivery:</strong> 3–5 Business Days</p>
            <p><strong>Payment Status:</strong> Confirmed ✅</p>
          </div>

          <div className="success-buttons">

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

            </div>

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