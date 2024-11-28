import { Github, Linkedin, Mail } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm shadow-sm z-50">
      <nav className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">EDEM DJOSSOU</h1>
          <div className="flex gap-4">
            <a href="#about" className="hover:text-blue-600">À propos</a>
            <a href="#projects" className="hover:text-blue-600">Projets</a>
            <a href="#skills" className="hover:text-blue-600">Compétences</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </div>
          <div className="flex gap-4">
            <a href="https://github.com/edemdj" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/edem-djossou?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BGW5SzhpYTlKiSk%2FP5NkOOQ%3D%3D" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:edemdjossou1997@gmail.com" className="hover:text-blue-600">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}