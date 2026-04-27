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
    <main className="min-h-screen bg-conic-180 from-black via-indigo-50 to-black to-55%">


      

      
      
      <div className="p-6 max-w-5xl mx-auto">
      <Header user={user} setUser={setUser} />

      <IntroVideo />
      <br></br>
      <SupportIcons />
      <br></br>
      <Feed user={user} />
      <EcosystemSection />
      <SupportIcons />
      <SupportSection />
      
      </div>

      
     
    </main>
  );
}
