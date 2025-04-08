import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0F0F0F] text-white font-sans">
      <Header />
      <Hero />
    </main>
  );
}
//Hero