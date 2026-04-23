"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Login from "@/components/Login";
import Feed from "@/components/Feed";
import SupportSection from "@/components/SupportSection";
import IntroVideo from "@/components/IntroVideo";
import SupportIcons from "@/components/SupportIcons";
import EcosystemSection from "@/components/EcosystemSection";




export default function Home() {
  const [user, setUser] = useState<string | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("truvine_user");
    if (saved) setUser(saved);
  
    setReady(true);
  }, []);
  if (!ready) {
    return (
      <div className="p-10 bg-slate-900 text-white">
        Loading TruVine...
      </div>
    );
  }

  if (!user) {
    return <Login setUser={setUser} />;
  }

  return (
    <main className="min-h-screen bg-stone-800">
      <Header user={user} setUser={setUser} />
      <IntroVideo />
      <SupportIcons />
      <EcosystemSection />
      <div className="p-6 max-w-5xl mx-auto">
      <Feed user={user} />
      </div>
      <SupportSection />
    </main>
  );
}