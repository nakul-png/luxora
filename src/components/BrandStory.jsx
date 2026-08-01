import Link from "next/link";

export default function BrandStory() {
  return (
    <section className="brand-story">
      <div className="brand-content">
        <h2>ABOUT LUXORA</h2>

        <p>
          LUXORA is more than clothing. We create premium streetwear
          that blends comfort, confidence, and timeless style.
        </p>

        <p>
          Every collection is designed for people who want to stand out
          without saying a word.
        </p>

        <Link href="/collections">
          <button>Discover Our Story</button>
        </Link>
      </div>
    </section>
  );
}