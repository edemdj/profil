import React, { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? "bg-white/95 backdrop-blur-sm shadow-md" : "bg-white/80 backdrop-blur-sm shadow-sm"
    }`}>
      <nav className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl sm:text-2xl font-bold text-black">EDEM DJOSSOU</h1>
          <button
            className={`md:hidden p-2 rounded focus:outline-none transition-transform duration-300 ${open ? "rotate-90" : ""}`}
            onClick={() => setOpen(!open)}
            aria-label="Ouvrir le menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          <div className="hidden md:flex gap-4 items-center">
            {[
              { label: "À propos", href: "#about" },
              { label: "Projets", href: "#projects" },
              { label: "Compétences", href: "#skills" },
              { label: "Contact", href: "#contact" },
            ].map(({ label, href }) => (
              <a key={href} href={href} className="nav-underline hover:text-blue-600 transition-colors text-sm font-medium">
                {label}
              </a>
            ))}
            <a href="https://github.com/edemdj" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors hover:scale-110 transform duration-200"><Github className="w-5 h-5" /></a>
            <a href="https://www.linkedin.com/in/edem-djossou" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors hover:scale-110 transform duration-200"><Linkedin className="w-5 h-5" /></a>
            <a href="mailto:edemdjossou1997@gmail.com" className="hover:text-blue-600 transition-colors hover:scale-110 transform duration-200"><Mail className="w-5 h-5" /></a>
          </div>
        </div>
        {open && (
          <div className="md:hidden mt-4 rounded-xl bg-white shadow-lg flex flex-col gap-4 px-4 py-6 animate-fade-in-down z-50">
            <a href="#about"    className="hover:text-blue-600 transition-colors font-medium" onClick={() => setOpen(false)}>À propos</a>
            <a href="#projects" className="hover:text-blue-600 transition-colors font-medium" onClick={() => setOpen(false)}>Projets</a>
            <a href="#skills"   className="hover:text-blue-600 transition-colors font-medium" onClick={() => setOpen(false)}>Compétences</a>
            <a href="#contact"  className="hover:text-blue-600 transition-colors font-medium" onClick={() => setOpen(false)}>Contact</a>
            <div className="flex gap-4 mt-2 pt-2 border-t border-gray-100">
              <a href="https://github.com/edemdj" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors"><Github className="w-5 h-5" /></a>
              <a href="https://www.linkedin.com/in/edem-djossou" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="mailto:edemdjossou1997@gmail.com" className="hover:text-blue-600 transition-colors"><Mail className="w-5 h-5" /></a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
