export default function Newsletter() {
  return (
    <section className="newsletter">
      <h2>Join The LUXORA Community</h2>

      <p>
        Be the first to know about new drops, exclusive offers and limited collections.
      </p>

      <div className="newsletter-form">
        <input
          type="email"
          placeholder="Enter your email"
        />

        <button>Subscribe</button>
      </div>
    </section>
  );
}