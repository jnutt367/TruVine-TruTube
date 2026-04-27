"use client";

import { useState, useEffect } from "react";
import { videos } from "@/data/videos";
import VideoGrid from "@/components/VideoGrid";

type PostType = "post" | "prayer" | "testimony";

type Post = {
  id: number;
  user: string;
  type: PostType;
  content: string;
  timestamp: number;
};

export default function Feed({ user }: { user: string }) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [input, setInput] = useState("");
  const [type, setType] = useState<PostType>("post");
  const [query, setQuery] = useState("");
  // =========================
  // LOAD POSTS (on mount)
  // =========================
  useEffect(() => {
    const saved = localStorage.getItem("truvine_posts");

    if (saved) {
      try {
        setPosts(JSON.parse(saved));
      } catch {
        setPosts([]);
      }
    }
  }, []);

  // =========================
  // SAVE POSTS (on change)
  // =========================
  useEffect(() => {
    localStorage.setItem("truvine_posts", JSON.stringify(posts));
  }, [posts]);
<input
  className="w-full p-3 mb-4 rounded-xl bg-slate-100"
  placeholder="Search posts, prayers, testimonies, or users..."
  value={query}
  onChange={(e) => setQuery(e.target.value)}
/>
  // =========================
  // CREATE POST
  // =========================
  function handleSubmit() {
    if (!input.trim()) return;

    const newPost: Post = {
      id: Date.now(),
      user,
      type,
      content: input,
      timestamp: Date.now(),
    };

    setPosts((prev) => [newPost, ...prev]);
    setInput("");
  }

  // =========================
  // DELETE POST
  // =========================
  function handleDelete(id: number) {
    setPosts((prev) => prev.filter((p) => p.id !== id));
  }

  const filteredPosts = posts.filter((item) => {
    const q = query.toLowerCase();
   
    return (
      item.content.toLowerCase().includes(q) ||
      item.user.toLowerCase().includes(q) ||
      item.type.toLowerCase().includes(q)
    );
  });


  const filteredVideos = videos.filter((video) => {
    const q = query.toLowerCase();
  
    return (
      video.title.toLowerCase().includes(q) ||
      video.creator.toLowerCase().includes(q)
    );
  });



  return (
    <div className="space-y-6">
<input
  className="w-full p-3 mb-4 max-w-96 bg-emerald-100 text-black"
  placeholder="🕵🏻‍♂️ SEARCH VIDEOS..."
  value={query}
  onChange={(e) => setQuery(e.target.value)}
/>
      {/* CREATE BOX */}
      <h2 className="text-blue-300 font-bold mt-6 mb-2 text-shadow-lg">
        <span className="text-3xl"> 🎥   TruTUBE</span>    Videos/Library 
</h2>

<VideoGrid videos={filteredVideos} />

      <div className="bg-slate-900 text-emerald-100 p-6 rounded-2xl text-shadow-lg">
        <h2 className="font-bold mb-4 underline">🙇🏾 .. FELLOWSHIP .. 🙇🏻‍♂️ </h2>

        {/* TYPE SELECTOR */}
        <div className="flex gap-2 mb-4">
          <button
            onClick={() => setType("post")}
            className={`text-xs px-3 py-1 rounded text-white ${
              type === "post" ? "bg-emerald-600" : "bg-emerald-700"
            }`}
          >
            Post
          </button>

          <button
            onClick={() => setType("prayer")}
            className={`text-xs px-3 py-1 rounded text-white ${
              type === "prayer" ? "bg-red-600" : "bg-red-700"
            }`}
          >
            Prayer
          </button>

          <button
            onClick={() => setType("testimony")}
            className={`text-xs px-3 py-1 rounded text-white ${
              type === "testimony" ? "bg-amber-600" : "bg-amber-700"
            }`}
          >
            Testimony
          </button>
        </div>

        <textarea
          className="w-full bg-emerald-700 text-white  p-4 rounded-xl mb-4"
          rows={3}
          placeholder="📝  What is God speaking to you? 💌  " 
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button
          onClick={handleSubmit}
          className="bg-emerald-800 text-white px-6 py-2 rounded"
        >
          Submit
        </button>
      </div>

      {/* EMPTY STATE */}
      {posts.length === 0 && (
        <div className="text-center text-slate-100">
          The vine is quiet...
        </div>
      )}

      {/* FEED */}
      {filteredPosts.map((item) => {
        const isOwner = item.user === user;

        // PRAYER
        if (item.type === "prayer") {
          return (
            <div key={item.id} className="bg-amber-50 p-6 rounded-2xl">
              <div className="flex justify-between mb-2">
                <span className="text-xs font-bold text-amber-700">
                  🙏 Prayer • {item.user}
                </span>

                {isOwner && (
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="text-red-500 text-xs"
                  >
                    Delete
                  </button>
                )}
              </div>

              <p>{`"${item.content}"`}</p>
            </div>
          );
        }

        // TESTIMONY
        if (item.type === "testimony") {
          return (
            <div key={item.id} className="bg-emerald-700 text-white p-6 rounded-2xl">
              <div className="flex justify-between mb-2">
                <span className="text-xs font-bold">
                  ✨ Testimony • {item.user}
                </span>

                {isOwner && (
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="text-red-300 text-xs"
                  >
                    Delete
                  </button>
                )}
              </div>

              <p className="italic text-lg">{`"${item.content}"`}</p>
              <p className="text-xs mt-2">— {item.user}</p>
            </div>
          );
        }

        // POST (DEFAULT)
        return (
          <div key={item.id} className="bg-white text-black p-6 rounded-2xl shadow">
            <div className="flex justify-between mb-2">
              <span className="text-xs font-bold">{item.user}</span>

              {isOwner && (
                <button
                  onClick={() => handleDelete(item.id)}
                  className="text-red-500 text-xs"
                >
                  Delete
                </button>
              )}
            </div>

            <p>{item.content}</p>
          </div>
        );
      })}
    </div>
  );
}
