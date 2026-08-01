"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";
import ProductCard from "../../components/ProductCard";
import products from "../../data/products";

export default function Shop() {
  const [category, setCategory] = useState("All");

  const filteredProducts = products.filter(
    (product) =>
      category === "All" || product.category === category
  );

  return (
    <>
      <Navbar />

      <main className="shop-page">
        <h1>Shop</h1>

        <div className="search-bar">
          <input
            type="text"
            placeholder="🔍 Search products..."
          />
        </div>

        <div className="shop-options">
          <select>
            <option>Newest</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Best Selling</option>
          </select>
        </div>

        <div className="category-filter">
          <button onClick={() => setCategory("All")}>All</button>
          <button onClick={() => setCategory("Oversized")}>Oversized</button>
          <button onClick={() => setCategory("Hoodies")}>Hoodies</button>
          <button onClick={() => setCategory("Tank Tops")}>Tank Tops</button>
          <button onClick={() => setCategory("Bottoms")}>Bottoms</button>
          <button onClick={() => setCategory("Accessories")}>Accessories</button>
        </div>

        <div className="products">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
            />
          ))}
        </div>
      </main>
    </>
  );
}