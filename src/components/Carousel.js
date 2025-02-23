import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  { 
    src: "/images/breaking1.jpg", 
    title: "The Blues Walkthrough", 
    description: ["Best team ever gearing up", "The Blues ready to take over", "Conor Gallagher exit?"]
  },
  { 
    src: "/images/breaking2.jpg", 
    title: "Cold Palmer", 
    description: ["Temperatures drop across London", "Cole Palmer the new prince?", "The world ain't ready"]
  },
  { 
    src: "/images/breaking3.jpg", 
    title: "Team Spirit", 
    description: ["Jackson ready for the step-up?", "Maresca building team spirit", "Disasi Exit?"]
  }
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 20)); // Progress bar update
    }, 1000);

    const slideInterval = setInterval(() => {
      nextSlide();
    }, 5000); // Switch every 5s

    return () => {
      clearInterval(interval);
      clearInterval(slideInterval);
    };
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
    setProgress(0);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
    setProgress(0);
  };

  return (
    <div className="relative w-full h-[650px] overflow-hidden">
      {/* Image Container */}
      {images.map((img, index) => (
        <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ${index === current ? "opacity-100" : "opacity-0"}`}>
          <img src={img.src} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
          {/* Text Overlay */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-60 text-white px-6 py-4 rounded-lg text-center w-3/4">
            <h2 className="text-xl font-bold">{img.title}</h2>
            <div className="grid grid-cols-3 gap-4 mt-2 text-sm">
              {img.description.map((desc, i) => (
                <p key={i}>{desc}</p>
              ))}
            </div>
          </div>
        </div>
      ))}

      {/* Progress Bar */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-1/3 bg-gray-300 h-1">
        <div className="h-full bg-blue-600 transition-all duration-1000" style={{ width: `${progress}%` }}></div>
      </div>

      {/* Arrows */}
      <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 p-3 rounded-full hover:bg-opacity-100 transition">
        <Image src="/images/left-arrow.png" alt="Previous" width={30} height={30} />
      </button>

      <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 p-3 rounded-full hover:bg-opacity-100 transition">
        <Image src="/images/left-arrow.png" alt="Next" width={30} height={30} className="rotate-180" />
      </button>
    </div>
  );
}
