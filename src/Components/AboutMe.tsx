import React from "react";
import separator from "../assets/separatorBlack 2.png";
import design from "../assets/design.png";
import development from "../assets/development.png";
import maintenance from "../assets/mainienance.png";

export default function AboutMe() {
  return (
    <section id="about" className="bg-[#E0E0E0] py-24 px-6 md:px-20 text-center">
      {/* Header */}
      <div className="mb-6">
        <div className="inline-block border-4 border-black px-8 py-2 mb-4">
          <h2 className="text-xl font-bold tracking-widest">ABOUT ME</h2>
        </div>
        <p className="max-w-2xl mx-auto text-sm text-gray-700">
          I am passionate about learning and developing new skills. I thrive on adapting to new challenges and working under pressure. I always look for opportunities to enhance my abilities and seek innovative solutions to problems. I believe in the power of teamwork and collaboration to achieve common goals.
        </p>
      </div>

      {/* Separator */}
      <div className="flex justify-center mb-12">
        <img src={separator} alt="separator" className="h-4" />
      </div>

      {/* Cards Section */}
      <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto text-left">
        {[
          {
            title: "DESIGN",
            icon: design,
            text: "I offer custom web design services based on your requirements and ideas. I can also create a website from the ground up and provide consultation during the project.",
          },
          {
            title: "DEVELOPMENT",
            icon: development,
            text: "I specialize in creating websites tailored to your specific needs and preferences. I can also build a site from scratch and offer guidance throughout the entire process.",
          },
          {
            title: "MAINTENANCE",
            icon: maintenance,
            text: "I can ensure your website is well-maintained and up-to-date, addressing any issues or improvements as needed. I also offer the option to design and build your site from scratch, while providing support and advice along the way.",
          },
        ].map((item, idx) => (
          <div key={idx} className="relative">
            {/* الصورة + العنوان */}
            <div className="flex items-center gap-3 mb-2">
              <img src={item.icon} alt={`${item.title} icon`} className="w-11 h-11 opacity-100" />
              <h3 className="text-lg font-bold tracking-widest">{item.title}</h3>
            </div>
            <p className="text-sm text-gray-700">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
