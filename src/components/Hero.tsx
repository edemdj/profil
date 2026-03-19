import React from 'react';
import { ArrowDown } from 'lucide-react';
import photoProfil from '../image/profil.jpg';

export function Hero() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ backgroundColor: '#f0ede8' }}
    >
      {/* Photo entière avec zoom continu en boucle */}
      <img
        src={photoProfil}
        alt="Edem Djossou"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          objectPosition: 'center',
          animation: 'heroZoom 6s ease-in-out infinite alternate',
          transformOrigin: 'center center',
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.55) 100%)' }} />

      {/* Contenu */}
      <div className="relative z-10 text-white px-4 py-16 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 animate-slideUp">
          Développeur web Full Stack
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-xs sm:max-w-md md:max-w-4xl mx-auto mb-8 animate-slideUp delay-100">
          Passionné par le développement web et les nouvelles technologies.
          Je crée des solutions innovantes et élégantes pour répondre aux besoins d'une collaboration.
        </p>
        <a
          href="#projects" onClick={(e) => { e.preventDefault(); const t = document.querySelector("#projects"); if(t) window.scrollTo({ top: (t as HTMLElement).getBoundingClientRect().top + window.scrollY - 72, behavior: "smooth" }); }}
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 sm:px-6 py-3 rounded-full hover:bg-blue-700 active:scale-95 hover:scale-105 transition-transform duration-300 ease-in-out animate-slideUp delay-200"
        >
          Voir mes projets
          <ArrowDown className="w-4 h-4" />
        </a>
      </div>

      <div className="scroll-indicator">Scroll</div>
    </section>
  );
}
