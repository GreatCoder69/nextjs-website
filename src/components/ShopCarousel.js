import { useState, useEffect } from "react";
import Image from "next/image";

const images = ["/images/banner1.png", "/images/banner2.png"]; // Place images in 'public/images/'

export default function ShopCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[530px] overflow-hidden">
      {images.map((img, index) => (
        <Image
          key={index}
          src={img}
          alt="Shop Banner"
          fill
          className={`absolute inset-0 object-cover transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}
