import React, { useState } from "react";
import portfolioBg from "../assets/portfolioimg.png";
import sakoraa from "../assets/sakoraa.png";
import sakoraa1 from "../assets/sakoraa1.png";
import businec from "../assets/businec.png";
import businec1 from "../assets/businec1.png";
import businec2 from "../assets/businec2.png";
import businec4 from "../assets/businec4.png";

const allProjects = [
  { src: sakoraa, category: "Sakura" },
  { src: sakoraa1, category: "Sakura" },
  { src: businec, category: "BusinessEch" },
  { src: businec1, category: "BusinessEch" },
  { src: businec2, category: "BusinessEch" },
  { src: businec4, category: "BusinessEch" },
];

const categories = ["All", "Sakura", "BusinessEch"];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filtered =
    selectedCategory === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === selectedCategory);

  return (
    <section id="portfolio" className="relative bg-black text-white">
      {/* Background Image */}
      <div
        className="w-full h-[40vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${portfolioBg})` }}
      >
        <div className="border-4 border-black px-10 py-3 bg-transparent text-white font-bold text-xl tracking-[0.3em]">
          PORTFOLIO
        </div>
      </div>

      {/* Filter */}
      <div className="flex justify-center space-x-8 mt-8 border-b border-gray-600 max-w-md mx-auto pb-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`uppercase text-sm tracking-wide transition duration-200 pb-1 ${
              selectedCategory === cat ? "border-b-2 border-white" : "text-gray-400"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto px-6 py-10">
        {filtered.map((item, idx) => (
          <div key={idx} className="w-full h-[300px] bg-white overflow-hidden">
            <img
              src={item.src}
              alt={`portfolio-${idx}`}
              className="w-full h-full object-cover hover:scale-105 transition duration-300"
            />
          </div>
        ))}
      </div>

      {/* Footer Text */}
      <div className="text-center text-sm text-white pb-10">
        And many more to come!
      </div>
    </section>
  );
}



//{ src: businec4 , category: "BusinessEch" },
//import businec4 from "../assets/businec4.png";