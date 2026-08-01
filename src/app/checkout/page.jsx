"use client";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import { useCart } from "../../context/CartContext";

export default function CheckoutPage() {
  const { cartItems } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
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
        <div className="checkout-container">

          <div className="checkout-form">
            <h1>Checkout</h1>

            <input type="text" placeholder="👤 Full Name" />

<input type="email" placeholder="📧 Email Address" />

<input type="tel" placeholder="📱 Phone Number" />

<textarea placeholder="🏠 House No., Building, Street, Area"></textarea>

<input type="text" placeholder="🏙 City" />

<input type="text" placeholder="🌍 State" />

<input type="text" placeholder="📮 PIN Code" />
            <h2 className="payment-title">Payment Method</h2>

<div className="payment-methods">

  <label className="payment-option">
    <input type="radio" name="payment" defaultChecked />
    <span>💳 Credit / Debit Card</span>
  </label>

  <label className="payment-option">
    <input type="radio" name="payment" />
    <span>📱 UPI</span>
  </label>

  <label className="payment-option">
    <input type="radio" name="payment" />
    <span>🏦 Net Banking</span>
  </label>

  <label className="payment-option">
    <input type="radio" name="payment" />
    <span>💵 Cash on Delivery</span>
  </label>

</div>

            <Link href="/order-success">
              <button className="checkout-btn">
                Continue to Payment
              </button>
            </Link>
          </div>

          <div className="order-summary">
            <h2>Order Summary</h2>

            {cartItems.map((item) => (
              <div key={item.id} className="summary-item">
                <span>
                  {item.name} × {item.quantity}
                </span>

                <span>
                  ₹{item.price * item.quantity}
                </span>
              </div>
            ))}

            <hr />

            <div className="summary-total">
              <strong>Total</strong>
              <strong>₹{total}</strong>
            </div>
          </div>

        </div>
      </main>
    </>
  );
}