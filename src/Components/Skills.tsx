import { useTranslation } from "react-i18next";
import separator from "../assets/separatorBlack 2.png";

// Icons
import html from "../assets/Group html.png";
import css from "../assets/Group css.png";
import js from "../assets/javascrpt.png";
import java from "../assets/java.png";
import react from "../assets/Group react.png";
import tailwind from "../assets/telwend.png";
import git from "../assets/Git.png";
import figma from "../assets/figma.png";
import nodejs from "../assets/nodejs.png";
import vite from "../assets/vite-js.png";
import ts from "../assets/typescript.png";
import mysql from "../assets/Vector mysql.png";

export default function Skills() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  const usingNow = [
    { src: html, label: "HTML5" },
    { src: css, label: "CSS3" },
    { src: java, label: "JAVA" },
    { src: js, label: "JAVASCRIPT" },
    { src: react, label: "REACT" },
    { src: tailwind, label: "TAILWIND" },
    { src: git, label: "GIT" },
    { src: figma, label: "FIGMA" },
    { src: nodejs, label: "NODEJS" },
    { src: vite, label: "VITE JS" },
    { src: ts, label: "TYPESCRIPT" },
  ];

  return (
    <section
      id="skills"
      dir={isArabic ? "rtl" : "ltr"}
      className="bg-[#E0E0E0] py-24 px-6 md:px-20 relative font-saudi"
    >
      {/* العنوان */}
      <div className="text-center mb-6">
        <div className="inline-block border-4 border-black px-8 py-2 mb-6">
          <h2 className="text-xl font-bold tracking-widest">{t("skills1")}</h2>
        </div>
        <div className="flex justify-center mb-10">
          <img src={separator} alt="separator" className="h-4" />
        </div>
      </div>

      {/* التقنيات الحالية */}
      <div className="mb-12">
        <h3
          className={`text-md font-semibold tracking-widest mb-4 ${
            isArabic ? "text-right" : "text-left"
          }`}
        >
          {t("using_now")}
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-8 gap-x-6">
          {usingNow.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={item.src}
                alt={item.label}
                className="w-12 h-12 object-contain mb-1"
              />
              <span className="text-xs text-gray-700 font-medium tracking-wide">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* التقنيات قيد التعلّم */}
      <div className="mt-12">
        <h3
          className={`text-md font-semibold tracking-widest mb-4 ${
            isArabic ? "text-right" : "text-left"
          }`}
        >
          {t("learning")}
        </h3>
        <div className="flex justify-start">
          <div className="flex flex-col items-center">
            <img
              src={mysql}
              alt="MySQL"
              className="w-12 h-12 object-contain mb-1"
            />
            <span className="text-xs text-gray-700 font-medium tracking-wide">
              MySQL
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
