"use client";

import Navbar from "../../components/Navbar";
import ProductCard from "../../components/ProductCard";
import { useWishlist } from "../../context/WishlistContext";

export default function WishlistPage() {
  const { wishlistItems } = useWishlist();

  return (
    <>
      <Navbar />

      <main className="shop-page">
        <h1>My Wishlist ❤️</h1>

        {wishlistItems.length === 0 ? (
          <div className="no-products">
            <h2>Your wishlist is empty.</h2>
            <p>Add your favourite products to see them here.</p>
          </div>
        ) : (
          <div className="products">
            {wishlistItems.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                image={product.image}
                name={product.name}
                price={product.price}
              />
            ))}
          </div>
        )}
      </main>
    </>
  );
}