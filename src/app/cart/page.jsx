"use client";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Image from "next/image";
import { useCart } from "../../context/CartContext";

export default function CartPage() {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  return (
    <>
      <Navbar />

      <main className="cart-page">
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
              <h2>
                Total: ₹
                {cartItems.reduce(
                  (total, item) =>
                    total + item.price * item.quantity,
                  0
                )}
              </h2>

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