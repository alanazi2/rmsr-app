import React from "react";
import { motion } from "framer-motion";
import safksf from "../assets/safksf.png";
import knoz from "../assets/knoz.jpeg";
import separator from "../assets/separatorBlack 2.png";

const experiences = [
    {
        logo: safksf,
        title: "Platform Operation",
        org: "The Saudi Federation for Cybersecurity, Programming and Drones",
        duration: "Dec 2024 - Present · Full-time",
        location: "Riyadh, Saudi Arabia",
        description:
          "Developed programming challenges on CoderHub. Operated booths at LEAP and Black Hat. Managed logistics and technical setup.",
      },
  {
    logo: safksf,
    title: "Coop Training - Programming",
    org: "The Saudi Federation for Cybersecurity, Programming and Drones",
    duration: "Aug 2024 - Present · Full-time",
    location: "Riyadh, Saudi Arabia",
    description:
      "Contributed to front-end development of platforms like CoderHub, Satr, and Sakura. Improved UI/UX across platforms.",
  },

  {
    logo: knoz,
    title: "IT Support",
    org: "Konoz Retaj Organization",
    duration: "May 2019 - May 2024 · Part-time",
    location: "Riyadh, Saudi Arabia",
    description:
      "Provided technical support during major medical conferences like SHA and World Cardiology Congress. Managed live IT systems.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-[#E0E0E0]  py-24 px-6 md:px-20 text-center">
      {/* Header */}
      <div className="mb-6">
        <div className="inline-block border-4 border-black px-8 py-2 mb-6">
          <h2 className="text-xl font-bold tracking-widest">EXPERIENCE</h2>
        </div>
        <div className="flex justify-center mb-6">
          <img src={separator} alt="separator" className="h-4" />
        </div>
        <p className="max-w-2xl mx-auto text-sm text-gray-700">
          My professional journey across training, platform operations, and live support events.
        </p>
      </div>

      {/* Experience Cards */}
      <div className="max-w-5xl mx-auto text-left space-y-8 mt-12">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.02 }}
            className="flex items-start gap-6 bg-[#dedddd]  rounded-lg shadow-md p-6 transition duration-300"
          >
            <div className="flex-shrink-0">
              <img src={exp.logo} alt={exp.title} className="w-14 h-14 rounded-md object-contain" />
            </div>
            <div>
              <h3 className="text-md md:text-lg font-bold text-black">{exp.title}</h3>
              <p className="text-sm text-gray-800">{exp.org}</p>
              <p className="text-sm text-gray-600">{exp.duration}</p>
              <p className="text-sm text-gray-600 mb-2">{exp.location}</p>
              <p className="text-sm text-gray-700">{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
