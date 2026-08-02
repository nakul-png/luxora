"use client";

import ProductCard from "./ProductCard";

export default function FeaturedProducts() {
  return (
    <section id="featured-products" className="featured-products">

      <h2>Featured Products</h2>

      <div className="products">

        <ProductCard
          id="funky-hoodie"
          image="/images/hoodies.jpg"
          name="Black Hoodie"
          price={2499}
        />

        <ProductCard
          id="funky-cargo-pants"
          image="/images/bottoms.jpg"
          name="Street Cargo"
          price={3999}
        />

        <ProductCard
          id="funky-t-shirt"
          image="/images/tshirt.jpg"
          name="Oversized T-Shirt"
          price={1499}
        />

      </div>

    </section>
  );
}