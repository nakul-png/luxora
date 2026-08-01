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
            Thank you for shopping with LUXORA.
          </p>

          <h3>Order ID: LX10256</h3>

          <p>
            Estimated Delivery:
            <strong> 3–5 Business Days</strong>
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