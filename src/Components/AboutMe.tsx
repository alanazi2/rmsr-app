import { useTranslation } from "react-i18next";
import separator from "../assets/separatorBlack 2.png";
import design from "../assets/design.png";
import development from "../assets/development.png";
import maintenance from "../assets/mainienance.png";

export default function AboutMe() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  const services = [
    {
      titleKey: "about_design",
      textKey: "about_design_text",
      icon: design,
    },
    {
      titleKey: "about_development",
      textKey: "about_development_text",
      icon: development,
    },
    {
      titleKey: "about_maintenance",
      textKey: "about_maintenance_text",
      icon: maintenance,
    },
  ];

  return (
    <section
      id="about"
      dir={isArabic ? "rtl" : "ltr"}
      className="bg-[#E0E0E0] py-24 px-6 md:px-20 text-center font-saudi"
    >
      {/* العنوان + وصف */}
      <div className="mb-6">
        <div className="inline-block border-4 border-black px-8 py-2 mb-4">
          <h2 className="text-xl font-bold tracking-widest">{t("aboutme")}</h2>
        </div>
        <p className="max-w-2xl mx-auto text-sm text-gray-700">{t("about_description")}</p>
      </div>

      {/* فاصل */}
      <div className="flex justify-center mb-12">
        <img src={separator} alt="separator" className="h-4" />
      </div>

      {/* كروت الخدمات */}
      <div className={`grid md:grid-cols-3 gap-12 max-w-6xl mx-auto ${isArabic ? "text-right" : "text-left"}`}>
        {services.map((item, idx) => (
          <div key={idx} className="relative">
            <div className={`flex items-center gap-3 mb-2 ${isArabic ? "flex-row-reverse" : ""}`}>
              <img
                src={item.icon}
                alt={`${t(item.titleKey)} icon`}
                className="w-11 h-11 opacity-100"
              />
              <h3 className="text-lg font-bold tracking-widest">{t(item.titleKey)}</h3>
            </div>
            <p className="text-sm text-gray-700">{t(item.textKey)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
