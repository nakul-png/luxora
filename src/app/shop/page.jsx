"use client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useState } from "react";
import Navbar from "../../components/Navbar";
import ProductCard from "../../components/ProductCard";
import products from "../../data/products";

export default function Shop() {
  const router = useRouter();

  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("Newest");

  let filteredProducts = products.filter((product) => {

    const matchesCategory =
      category === "All" || product.category === category;

    const matchesSearch =
      product.name.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;

  });

  if (sort === "Price: Low to High") {
    filteredProducts.sort((a, b) => a.price - b.price);
  }

  if (sort === "Price: High to Low") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <>
      <Navbar />

      <main className="shop-page">
        <button
          className="back-btn"
          onClick={() => router.back()}
        >
          ← Back
        </button>
        <h1>Shop</h1>

        <div className="search-bar">
          <input
            type="text"
            placeholder="🔍 Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="shop-options">
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option>Newest</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Best Selling</option>
          </select>
        </div>

        <div className="category-filter">

          {[
            "All",
            "Oversized",
            "Hoodies",
            "Tank Tops",
            "Bottoms",
            "Accessories",
          ].map((item) => (

            <button
              key={item}
              className={category === item ? "active" : ""}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>

          ))}

        </div>

        <div className="products">

          {filteredProducts.length > 0 ? (

            filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                image={product.image}
                name={product.name}
                price={product.price}
              />
            ))

          ) : (

            <div className="no-products">
              <h2>😕 No Products Found</h2>
              <p>Try searching with another keyword.</p>
            </div>

          )}

        </div>

      </main>
    </>
  );
}