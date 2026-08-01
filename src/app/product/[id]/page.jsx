import ProductCard from "../../../components/ProductCard";
import Navbar from "../../../components/Navbar";
import products from "../../../data/products";
import ProductGallery from "../../../components/ProductGallery";

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
              ⭐⭐⭐⭐⭐
              <span>(128 Reviews)</span>
            </div>

            <h2 className="product-price">
              ₹{product.price}
            </h2>

            <h3>Select Size</h3>

            <div className="sizes">
              <button>S</button>
              <button>M</button>
              <button>L</button>
              <button>XL</button>
            </div>
            
            <h3>Quantity</h3>

            <div className="quantity-box">
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>

            <p className="product-description">
              {product.description}
            </p>

            <div className="product-buttons">
              <button className="buy-btn">
                Add to Cart
              </button>

              <button className="checkout-btn">
                Buy Now
              </button>
            </div>
            <div className="product-benefits">

            <div className="benefit">
              🚚 <span>Free Shipping on Orders Above ₹999</span>
            </div>

            <div className="benefit">
     ↩️    <span>Easy 7-Day Returns</span>
            </div>

          <div className="benefit">
              🔒 <span>100% Secure Payments</span>
          </div>

  <div className="benefit">
    ✅ <span>Premium Quality Guarantee</span>
  </div>

</div>

          </div>

        </div>
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