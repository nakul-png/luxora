"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "../context/CartContext";
import ProductGallery from "./ProductGallery";

export default function ProductDetails({ product }) {

  const router = useRouter();
  const { addToCart } = useCart();

  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCart = () => {
  addToCart({
    id: product.id,
    image: product.image,
    name: product.name,
    price: product.price,
    quantity,
    size: selectedSize,
  });

  alert("Added to cart successfully!");
};

  const handleBuyNow = () => {
  addToCart({
    id: product.id,
    image: product.image,
    name: product.name,
    price: product.price,
    quantity,
    size: selectedSize,
  });

  router.push("/checkout");
};

  return (
    <>
      <div className="product-container">

        <div className="product-image">
          <ProductGallery
            images={product.images}
            name={product.name}
          />
        </div>

        <div className="product-details">

          <div className="product-header">
            <h1>{product.name}</h1>

            <button className="wishlist-btn">
              ❤️
            </button>
          </div>

          <div className="product-rating">
            ⭐⭐⭐⭐⭐ <span>(128 Reviews)</span>
          </div>

          <h2 className="product-price">
            ₹{product.price}
          </h2>

          <h3>Select Size</h3>

          <div className="sizes">
            {["S","M","L","XL"].map((size) => (
              <button
                key={size}
                className={selectedSize === size ? "active-size" : ""}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>

          <h3>Quantity</h3>

          <div className="quantity-controls">
            <button onClick={decreaseQuantity}>-</button>
            <span>{quantity}</span>
            <button onClick={increaseQuantity}>+</button>
          </div>

          <p className="product-description">
            {product.description}
          </p>

          <div className="product-buttons">
            <button
              className="buy-btn"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>

            <button
              className="checkout-btn"
              onClick={handleBuyNow}
            >
              Buy Now
            </button>
          </div>

        </div>

      </div>
    </>
  );
}