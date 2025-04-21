import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import languageIcon from "../assets/language.png";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const { i18n, t } = useTranslation();

  const isRTL = i18n.language === "ar";

  useEffect(() => {
    document.dir = isRTL ? "rtl" : "ltr";
  }, [i18n.language]);

  const links = [
    { label: "aboutme", href: "#about" },
    { label: "education", href: "#education" },
    { label: "experience", href: "#experience" },
    { label: "skills", href: "#skills" },
    { label: "portfolio", href: "#portfolio" },
  ];

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setLangMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-[#E0E0E0]/60 font-saudi">
      <div
        className={`max-w-6xl mx-auto px-6 md:px-16 py-4 flex items-center justify-between ${
          isRTL ? "flex-row-reverse" : "flex-row"
        }`}
      >
        {/* Logo */}
        <button
  onClick={() => {
    const el = document.getElementById("home");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }}
>
  <img src={logo} alt="Logo" className="w-10 h-10 cursor-pointer" />
</button>


        {/* Desktop Menu */}
        <nav className={`hidden md:flex items-center gap-6 ${isRTL ? "flex-row-reverse" : ""}`}>
          {links.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-black font-semibold text-sm px-4 py-1 rounded-full transition hover:bg-white hover:text-black"
            >
              {t(item.label)}
            </a>
          ))}

          {/* language dropdown */}
          <div className="relative">
            <img
              src={languageIcon}
              alt="Language"
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="w-9 h-6 cursor-pointer"
            />
            {langMenuOpen && (
              <div className={`absolute ${isRTL ? "left-0" : "right-0"} mt-2 w-32 bg-white shadow-md rounded-md overflow-hidden text-sm z-50`}>
                <button
                  onClick={() => changeLanguage("ar")}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  العربية
                </button>
                <button
                  onClick={() => changeLanguage("en")}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  English
                </button>
              </div>
            )}
          </div>
        </nav>

        {/* Mobile Menu Icon */}
        <button className="md:hidden text-black" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#E0E0E0]/80 border-t border-gray-300 flex flex-col text-center px-6 pb-6 space-y-4 animate-fade-in">
          {links.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-black text-base font-medium hover:text-gray-700"
              onClick={() => setIsOpen(false)}
            >
              {t(item.label)}
            </a>
          ))}

          <div className="flex flex-col gap-2 items-center">
            <button onClick={() => changeLanguage("ar")} className="text-black font-medium hover:text-gray-700">
              العربية
            </button>
            <button onClick={() => changeLanguage("en")} className="text-black font-medium hover:text-gray-700">
              English
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
