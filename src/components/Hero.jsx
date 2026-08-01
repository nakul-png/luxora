export default function Hero() {
  return (
    <section className="hero">

      <video
        autoPlay
        loop
        muted
       playsInline
       className="hero-video"
     >
       <source src="/videos/hero.mp4" type="video/mp4" />
    </video>

      <div className="overlay"></div>

      <div className="hero-content">
        <h1>LUXORA</h1>
        <p>Crafted for the Bold. Designed for the Fearless.</p>
        <a href="#featured-products">
  <div className="hero-buttons">
  <button className="buy-btn">Shop Now</button>
  <button className="secondary-btn">Explore Collection</button>
</div>
</a>
      </div>

    </section>
  );
}