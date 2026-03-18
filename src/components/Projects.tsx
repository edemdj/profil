import React, { useEffect } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import hbnbClient from '../image/HBnB Evolution: Part 3 (Client).png';
import hbnbDatabase from '../image/Hbnb database.png';
import portfolioPro from '../image/PORTFOLIO_PRO.jpg';
import autobenin from '../image/autobenin.png';

const projects = [
  {
    title: "AutoBénin",
    description: "Plateforme de location de voiture entre particuliers au Bénin. Met en relation propriétaires et locataires avec paiement Mobile Money sécurisé, contrat numérique et caution sécurisée.",
    image: autobenin,
    technologies: ["React", "TypeScript", "Node.js", "JavaScript", "HTML/CSS"],
    githubLink: "https://github.com/edemdj/autobenin.git",
    liveLink: "https://autobenin.vercel.app/cars",
  },
  {
    title: "Farines Diana",
    description: "Site web professionnel pour promouvoir les produits artisanaux de Farines Diana, spécialisée dans la fabrication et la vente de farines de qualité.",
    image: "https://farinesdiana.com/images/catalogue.JPG",
    technologies: ["HTML", "CSS", "JavaScript", "TypeScript"],
    githubLink: "https://github.com/edemdj/profil",
    liveLink: "https://farinesdiana.com",
  },
  {
    title: "HBnB Evolution: Client",
    description: "Interface utilisateur interactive en HTML5, CSS3 et JavaScript ES6 avec intégration harmonieuse des services back-end.",
    image: hbnbClient,
    technologies: ["HTML5", "CSS3", "JavaScript ES6", "API REST"],
    githubLink: "https://github.com/edemdj/holbertonschool-hbnb-client.git",
    liveLink: "https://example.com",
  },
  {
    title: "HBnB Serveur",
    description: "Clone AirBnB avec interpréteur de commandes pour gérer les objets et déployer une copie simplifiée du site sur serveur.",
    image: hbnbDatabase,
    technologies: ["Python", "Flask", "SQLAlchemy", "API REST"],
    githubLink: "https://github.com/edemdj/holbertonschool-AirBnB_clone_v3.git",
  },
  {
    title: "PortfolioPro",
    description: "Plateforme pour créer, partager et découvrir des portfolios dans divers domaines. En cours de développement.",
    image: portfolioPro,
    technologies: ["React", "Node.js", "Express", "SQL"],
    githubLink: "https://github.com/edemdj/social-network.git",
    liveLink: "https://youtu.be/AQitjy50ZM0",
  },
];

export function Projects() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 reveal">Mes Projets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className={`project-card-hover bg-white rounded-lg shadow-lg reveal reveal-d${(index % 3) + 1}`}>
              <div className="project-img-wrap">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full object-cover"
                  style={{ height: '200px', objectPosition: 'center top' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm transition-colors hover:bg-blue-200">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
                    <Github className="w-5 h-5" /> Code
                  </a>
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
                      <ExternalLink className="w-5 h-5" /> Demo
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
