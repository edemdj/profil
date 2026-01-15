import { ArrowDown } from 'lucide-react';
import photoProfil from '../image/profil.jpg'; // Photo à recadrer

export function Hero() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black/40 to-black/60 relative bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(${photoProfil})`,
        backgroundSize: '75%', // Contrôle le niveau de zoom (ajustez entre 100% - 200%)
        backgroundPosition: 'center top', // Contrôle le recadrage (ajustez : ex. "left top")
      }}
    >
      {/* Contenu principal */}
      <div className="text-white px-4 py-16 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Développeur web Full Stack
        </h1>
        <p className="text-xl text-gray-200 md:text-2xl max-w-3xl mx-auto mb-8">
          Passionné par le développement web et les nouvelles technologies. Je crée des solutions innovantes et élégantes pour répondre aux besoins d'une collaboration.
        </p>
        <a
          href="#projects"
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 active:scale-95 transition-transform duration-300"
        >
          Voir mes projets
          <ArrowDown className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}