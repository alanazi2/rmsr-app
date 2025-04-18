import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "About Me", href: "#about" },
    { label: "Education", href: "#education" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Portfolio", href: "#portfolio" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-[#E0E0E0]/60">
      <div className="max-w-6xl mx-auto px-6 md:px-16 flex items-center justify-between py-4">
        <a href="#home">
          <img src={logo} alt="Logo" className="w-10 h-10 cursor-pointer" />
        </a>

        <nav className="hidden md:flex space-x-4 items-center">
          {links.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-black font-semibold text-sm px-5 py-2 rounded-full transition hover:bg-white hover:text-black"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          className="md:hidden text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#E0E0E0]/80 border-t border-gray-300 flex flex-col text-center px-6 pb-6 space-y-4 animate-fade-in">
          {links.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-black text-base font-medium hover:text-gray-700"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
