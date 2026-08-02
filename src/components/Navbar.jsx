"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cartItems } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      <Link href="/" className="logo">
        LUXORA
      </Link>

      <div className="mobile-icons">

  <Link href="/cart" className="mobile-cart">
    🛒
    <span>{cartItems.length}</span>
  </Link>

  <div
    className="menu-btn"
    onClick={() => setMenuOpen(true)}
  >
    ☰
  </div>

</div>

      <ul className="nav-links desktop-menu">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/shop">Shop</Link></li>
        <li><Link href="/collections">Collections</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>
        <li><Link href="/cart">🛒 Cart ({cartItems.length})</Link></li>
      </ul>

      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>

        <div
          className="close-btn"
          onClick={() => setMenuOpen(false)}
        >
          ✕
        </div>

        <Link href="/" onClick={() => setMenuOpen(false)}>
          Home
        </Link>

        <Link href="/shop" onClick={() => setMenuOpen(false)}>
          Shop
        </Link>

        <Link href="/collections" onClick={() => setMenuOpen(false)}>
          Collections
        </Link>

        <Link href="/about" onClick={() => setMenuOpen(false)}>
          About
        </Link>

        <Link href="/contact" onClick={() => setMenuOpen(false)}>
          Contact
        </Link>

        

      </div>

    </nav>
  );
}