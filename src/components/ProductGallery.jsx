"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProductGallery({ images, name }) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="product-gallery">
      <div className="main-image-container">
        <Image
          src={selectedImage}
          alt={name}
          width={500}
          height={600}
          className="main-image"
        />
      </div>

      <div className="thumbnail-gallery">
        {images.map((img, index) => (
          <Image
            key={index}
            src={img}
            alt={`${name}-${index}`}
            width={90}
            height={110}
            className="thumbnail"
            onClick={() => setSelectedImage(img)}
          />
        ))}
      </div>
    </div>
  );
}