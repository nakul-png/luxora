"use client";
import ProductCard from "./ProductCard";

export default function FeaturedProducts() {
  return (
    <section id="featured-products" className="featured-products">
      <h2>Featured Products</h2>

      <div className="products">
        <ProductCard
          image="/images/hoodie.jpg"
          name="Black Hoodie"
          price="2499"
        />

        <ProductCard
          image="/images/jacket.jpg"
          name="Street Jacket"
          price="3999"
        />

        <ProductCard
          image="/images/tshirt.jpg"
          name="Oversized T-Shirt"
          price="1499"
        />
      </div>
    </section>
  );
}