"use client";
import { useCart } from "../context/CartContext";
import Link from "next/link";
import Image from "next/image";

export default function ProductCard({
  id,
  image,
  name,
  price,
}) {

  const { addToCart } = useCart();

  return (
    <div className="card">
      <span className="badge">NEW</span>

      <Link href={`/product/${id}`}>
        <Image
          src={image}
          alt={name}
          width={300}
          height={400}
        />

        <div className="quick-view">
          Quick View
        </div>

        <h3>{name}</h3>
      </Link>

      <p className="price">
        <span className="old-price">₹2999</span>
        <span className="new-price">₹{price}</span>
      </p>

      <button
  className="buy-btn"
  onClick={() =>
    addToCart({
      id,
      image,
      name,
      price,
      quantity: 1,
    })
  }
>
  Add to Cart
</button>
    </div>
  );
}