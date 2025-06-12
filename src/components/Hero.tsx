import { ArrowDown } from 'lucide-react';
import photoProfil from '../image/profil.jpg';

export function Hero() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 pt-16">
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <img
          src={photoProfil}
          alt="Photo de profil"
          className="w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 mx-auto mb-8 shadow-2xl border-4 border-white object-cover"
        />
        <h1 className="text-5xl font-bold text-gray-800 mb-6">
          Développeur web Full Stack
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Passionné par le développement web et les nouvelles technologies.
          Je crée des solutions innovantes et élégantes pour répondre aux besoins d'une collaboration.
        </p>
        <a
          href="#projects"
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors"
        >
          Voir mes projets
          <ArrowDown className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}