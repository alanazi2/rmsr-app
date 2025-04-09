import React from "react";
import rmspoto from "../assets/rmspoto.png";
import github from "../assets/gethup.png";
import email from "../assets/email.png";
import linkedin from "../assets/in.png";
import AboutMe from "./AboutMe";



export default function Hero() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#E0E0E0] text-black overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between px-6 md:px-16 pt-24 pb-32">
          {/* Left Content */}
          <div className="w-full md:w-1/2 z-10">
            {/* Mobile View */}
            <div className="md:hidden flex flex-col items-center space-y-4 text-center">
              <div>
                <p className="text-xl font-medium">Hi, I am</p>
                <h1 className="text-4xl font-extrabold text-black">Rashid Al Aanazi</h1>
                <p className="text-gray-700 font-medium leading-relaxed max-w-md">
                  Software Engineer / Web Developer
                </p>
              </div>

              <div className="flex justify-center gap-6">
                <a href="mailto:alanazirashid4@gmail.com"><img src={email} alt="email" className="w-8 h-8 hover:scale-110 transition" /></a>
                <a href="https://github.com/alanazi2" target="_blank" rel="noopener noreferrer"><img src={github} alt="github" className="w-8 h-8 hover:scale-110 transition" /></a>
                <a href="https://www.linkedin.com/in/rashid-alanazi-291513295" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="linkedin" className="w-8 h-8 hover:scale-110 transition" /></a>
              </div>

              <div className="w-full flex justify-start pl-10 pt-6">
                <img
                  src={rmspoto}
                  alt="Rashid Al Aanazi"
                  className="w-[260px] sm:w-[300px] object-cover"
                />
              </div>
            </div>

            {/* Desktop View */}
            <div className="hidden md:block text-left space-y-6">
              <p className="text-xl font-medium">Hi, I am</p>
              <h1 className="text-5xl font-extrabold text-black">Rashid Al Aanazi</h1>
              <p className="text-gray-700 font-medium leading-relaxed">
                Software Engineer / Web Developer
              </p>
              <div className="flex gap-4 pt-6">
                <a href="mailto:alanazirashid4@gmail.com"><img src={email} alt="email" className="w-8 h-8 hover:scale-110 transition" /></a>
                <a href="https://github.com/alanazi2" target="_blank" rel="noopener noreferrer"><img src={github} alt="github" className="w-8 h-8 hover:scale-110 transition" /></a>
                <a href="https://www.linkedin.com/in/rashid-alanazi-291513295" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="linkedin" className="w-8 h-8 hover:scale-110 transition" /></a>
              </div>
            </div>
          </div>

          {/* صورة الشخص في اللابتوب */}
          <div className="hidden md:flex w-full md:w-1/2 justify-start pl-16 items-end mt-10 md:mt-0">
            <img
              src={rmspoto}
              alt="Rashid Al Aanazi"
              className="w-[1000px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* SE Section */}
      <section className="relative bg-[#1A1A1A] text-white overflow-hidden" style={{ marginTop: "-130px" }}>
        <div className="max-w-6xl mx-auto px-6 md:px-20 py-16">
          <div className="absolute right-0 bottom-0 text-[160px] sm:text-[200px] md:text-[300px] lg:text-[380px] font-extrabold text-white opacity-5 rotate-[25deg] select-none pointer-events-none leading-none">
            SE
          </div>

          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">SE</h2>
            <p className="text-sm leading-relaxed text-gray-200">
              "I am a passionate programmer with strong experience in front-end development..."
            </p>
          </div>
        </div>
      </section>
      
  <AboutMe />


    </>
  );
}
