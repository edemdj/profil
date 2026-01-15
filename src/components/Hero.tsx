import { ArrowDown } from 'lucide-react';
import photoProfil from '../image/profil.jpg';

export function Hero() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 pt-16"
    >
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        {/* Conteneur de la photo pour centrage avec animation */}
        <div className="relative mx-auto mb-8 rounded-full shadow-2xl border-4 border-white overflow-hidden transform scale-90 transition-transform duration-700 hover:scale-100">
          {/* Effet d'animation via Tailwind */}
          <img
            src={photoProfil}
            alt="Photo de profil du développeur web Full Stack"
            className="w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96 object-cover opacity-0 transition-opacity duration-1000 ease-in-out animate-fadeIn mx-auto"
            loading="lazy"
          />
        </div>

        {/* Texte principal */}
        <h1 className="text-5xl font-bold text-gray-800 mb-6">
          Développeur web Full Stack
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Passionné par le développement web et les nouvelles technologies.
          Je crée des solutions innovantes et élégantes pour répondre aux besoins d'une collaboration.
        </p>

        {/* Bouton pour voir les projets */}
        <a
          href="#projects"
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 active:scale-95 transition-all"
        >
          Voir mes projets
          <ArrowDown className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}