"use client";

import { useState } from "react";

export default function Login({ setUser }: { setUser: (name: string) => void }) {
  const [name, setName] = useState("");

  function handleLogin() {
    if (!name.trim()) return;

    localStorage.setItem("truvine_user", name);
    setUser(name); // 🔥 instant login (no reload)
  }

  return (
    <div className="fixed inset-0 bg-slate-950 flex items-center justify-center p-4">
      <div className="bg-white p-10 rounded-3xl shadow-2xl max-w-sm w-full text-center">
        <h2 className="text-2xl font-black mb-2">Welcome</h2>
        <p className="text-slate-500 mb-6 text-sm">
          Join the Jesus Love Revealed community
        </p>

        <input
          type="text"
          placeholder="Your Name"
          className="w-full bg-slate-100 p-3 rounded-xl mb-4 text-center font-bold"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold"
        >
          Launch App
        </button>
      </div>
    </div>
  );
}