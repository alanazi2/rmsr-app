import React from "react";
import { motion } from "framer-motion";
import imaum from "../assets/imaum.png";
import urWay from "../assets/UR-way.png";
import separator from "../assets/separatorBlack 2.png";

export default function Education() {
  const cardVariant = {
    hover: {
      scale: 1.03,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section
      id="education"
      className="bg-[#E0E0E0] py-24 px-6 md:px-20 text-center"
    >
      {/* Header with Border */}
      <div className="mb-6">
        <div className="inline-block border-4 border-black px-8 py-2 mb-6">
          <h2 className="text-xl font-bold tracking-widest">EDUCATION</h2>
        </div>
        <div className="flex justify-center mb-6">
          <img src={separator} alt="separator" className="h-4" />
        </div>
        <p className="max-w-2xl mx-auto text-sm text-gray-700">
          My academic journey reflects a strong foundation in computer science,
          where I combined technical knowledge with practical experience through
          real-world projects.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mt-12">
        <motion.div
          variants={cardVariant}
          whileHover="hover"
          className="relative bg-[#dedddd] rounded-lg shadow-md p-6 text-left transition duration-300"
        >
          <div className="flex items-center mb-4">
            <img
              src={imaum}
              alt="Imam University"
              className="w-14 h-14 mr-4"
            />
            <div>
              <h3 className="text-lg font-bold tracking-widest">
                Imam Mohammad Ibn Saud Islamic University
              </h3>
              <p className="text-sm text-gray-700">
                College: Applied | Major: Computer Science - Programming
                Technology
              </p>
              <p className="text-sm text-gray-700 mt-1">Degree: Diploma</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={cardVariant}
          whileHover="hover"
          className="relative bg-[#dedddd] rounded-lg shadow-md p-6 text-left transition duration-300"
        >
          <div className="flex items-center mb-4">
            <img src={urWay} alt="UR-way" className="w-14 h-14 mr-4" />
            <div>
              <h3 className="text-lg font-bold tracking-widest">
                Graduation Project: Darbak
              </h3>
              <p className="text-sm text-gray-700">
                A platform to guide students on their educational and
                professional path. Achieved 1st place among Programming batch.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}





//My academic journey reflects a strong foundation in computer science, where I
//combined technical knowledge with practical experience through real-world projects.