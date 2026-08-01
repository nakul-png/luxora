import Navbar from "../../components/Navbar";
import Link from "next/link";

export default function CollectionsPage() {
  const collections = [
    {
      title: "Oversized Collection",
      image: "/images/oversized-banner.jpg",
      category: "Oversized",
    },
    {
      title: "Hoodie Collection",
      image: "/images/hoodie-banner.jpg",
      category: "Hoodies",
    },
    {
      title: "Tank Tops",
      image: "/images/tanktop-banner.jpg",
      category: "Tank Tops",
    },
    {
      title: "Bottoms",
      image: "/images/bottoms-banner.jpg",
      category: "Bottoms",
    },
    {
      title: "Accessories",
      image: "/images/accessories-banner.jpg",
      category: "Accessories",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="collections-page">

        <section className="collections-hero">
          <h1>OUR COLLECTIONS</h1>
          <p>
            Discover premium streetwear crafted for confidence and comfort.
          </p>
        </section>

        {collections.map((item) => (
          <Link
            key={item.category}
            href={`/shop?category=${item.category}`}
            className="collection-card"
          >
            <img
              src={item.image}
              alt={item.title}
            />

            <div className="collection-overlay">
              <h2>{item.title}</h2>
              <button>Explore Collection</button>
            </div>
          </Link>
        ))}

      </main>
    </>
  );
}