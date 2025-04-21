import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import safksf from "../assets/safksf.png";
import knoz from "../assets/knoz.jpeg";
import separator from "../assets/separatorBlack 2.png";

export default function Experience() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  const experiences = [
    {
      logo: safksf,
      title: t("exp_platform_title"),
      org: t("exp_platform_org"),
      duration: t("exp_platform_duration"),
      location: t("exp_platform_location"),
      description: t("exp_platform_desc"),
    },
    {
      logo: safksf,
      title: t("exp_coop_title"),
      org: t("exp_coop_org"),
      duration: t("exp_coop_duration"),
      location: t("exp_coop_location"),
      description: t("exp_coop_desc"),
    },
    {
      logo: knoz,
      title: t("exp_support_title"),
      org: t("exp_support_org"),
      duration: t("exp_support_duration"),
      location: t("exp_support_location"),
      description: t("exp_support_desc"),
    },
  ];

  return (
    <section
      id="experience"
      dir={isArabic ? "rtl" : "ltr"}
      className="bg-[#E0E0E0] py-24 px-6 md:px-20 text-center font-saudi"
    >
      {/* العنوان */}
      <div className="mb-6">
        <div className="inline-block border-4 border-black px-8 py-2 mb-6">
          <h2 className="text-xl font-bold tracking-widest">{t("experience")}</h2>
        </div>
        <div className="flex justify-center mb-6">
          <img src={separator} alt="separator" className="h-4" />
        </div>
        <p className="max-w-2xl mx-auto text-sm text-gray-700">
          {t("experience_description")}
        </p>
      </div>

      {/* البطاقات */}
      <div className={`max-w-5xl mx-auto space-y-8 mt-12`}>
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.02 }}
            className="flex items-start bg-[#dedddd] rounded-lg shadow-md p-6 transition duration-300 gap-4"
          >
            {/* شعار */}
            <img
              src={exp.logo}
              alt={exp.title}
              className="w-14 h-14 object-contain flex-shrink-0"
            />

            {/* محتوى */}
            <div className={`w-full ${isArabic ? "text-right" : "text-left"}`}>
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
