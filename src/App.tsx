import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0F0F0F] text-white font-sans">
      <Header />
      <Hero />
    </main>
  );
}
//Hero