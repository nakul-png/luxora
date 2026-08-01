"use client";

import Navbar from "../../components/Navbar";
import { useCart } from "../../context/CartContext";
import Image from "next/image";

export default function CartPage() {
  const { cartItems } = useCart();

  return (
    <>
      <Navbar />

      <main className="cart-page">
        <h1>Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="cart-items">
            {cartItems.map((item, index) => (
              <div className="cart-item" key={index}>
                <Image
                  src={item.image}
                  alt={item.name}
                  width={120}
                  height={150}
                />

                <div>
                  <h3>{item.name}</h3>
                  <p>₹{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </>
  );
}