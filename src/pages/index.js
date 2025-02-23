import { useState } from "react";
import Header from "@/components/Header";
import Carousel from "@/components/Carousel";
import NewsSection from "@/components/NewsSection";
import WatchSection from "@/components/WatchSection";
import StandingsTable from "@/components/StandingsTable";
import ShopCarousel from "@/components/ShopCarousel";
import ProductScroller from "@/components/ProductScroller";
import ExpandedProduct from "@/components/ExpandedProduct";
import Footer from "@/components/Footer"; // Import Footer

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [newsOpen, setNewsOpen] = useState(false); // Track if a news card is clicked

  // Hide header when a news card is open or a product is expanded
  const hideHeader = selectedProduct || newsOpen;

  return (
    <div className="pt-[80px] flex flex-col min-h-screen">
      {!hideHeader && <Header />} {/* Hide header if needed */}

      <main className="flex-grow">
        <Carousel />

        <section id="news">
          <NewsSection setNewsOpen={setNewsOpen} /> {/* Pass setNewsOpen to control header */}
        </section>

        <section id="watch"><WatchSection /></section>
        <section id="standings"><StandingsTable /></section>

        {/* Shopping Section */}
        <section id="shop">
          <div className="container mx-auto px-4">
            {/* Shop Heading */}
            <div className="flex items-center justify-center my-8">
              <div className="flex-grow h-[2px] bg-gray-300"></div>
              <h2 className="text-3xl font-bold text-center mx-4 tracking-wide text-black-900">
                Shop
              </h2>
              <div className="flex-grow h-[2px] bg-gray-300"></div>
            </div>

            <ShopCarousel />
            <ProductScroller setSelectedProduct={setSelectedProduct} />

            {/* Expanded Product View */}
            {selectedProduct && (
              <ExpandedProduct
                product={selectedProduct}
                onClose={() => setSelectedProduct(null)}
              />
            )}
          </div>
        </section>
      </main>

      <Footer /> {/* Footer at the bottom */}
    </div>
  );
}
