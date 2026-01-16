import { ArrowDown } from 'lucide-react';
import photoProfil from '../image/profil.jpg'; // Photo d'arrière-plan

export function Hero() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black/40 to-black/60 relative bg-no-repeat bg-cover animate-heroZoom"
      style={{
        backgroundImage: `url(${photoProfil})`,
        backgroundSize: '90%', // Fond toujours couvert sans déformation
        backgroundPosition: 'center top', // Centré par défaut
      }}
    >
      {/* Contenu principal */}
      <div className="text-white px-4 py-16 text-center">
        {/* Animation d'apparition fluide */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 opacity-0 translate-y-6 animate-slideUp">
          Développeur web Full Stack
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-xs sm:max-w-md md:max-w-4xl mx-auto mb-8 opacity-0 translate-y-6 animate-slideUp delay-100">
          Passionné par le développement web et les nouvelles technologies.
          Je crée des solutions innovantes et élégantes pour répondre aux besoins d'une collaboration.
        </p>

        {/* Bouton interactif avec animation */}
        <a
          href="#projects"
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 sm:px-6 py-3 rounded-full hover:bg-blue-700 active:scale-95 hover:scale-105 transition-transform duration-300 ease-in-out opacity-0 translate-y-6 animate-slideUp delay-200"
        >
          Voir mes projets
          <ArrowDown className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}