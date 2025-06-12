import { useState } from "react";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm shadow-sm z-50">
      <nav className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800">EDEM DJOSSOU</h1>
          {/* Hamburger menu button: visible only on mobile */}
          <button
            className="md:hidden p-2 rounded focus:outline-none"
            onClick={() => setOpen(!open)}
            aria-label="Ouvrir le menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          {/* Menu navigation: hidden on mobile, visible md+ */}
          <div className="hidden md:flex gap-4 items-center">
            <a href="#about" className="hover:text-blue-600">À propos</a>
            <a href="#projects" className="hover:text-blue-600">Projets</a>
            <a href="#skills" className="hover:text-blue-600">Compétences</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
            <a href="https://github.com/edemdj" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/edem-djossou" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:edemdjossou1997@gmail.com" className="hover:text-blue-600">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
        {/* Mobile menu overlay */}
        {open && (
          <div className="md:hidden mt-4 rounded bg-white shadow-lg flex flex-col gap-4 px-4 py-6 animate-fade-in z-50">
            <a href="#about" className="hover:text-blue-600" onClick={() => setOpen(false)}>À propos</a>
            <a href="#projects" className="hover:text-blue-600" onClick={() => setOpen(false)}>Projets</a>
            <a href="#skills" className="hover:text-blue-600" onClick={() => setOpen(false)}>Compétences</a>
            <a href="#contact" className="hover:text-blue-600" onClick={() => setOpen(false)}>Contact</a>
            <div className="flex gap-4 mt-2">
              <a href="https://github.com/edemdj" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/edem-djossou" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:edemdjossou1997@gmail.com" className="hover:text-blue-600">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}