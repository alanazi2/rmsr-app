import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import logo from "../assets/logo.png";
import { Menu, X } from "lucide-react";
export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const links = [
        { label: "About me", href: "#about" },
        { label: "Skills", href: "#skills" },
        { label: "Portfolio", href: "#portfolio" },
    ];
    return (_jsxs("header", { className: "bg-[#E0E0E0] text-white", children: [_jsxs("div", { className: "max-w-6xl mx-auto px-6 md:px-16 flex items-center justify-between py-4", children: [_jsx("img", { src: logo, alt: "Logo", className: "w-10 h-10" }), _jsx("nav", { className: "hidden md:flex space-x-4 items-center", children: links.map((item) => (_jsx("a", { href: item.href, className: "text-white font-semibold text-sm px-5 py-2 rounded-full transition hover:bg-white hover:text-black", children: item.label }, item.label))) }), _jsx("button", { className: "md:hidden text-black", onClick: () => setIsOpen(!isOpen), children: isOpen ? _jsx(X, { size: 24 }) : _jsx(Menu, { size: 24 }) })] }), isOpen && (_jsx("div", { className: "md:hidden bg-[#E0E0E0] border-t border-gray-300 flex flex-col text-center px-6 pb-6 space-y-4 animate-fade-in", children: links.map((item) => (_jsx("a", { href: item.href, className: "text-black text-base font-medium hover:text-gray-700", onClick: () => setIsOpen(false), children: item.label }, item.label))) }))] }));
}
