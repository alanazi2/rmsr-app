import { useTranslation } from "react-i18next";
import rmspoto from "../assets/rmspoto.png";
import github from "../assets/gethup.png";
import email from "../assets/email.png";
import linkedin from "../assets/in.png";
import SectionWrapper from "../Components/SectionWrapper";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <>
      {/* Hero Section */}
      <SectionWrapper>
        <section
          id="home"
          className="relative bg-[#E0E0E0] text-black overflow-hidden pb-0 font-saudi"
        >
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between px-6 md:px-16 pt-24">
            {/* Left Content */}
            <div className="w-full md:w-1/2 z-10">
              {/* Mobile View */}
              <div className="md:hidden flex flex-col items-center space-y-4 text-center">
                <div>
                  <p className="text-xl font-medium">{t("hero_hi")}</p>
                  <h1 className="text-4xl font-extrabold text-black">{t("hero_name")}</h1>
                  <p className="text-gray-700 font-medium leading-relaxed max-w-md">
                    {t("hero_description")}
                  </p>
                </div>
                <div className="flex justify-center gap-6">
                  <a href="mailto:alanazirashid4@gmail.com">
                    <img src={email} alt="email" className="w-8 h-8" />
                  </a>
                  <a href="https://github.com/alanazi2">
                    <img src={github} alt="github" className="w-8 h-8" />
                  </a>
                  <a href="https://linkedin.com/in/rashid-alanazi-291513295">
                    <img src={linkedin} alt="linkedin" className="w-8 h-8" />
                  </a>
                </div>
              </div>

              {/* Desktop View */}
              <div className="hidden md:block space-y-6">
                <p className="text-xl font-medium">{t("hero_hi")}</p>
                <h1 className="text-5xl font-extrabold text-black">{t("hero_name")}</h1>
                <p className="text-gray-700 font-medium leading-relaxed">
                  {t("hero_description")}
                </p>
                <div className="flex gap-4 pt-6">
                  <a href="mailto:alanazirashid4@gmail.com">
                    <img src={email} alt="email" className="w-8 h-8" />
                  </a>
                  <a href="https://github.com/alanazi2">
                    <img src={github} alt="github" className="w-8 h-8" />
                  </a>
                  <a href="https://linkedin.com/in/rashid-alanazi-291513295">
                    <img src={linkedin} alt="linkedin" className="w-8 h-8" />
                  </a>
                </div>
              </div>
            </div>

            {/* صورة الشخص */}
            <div className="w-full sm:w-1/2 flex justify-center md:justify-end items-end mt-6 md:mt-0">
              <img
                src={rmspoto}
                alt="Rashid Al Aanazi"
                className="w-[280px] md:w-[520px] object-cover"
              />
            </div>
          </div>
        </section>
      </SectionWrapper>

      {/* SE Section */}
      <SectionWrapper>
        <section className="relative bg-[#1A1A1A] text-white overflow-hidden">
          <div className="absolute bottom-4 right-4 z-0 transform rotate-[25deg]">
            <span className="text-[180px] font-extrabold opacity-5 leading-none select-none">
              SE
            </span>
          </div>
          <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-20 py-20">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">SE</h2>
            <p className="text-sm leading-relaxed text-gray-200">{t("se_description")}</p>
          </div>
        </section>
      </SectionWrapper>
    </>
  );
}
