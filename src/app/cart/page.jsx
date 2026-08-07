"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import Navbar from "../../components/Navbar";
import Image from "next/image";
import { useCart } from "../../context/CartContext";

export default function CartPage() {
  const router = useRouter();
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [couponMessage, setCouponMessage] = useState("");
  const applyCoupon = () => {
    const subtotal = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );

    if (coupon === "WELCOME10") {
      setDiscount(subtotal * 0.1);
      setCouponMessage("✅ WELCOME10 Applied");
    } else if (coupon === "LUXORA20") {
      setDiscount(subtotal * 0.2);
      setCouponMessage("✅ LUXORA20 Applied");
    } else if (coupon === "FIRST50") {
      setDiscount(50);
      setCouponMessage("✅ FIRST50 Applied");
    } else {
      setDiscount(0);
      setCouponMessage("❌ Invalid Coupon");
    }
  };

  return (
    <>
      <Navbar />

      <main className="cart-page">
        <button
          className="back-btn"
          onClick={() => router.back()}
        >
          ← Back
        </button>
        <h1>Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="cart-items">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <Image
                  src={item.image}
                  alt={item.name}
                  width={120}
                  height={150}
                />

                <div className="cart-details">
                  <h3>{item.name}</h3>
                  <p>Size: {item.size}</p>

                  <p>₹{item.price}</p>

                  <div className="quantity-controls">
                    <button onClick={() => decreaseQuantity(item.id)}>
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button onClick={() => increaseQuantity(item.id)}>
                      +
                    </button>
                  </div>

                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(item.id)}
                  >
                    🗑 Remove
                  </button>
                </div>
              </div>
            ))}

            <div className="cart-summary">

              <h2>Order Summary</h2>
              <div className="coupon-box">

                <input
                  type="text"
                  placeholder="Enter Coupon Code"
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                />

                <button onClick={applyCoupon}>
                  Apply
                </button>

              </div>

              <p className="coupon-message">
                {couponMessage}
              </p>


              <div className="summary-row">
                <span>Subtotal</span>
                <span>
                  ₹{cartItems.reduce(
                    (total, item) => total + item.price * item.quantity,
                    0
                  )}
                </span>
              </div>

              <div className="summary-row">
                <span>Shipping</span>
                <span>FREE</span>
              </div>
              <div className="summary-row">
                <span>Discount</span>
                <span>-₹{discount}</span>
              </div>

              <hr />

              <div className="summary-row total">
                <span>Total</span>
                <span>
                  ₹{
                    cartItems.reduce(
                      (total, item) => total + item.price * item.quantity,
                      0
                    ) - discount
                  }
                </span>
              </div>

              <Link href="/shop">
                <button className="continue-btn">
                  ← Continue Shopping
                </button>
              </Link>

              <Link href="/checkout">
                <button className="checkout-btn">
                  Proceed to Checkout
                </button>
              </Link>

            </div>
          </div>
        )}
      </main>
    </>
  );
}