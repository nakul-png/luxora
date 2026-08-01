"use client";

import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cartItems } = useCart();

  return (
    <nav className="navbar">
      <div className="logo">LUXORA</div>

      <ul className="nav-links">
        <li>
          <Link href="/">Home</Link>
        </li>

        <li>
          <Link href="/shop">Shop</Link>
        </li>

        <li>
          <Link href="/collections">Collections</Link>
        </li>

        <li>
          <Link href="/about">About</Link>
        </li>

        <li>
          <Link href="/contact">Contact</Link>
        </li>

        <li>
          <Link href="/cart">
            🛒 Cart ({cartItems.length})
          </Link>
        </li>
      </ul>
    </nav>
  );
}