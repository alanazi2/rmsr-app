import React from "react";
import separator from "../assets/separatorBlack 2.png";
import design from "../assets/design.png";
import development from "../assets/development.png";
import maintenance from "../assets/maintenance.png";

export default function AboutMe() {
  return (
    
    <section id="about" className="bg-[#E0E0E0] py-20 text-center px-4">
      <h2 className="text-2xl font-semibold tracking-widest border-2 border-black inline-block px-8 py-2 mb-6">
        ABOUT ME
      </h2>
  

      <p className="max-w-2xl mx-auto text-sm text-black mb-6">
        I am passionate about learning and developing new skills. I thrive on adapting to new challenges and working under pressure. I always look for opportunities to enhance my abilities and seek innovative solutions to problems. I believe in the power of teamwork and collaboration to achieve common goals.
      </p>

      <div className="mb-10 flex items-center justify-center gap-4">
        <span className="text-sm font-medium">|</span>
        <button className="text-sm font-medium tracking-widest">EXPLORE</button>
        <span className="text-sm font-medium">|</span>
      </div>

      <div className="mb-12">
        <img src={separator} alt="Separator" className="mx-auto w-28" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        <div className="relative p-6 text-left border border-black rounded-lg shadow-sm bg-white/10">
          <img src={design} alt="design bg" className="absolute opacity-10 left-2 top-2 w-10" />
          <h3 className="font-bold tracking-widest mb-2">DESIGN</h3>
          <p className="text-sm text-gray-800">
            I offer custom web design services based on your requirements and ideas. I can also create a website from the ground up and provide consultation during the project.
          </p>
        </div>

        <div className="relative p-6 text-left border border-black rounded-lg shadow-sm bg-white/10">
          <img src={development} alt="development bg" className="absolute opacity-10 left-2 top-2 w-10" />
          <h3 className="font-bold tracking-widest mb-2">DEVELOPMENT</h3>
          <p className="text-sm text-gray-800">
            I specialize in creating websites tailored to your specific needs and preferences. I can also build a site from scratch and offer guidance throughout the entire process.
          </p>
        </div>

        <div className="relative p-6 text-left border border-black rounded-lg shadow-sm bg-white/10">
          <img src={maintenance} alt="maintenance bg" className="absolute opacity-10 left-2 top-2 w-10" />
          <h3 className="font-bold tracking-widest mb-2">MAINTENANCE</h3>
          <p className="text-sm text-gray-800">
            I can ensure your website is well-maintained and up-to-date, addressing any issues or improvements as needed. I also offer the option to design and build your site from scratch, while providing support and advice along the way.
          </p>
        </div>
      </div>
    </section>
  );
}
