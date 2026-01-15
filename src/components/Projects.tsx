import { Github, ExternalLink } from 'lucide-react';

// Importation des images locales
import hbnbClient from '../image/HBnB Evolution: Part 3 (Client).png';
import hbnbDatabase from '../image/Hbnb database.png';
import portfolioPro from '../image/PORTFOLIO_PRO.jpg';

const projects = [
  {
    title: "HBnB Evolution: Part 3 (Client)",
    description: "Dans cette phase, j'ai conçu et développé une interface utilisateur interactive et fonctionnelle en utilisant les technologies frontales suivantes : HTML5, CSS3 et JavaScript ES6. Mon objectif principal était d'assurer une expérience utilisateur fluide et intuitive, tout en garantissant une intégration harmonieuse avec les services back-end déjà développés.",
    image: hbnbClient,
    technologies: ["Html5", "CSS3", "JavaScript ES6", "API REST"],
    githubLink: "https://github.com/edemdj/holbertonschool-hbnb-client.git",
    liveLink: "https://example.com"
  },
  {
    title: "HBnB SERVEUR",
    description: "La console est le premier segment du projet AirBnB à l'école Holberton qui couvrira collectivement les concepts fondamentaux de la programmation de niveau supérieur. L'objectif du projet AirBnB est de déployer éventuellement sur notre serveur une copie simple du site Web AirBnB (HBnB). Un interpréteur de commande est créé dans ce segment pour gérer les objets pour le site Web AirBnB(HBnB).",
    image: hbnbDatabase,
    technologies: ["Python", "Flask", "SQLAlchemy", "API REST"],
    githubLink: "https://github.com/edemdj/holbertonschool-AirBnB_clone_v3.git",
  },
  {
    title: "PORTOLIO_PRO",
    description: "Mon projet, PortfolioPro, est une plateforme innovante permettant aux utilisateurs de créer, partager et découvrir des portfolios inspirants dans divers domaines. Conçu pour les créatifs et les professionnels, PortfolioPro facilite la mise en valeur des compétences et des réalisations, tout en mettant en avant la distinction propre à chaque individu grâce à ses accomplissements.(Ce projet est en cours de développement et sera bientôt disponible)",
    image: portfolioPro,
    technologies: ["JavaScript", "HTML", "CSS", "React", "Node.js", "Express", "SQL"],
    githubLink: "https://github.com/edemdj/social-network.git",
    liveLink: "https://youtu.be/AQitjy50ZM0"
  },
  {
    title: "Farines Diana",
    description: "Développer un site web professionnel pour promouvoir les produits artisanaux de Farines Diana, une entreprise spécialisée dans la fabrication et la vente de farines de qualité. Le site devait améliorer la présence en ligne de l'entreprise, permettre d'attirer de nouveaux clients et présenter les produits de manière esthétique et fonctionnelle",
    image: "https://farinesdiana.com/images/catalogue.JPG",
    technologies: ["HTML", "CSS", "JavaScript" , "TypeScript",],
    githubLink: "https://github.com/edemdj/profil",
    liveLink: "https://farinesdiana.com"
  }

];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Mes Projets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    tech && (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    )
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-blue-600"
                  >
                    <Github className="w-5 h-5" />
                    Code
                  </a>
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 hover:text-blue-600"
                    >
                      <ExternalLink className="w-5 h-5" />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}