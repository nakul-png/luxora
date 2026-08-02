import Link from "next/link";

export default function FashionVideo() {
  return (
    <section className="fashion-video">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fashion-bg"
      >
        <source src="/videos/fashion.mp4" type="video/mp4" />
      </video>

      <div className="fashion-overlay">
        <h2>THE LUXORA EXPERIENCE</h2>

        <p>
          Crafted for the Bold. Designed for the Fearless.
        </p>

        <Link href="/collections" className="fashion-btn">
          Explore Collection
        </Link>
      </div>
    </section>
  );
}