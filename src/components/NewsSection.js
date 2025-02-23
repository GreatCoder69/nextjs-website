import { useState } from "react";
import Image from "next/image";

const newsData = [
  {
    id: 1,
    title: "Palmer to taker over",
    brief: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    fullText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel urna at nunc dignissim lacinia. 
    Sed malesuada sapien eu magna malesuada, eget eleifend mi scelerisque. Vivamus et nisi at est efficitur faucibus. 
    Curabitur tincidunt diam vel lorem pharetra, eget dapibus arcu tincidunt. 
    Phasellus ultrices turpis nec augue pellentesque, id sollicitudin est tempor. 
    Suspendisse ut lectus eget elit faucibus hendrerit. Mauris in suscipit magna. 
    Duis dapibus ligula vel sem tincidunt, a consectetur turpis aliquet. 
    Fusce dapibus justo at dolor fermentum, in dapibus elit gravida.`,
    image: "/images/news1.jpg",
  },
  {
    id: 2,
    title: "Jackson the new drogba?",
    brief: "Vestibulum fermentum dui nec turpis varius, nec hendrerit ligula tristique.",
    fullText: `Curabitur tincidunt diam vel lorem pharetra, eget dapibus arcu tincidunt. 
    Phasellus ultrices turpis nec augue pellentesque, id sollicitudin est tempor. 
    Suspendisse ut lectus eget elit faucibus hendrerit. Mauris in suscipit magna. 
    Duis dapibus ligula vel sem tincidunt, a consectetur turpis aliquet. 
    Fusce dapibus justo at dolor fermentum, in dapibus elit gravida.`,
    image: "/images/news1.jpg",
  },
  {
    id: 3,
    title: "Colwill our very own Terry?",
    brief: "Aliquam erat volutpat. Nullam nec dui vestibulum, vehicula orci id, feugiat purus.",
    fullText: `Praesent eleifend elit nec dui gravida, sit amet scelerisque orci suscipit. Donec bibendum tristique diam, 
    non tempor enim luctus non. Quisque tincidunt magna et nunc maximus, eget consequat libero gravida. 
    Nullam ultricies justo id erat aliquet, quis sodales eros volutpat.`,
    image: "/images/news1.jpg",
  },
  {
    id: 4,
    title: "Sanchez to be deported back to Brighton",
    brief: "Sed et lacus id magna gravida consectetur. Integer eget eros augue.",
    fullText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel urna at nunc dignissim lacinia. 
    Suspendisse dapibus ex eu neque dictum, eget egestas quam iaculis. Aenean at nulla ut mi pharetra consectetur.`,
    image: "/images/news1.jpg",
  },
  {
    id: 5,
    title: "James to return",
    brief: "Nunc vel justo ac nisl consequat feugiat. Nulla facilisi.",
    fullText: `Mauris ullamcorper risus non velit sagittis, at fermentum quam volutpat. 
    In vitae metus nec felis sollicitudin tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    image: "/images/news1.jpg",
  },
  {
    id: 6,
    title: "Enzo termed a flop?",
    brief: "Proin ac diam non risus congue ullamcorper. Sed ut tortor erat.",
    fullText: `Suspendisse dapibus ex eu neque dictum, eget egestas quam iaculis. 
    Aenean at nulla ut mi pharetra consectetur. Curabitur tincidunt diam vel lorem pharetra, eget dapibus arcu tincidunt.`,
    image: "/images/news1.jpg",
  },
];

export default function NewsSection({ setNewsOpen }) { // Accept setNewsOpen prop
  const [selectedNews, setSelectedNews] = useState(null);

  const openNews = (news) => {
    setSelectedNews(news);
    setNewsOpen(true); // Hide header when news opens
  };

  const closeNews = () => {
    setSelectedNews(null);
    setNewsOpen(false); // Show header again when closed
  };

  return (
    <div className="container mx-auto py-12 px-6">
      {/* Heading with Lines */}
      <div className="flex items-center justify-center mb-8">
        <div className="flex-grow h-[2px] bg-blue-300"></div>
        <h2 className="text-3xl font-bold text-center mx-4">Latest News</h2>
        <div className="flex-grow h-[2px] bg-blue-300"></div>
      </div>

      {/* News Grid with Padding */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {newsData.map((news) => (
          <div
            key={news.id}
            className="relative bg-white rounded-lg shadow-lg overflow-hidden p-4 transition-transform transform hover:scale-105 cursor-pointer"
            onClick={() => openNews(news)} // Call openNews function
          >
            <Image src={news.image} alt={news.title} width={400} height={250} className="w-full h-48 object-cover rounded-md" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{news.title}</h3>
              <p className="text-gray-600">{news.brief}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Expanded News View */}
      {selectedNews && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-6">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-5xl flex flex-col md:flex-row overflow-hidden">
            {/* Left: Image (100% height) */}
            <div className="w-full md:w-1/2 h-[600px] relative">
              <Image src={selectedNews.image} alt={selectedNews.title} layout="fill" objectFit="cover" />
            </div>

            {/* Right: News Content */}
            <div className="w-full md:w-1/2 p-6 flex flex-col">
              {/* Close Button */}
              <button onClick={closeNews} className="absolute top-4 right-4 text-gray-700 hover:text-gray-900 text-xl">
                <Image src="/images/cross.png" alt="Close" width={30} height={30} />
              </button>

              <h3 className="text-2xl font-bold mb-4">{selectedNews.title}</h3>
              <p className="text-gray-700 text-lg leading-relaxed">{selectedNews.fullText}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
