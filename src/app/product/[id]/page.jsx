import ProductCard from "../../../components/ProductCard";
import Navbar from "../../../components/Navbar";
import products from "../../../data/products";
import ProductDetails from "../../../components/ProductDetails";

export default async function ProductPage({ params }) {
  const { id } = await params;

  const product = products.find((item) => item.id === id);

  if (!product) {
    return (
      <>
        <Navbar />
        <main
          style={{
            padding: "120px 60px",
            color: "white",
            background: "#000",
            minHeight: "100vh",
          }}
        >
          <h1>Product Not Found</h1>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="product-page">
        <ProductDetails product={product} />

<section className="related-products">

  <h2>You May Also Like</h2>

  <div className="products">
    {products
      .filter((item) => item.id !== product.id)
      .slice(0, 4)
      .map((item) => (
        <ProductCard
          key={item.id}
          id={item.id}
          image={item.image}
          name={item.name}
          price={item.price}
        />
      ))}
  </div>

</section>

<section className="reviews-section">

  <h2>Customer Reviews</h2>

  <div className="review-card">
    <h4>⭐⭐⭐⭐⭐ Rahul Sharma</h4>
    <p>
      Amazing quality. The fabric feels premium and the fit is perfect.
    </p>
  </div>

  <div className="review-card">
    <h4>⭐⭐⭐⭐⭐ Priya Singh</h4>
    <p>
      Loved the oversized fit. Delivery was quick and packaging was premium.
    </p>
  </div>

  <div className="review-card">
    <h4>⭐⭐⭐⭐ Arjun Verma</h4>
    <p>
      Worth every rupee. Will definitely order again.
    </p>
  </div>

</section>
      </main>
    </>
  );
}