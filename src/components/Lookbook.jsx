import Image from "next/image";

export default function Lookbook() {
  const images = [
    "/images/look1.jpg",
    "/images/look2.jpg",
    "/images/look3.jpg",
    "/images/look4.jpg",
    "/images/look5.jpg",
    "/images/look6.jpg",
  ];

  return (
    <section className="lookbook">
      <h2>LUXORA LOOKBOOK</h2>

      <div className="lookbook-grid">
        {images.map((image, index) => (
          <div key={index} className="lookbook-card">
            <Image
              src={image}
              alt={`Look ${index + 1}`}
              width={500}
              height={600}
            />
          </div>
        ))}
      </div>
    </section>
  );
}