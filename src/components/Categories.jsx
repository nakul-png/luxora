import Image from "next/image";

export default function Categories() {
  return (
    <section className="categories">
      <h2>Shop by Category</h2>

      <div className="category-grid">

        <div className="category-card">
          <Image
            src="/images/oversized.jpg"
            alt="Oversized T-Shirts"
            width={400}
            height={500}
          />
          <h3>Oversized T-Shirts</h3>
        </div>

        <div className="category-card">
          <Image
            src="/images/hoodies.jpg"
            alt="Hoodies"
            width={400}
            height={500}
          />
          <h3>Hoodies</h3>
        </div>

        <div className="category-card">
          <Image
            src="/images/tanktops.jpg"
            alt="Tank Tops"
            width={400}
            height={500}
          />
          <h3>Tank Tops</h3>
        </div>

        <div className="category-card">
          <Image
            src="/images/bottoms.jpg"
            alt="Bottoms"
            width={400}
            height={500}
          />
          <h3>Bottoms</h3>
        </div>

        <div className="category-card">
          <Image
            src="/images/accessories.jpg"
            alt="Accessories"
            width={400}
            height={500}
          />
          <h3>Accessories</h3>
        </div>

      </div>
    </section>
  );
}