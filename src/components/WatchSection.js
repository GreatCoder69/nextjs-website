import { useState } from "react";

const videos = [
  {
    id: 1,
    title: "Match Highlights: Chelsea vs West Ham",
    youtubeId: "PbcYHoQYkrI", // Extract from YouTube link
  },
  {
    id: 2,
    title: "Match Highlights: Chelsea vs Spurs",
    youtubeId: "5yE8bmzD198",
  },
  {
    id: 3,
    title: "Match Highlights: Chelsea vs Brentford",
    youtubeId: "AJy9R9P6DOY",
  },
];

export default function WatchSection() {
  const [hoveredVideo, setHoveredVideo] = useState(null);
  const [expandedVideo, setExpandedVideo] = useState(null);

  return (
    <div className="container mx-auto py-12 px-6">
      {/* Heading with Lines */}
      <div className="flex items-center justify-center mb-8">
        <div className="flex-grow h-[2px] bg-gray-300"></div>
        <h2 className="text-3xl font-bold text-center mx-4">Watch</h2>
        <div className="flex-grow h-[2px] bg-gray-300"></div>
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {videos.map((video) => {
          const thumbnailUrl = `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`;

          return (
            <div
              key={video.id}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg"
              onMouseEnter={() => setHoveredVideo(video.id)}
              onMouseLeave={() => setHoveredVideo(null)}
              onClick={() => setExpandedVideo(video.youtubeId)}
            >
              {/* Thumbnail (Visible until hover) */}
              {hoveredVideo !== video.id && (
                <img
                  src={thumbnailUrl}
                  alt={video.title}
                  className="w-full h-60 object-cover transition-all duration-500"
                />
              )}

              {/* Video (Only plays on hover) */}
              {hoveredVideo === video.id && (
                <iframe
                  className="w-full h-56 transition-all duration-500"
                  src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&mute=1`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}

              {/* Video Title */}
              <h3 className="text-center text-lg font-semibold mt-2">{video.title}</h3>
            </div>
          );
        })}
      </div>

      {/* Fullscreen Video */}
      {expandedVideo && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-90 flex items-center justify-center z-50">
          <button className="absolute top-4 right-4 text-white text-2xl" onClick={() => setExpandedVideo(null)}>❌</button>
          <iframe
            className="w-[90vw] h-[90vh]"
            src={`https://www.youtube.com/embed/${expandedVideo}?autoplay=1`}
            title="Expanded Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
}
