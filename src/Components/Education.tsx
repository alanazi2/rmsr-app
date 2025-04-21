import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import imaum from "../assets/imaum.png";
import urWay from "../assets/UR-way.png";
import separator from "../assets/separatorBlack 2.png";

export default function Education() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  const cardVariant = {
    hover: {
      scale: 1.03,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section
      id="education"
      dir={isArabic ? "rtl" : "ltr"}
      className={`bg-[#E0E0E0] py-24 px-6 md:px-20 text-center font-saudi`}
    >
      {/* Header */}
      <div className="mb-6">
        <div className="inline-block border-4 border-black px-8 py-2 mb-6">
          <h2 className="text-xl font-bold tracking-widest">{t("education1")}</h2>
        </div>
        <div className="flex justify-center mb-6">
          <img src={separator} alt="separator" className="h-4" />
        </div>
        <p className="max-w-2xl mx-auto text-sm text-gray-700">
          {t("education_intro")}
        </p>
      </div>

      {/* Cards */}
      <div className={`grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mt-12 ${isArabic ? "text-right" : "text-left"}`}>
        {[{
          img: imaum,
          title: t("education_university"),
          desc1: t("education_college"),
          desc2: t("education_degree"),
        }, {
          img: urWay,
          title: t("education_project"),
          desc1: t("education_project_desc"),
        }].map((item, idx) => (
          <motion.div
            key={idx}
            variants={cardVariant}
            whileHover="hover"
            className="bg-[#dedddd] rounded-lg shadow-md p-6 transition duration-300"
          >
            <div className="flex items-start gap-4">
              <img src={item.img} alt="logo" className="w-14 h-14 object-contain flex-shrink-0" />
              <div className="flex flex-col">
                <h3 className="text-lg font-bold tracking-widest">{item.title}</h3>
                <p className="text-sm text-gray-700">{item.desc1}</p>
                {item.desc2 && (
                  <p className="text-sm text-gray-700 mt-1">{item.desc2}</p>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
