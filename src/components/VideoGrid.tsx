"use client";

import { useState } from "react";

type Video = {
  id: number;
  title: string;
  creator: string;
  category: string;
  embed: string;
  thumbnail: string; // 👈 THIS MUST EXIST
  link?: string; // 👈 add this
  };

export default function VideoGrid({ videos }: { videos: Video[] }) {
  const [activeVideo, setActiveVideo] = useState<Video | null>(null);

  const categories = [...new Set(videos.map((v) => v.category))];

  return (
    <>
      {/* VIDEO ROWS */}
      <div className="space-y-8">
        {categories.map((category) => {
          const rowVideos = videos.filter((v) => v.category === category);

          return (
            <div key={category}>
              <h3 className="text-black font-bold mb-3">{category}</h3>

              <div className="flex gap-4 overflow-x-auto pb-2">
                {rowVideos.map((video) => (
                  <div
                    key={video.id}
                    onClick={() => setActiveVideo(video)}
                    className="min-w-[250px] bg-black rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition"
                  >
                   <div className="relative">
  <img
    src={video.thumbnail}
    className="w-full h-40 object-cover"
    alt={video.title}
  />

  <div className="absolute inset-0 flex items-center justify-center text-green-100 text-2xl bg-black/30">
    ▶
  </div>
</div>
                   <div className="p-4 text-white">
  <h2 className="font-bold text-lg">{video.title}</h2>
  <p className="text-sm opacity-70">{video.creator}</p>

  {video.link && (
    <button
      onClick={() => window.open(video.link, "_blank")}
      className="mt-4 bg-green-600 hover:bg-emerald-700 px-4 py-2 rounded-lg font-semibold"
    >
      Try the App →
    </button>
  )}
</div>
                    
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* MODAL PLAYER */}
      {activeVideo && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-black rounded-xl overflow-hidden w-[90%] max-w-3xl relative">

            {/* CLOSE BUTTON */}
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-2 right-2 text-white text-xl z-10"
            >
              ✕
            </button>

            {/* VIDEO */}
            <iframe
              src={activeVideo.embed}
              className="w-full h-[400px]"
              allowFullScreen
            />

            {/* INFO */}
            <div className="p-4 text-white">
              <h2 className="font-bold text-lg">{activeVideo.title}</h2>
              <p className="text-sm opacity-70">{activeVideo.creator}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
