"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import Navbar from "../../components/Navbar";
import { useCart } from "../../context/CartContext";

import {
  createPaymentOrder,
  verifyPayment,
} from "../../services/paymentService";

export default function CheckoutPage() {
  const router = useRouter();

  const { cartItems } = useCart();

  const [paymentLoading, setPaymentLoading] = useState(false);
  const [paymentError, setPaymentError] = useState("");

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  /*
   * Load Razorpay Checkout script
   */
  const loadRazorpayScript = () => {
    return new Promise((resolve, reject) => {
      // Already loaded
      if (window.Razorpay) {
        resolve(true);
        return;
      }

      // Check if script already exists
      const existingScript = document.querySelector(
        'script[src="https://checkout.razorpay.com/v1/checkout.js"]'
      );

      if (existingScript) {
        existingScript.addEventListener("load", () => {
          resolve(true);
        });

        existingScript.addEventListener("error", () => {
          reject(new Error("Razorpay script failed to load."));
        });

        return;
      }

      const script = document.createElement("script");

      script.src =
        "https://checkout.razorpay.com/v1/checkout.js";

      script.async = true;

      script.onload = () => {
        console.log("Razorpay Checkout script loaded.");
        resolve(true);
      };

      script.onerror = () => {
        console.error("Razorpay Checkout script failed.");
        reject(new Error("Unable to load Razorpay Checkout."));
      };

      document.body.appendChild(script);
    });
  };

  /*
   * Start Razorpay payment
   */
  const handlePayment = async () => {
    try {
      setPaymentLoading(true);
      setPaymentError("");

      console.log("Starting payment...");
      console.log("Cart total:", total);

      // -----------------------------------------
      // 1. Create Razorpay order
      // -----------------------------------------

      const paymentData = await createPaymentOrder(total);

      console.log("Payment order response:", paymentData);

      if (!paymentData?.success) {
        throw new Error(
          paymentData?.message ||
            "Unable to create payment order."
        );
      }

      if (!paymentData?.order?.id) {
        throw new Error(
          "Razorpay order ID was not received."
        );
      }

      // -----------------------------------------
      // 2. Load Razorpay Checkout
      // -----------------------------------------

      await loadRazorpayScript();

      if (!window.Razorpay) {
        throw new Error(
          "Razorpay Checkout is not available."
        );
      }

      // -----------------------------------------
      // 3. Razorpay options
      // -----------------------------------------

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,

        amount: paymentData.order.amount,

        currency: paymentData.order.currency,

        name: "LUXORA",

        description: "LUXORA Order",

        order_id: paymentData.order.id,

        handler: async function (response) {
          console.log(
            "Razorpay payment response:",
            response
          );

          try {
            setPaymentLoading(true);

            // -----------------------------------------
            // 4. Verify payment
            // -----------------------------------------

            const verification = await verifyPayment({
              razorpay_order_id:
                response.razorpay_order_id,

              razorpay_payment_id:
                response.razorpay_payment_id,

              razorpay_signature:
                response.razorpay_signature,
            });

            console.log(
              "Payment verification response:",
              verification
            );

            // -----------------------------------------
            // 5. Redirect ONLY after verification
            // -----------------------------------------

            if (verification?.success === true) {
              router.push("/order-success");
            } else {
              setPaymentError(
                "Payment verification failed."
              );

              setPaymentLoading(false);
            }
          } catch (error) {
            console.error(
              "Payment verification error:",
              error
            );

            setPaymentError(
              error?.response?.data?.message ||
                "Payment verification failed."
            );

            setPaymentLoading(false);
          }
        },

        modal: {
          ondismiss: function () {
            console.log(
              "Razorpay Checkout closed by user."
            );

            setPaymentLoading(false);
          },
        },

        theme: {
          color: "#000000",
        },
      };

      // -----------------------------------------
      // 6. Validate Razorpay key
      // -----------------------------------------

      if (!options.key) {
        throw new Error(
          "Razorpay Key ID is missing."
        );
      }

      console.log(
        "Opening Razorpay Checkout..."
      );

      // -----------------------------------------
      // 7. Open Razorpay
      // -----------------------------------------

      const razorpay = new window.Razorpay(
        options
      );

      razorpay.on(
        "payment.failed",
        function (response) {
          console.error(
            "Razorpay payment failed:",
            response?.error
          );

          setPaymentError(
            response?.error?.description ||
              "Payment failed. Please try again."
          );

          setPaymentLoading(false);
        }
      );

      razorpay.open();
    } catch (error) {
      console.error(
        "Payment initialization error:",
        error
      );

      setPaymentError(
        error?.response?.data?.message ||
          error?.message ||
          "Unable to start payment."
      );

      setPaymentLoading(false);
    }
  };

  // -----------------------------------------
  // Empty cart
  // -----------------------------------------

  if (cartItems.length === 0) {
    return (
      <>
        <Navbar />

        <main className="checkout-page">
          <h1>Your cart is empty.</h1>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="checkout-page">

        <button
          className="back-btn"
          onClick={() => router.back()}
        >
          ← Back
        </button>

        <div className="checkout-container">

          {/* ================================= */}
          {/* CHECKOUT FORM */}
          {/* ================================= */}

          <div className="checkout-form">

            <h1>Checkout</h1>

            <input
              type="text"
              placeholder="👤 Full Name"
            />

            <input
              type="email"
              placeholder="📧 Email Address"
            />

            <input
              type="tel"
              placeholder="📱 Phone Number"
            />

            <textarea
              placeholder="🏠 House No., Building, Street, Area"
            />

            <input
              type="text"
              placeholder="🏙 City"
            />

            <input
              type="text"
              placeholder="🌍 State"
            />

            <input
              type="text"
              placeholder="📮 PIN Code"
            />

            <h2 className="payment-title">
              Payment Method
            </h2>

            <div className="payment-methods">

              <label className="payment-option">
                <input
                  type="radio"
                  name="payment"
                  defaultChecked
                />

                <span>
                  💳 Credit / Debit Card
                </span>
              </label>

              <label className="payment-option">
                <input
                  type="radio"
                  name="payment"
                />

                <span>
                  📱 UPI
                </span>
              </label>

              <label className="payment-option">
                <input
                  type="radio"
                  name="payment"
                />

                <span>
                  🏦 Net Banking
                </span>
              </label>

              <label className="payment-option">
                <input
                  type="radio"
                  name="payment"
                />

                <span>
                  💵 Cash on Delivery
                </span>
              </label>

            </div>

            {/* Payment error */}

            {paymentError && (
              <div
                style={{
                  color: "#ff4d4d",
                  marginTop: "15px",
                  marginBottom: "15px",
                  textAlign: "center",
                }}
              >
                {paymentError}
              </div>
            )}

            {/* Payment button */}

            <button
              className="checkout-btn"
              onClick={handlePayment}
              disabled={paymentLoading}
            >
              {paymentLoading
                ? "Processing..."
                : "Continue to Payment"}
            </button>

          </div>

          {/* ================================= */}
          {/* ORDER SUMMARY */}
          {/* ================================= */}

          <div className="order-summary">

            <h2>Order Summary</h2>

            {cartItems.map((item) => (
              <div
                key={`${item.id}-${item.size}`}
                className="summary-item"
              >

                <div>

                  <strong>
                    {item.name}
                  </strong>

                  <p>
                    Size: {item.size}
                  </p>

                  <p>
                    Qty: {item.quantity}
                  </p>

                </div>

                <span>
                  ₹{item.price * item.quantity}
                </span>

              </div>
            ))}

            <hr />

            <div className="summary-item">

              <span>
                Shipping
              </span>

              <span>
                FREE
              </span>

            </div>

            <hr />

            <div className="summary-total">

              <strong>
                Total
              </strong>

              <strong>
                ₹{total}
              </strong>

            </div>

          </div>

        </div>

      </main>
    </>
  );
}