import React from "react";
import saham from "../assets/saham.png";
import linkedin from "../assets/inplak.png";
import email from "../assets/emailplak.png";

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white py-10 text-center">
      {/* Back to Top */}
      <div className="mb-4">
        <a href="#home" className="inline-block mb-1">
          <img src={saham} alt="Back to top" className="w-4 h-4 mx-auto" />
        </a>
        <p className="text-xs font-semibold tracking-widest">BACK TO TOP</p>
      </div>

      {/* Icons */}
      <div className="flex justify-center gap-4 mb-4">
        <a href="https://linkedin.com/in/rashid-alanazi-291513295" target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt="LinkedIn" className="w-6 h-6" />
        </a>
        <a href="mailto:alanazirashid4@gmail.com">
          <img src={email} alt="Email" className="w-6 h-6" />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-sm text-white">&copy; 2025 Rashid Alanazi - All Rights Reserved.</p>
    </footer>
  );
}
