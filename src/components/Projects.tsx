import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "HBnB Evolution: Part 3 (Client)",
    description: "Dans cette phase, j'ai conçu et développé une interface utilisateur interactive et fonctionnelle en utilisant les technologies frontales suivantes : HTML5, CSS3 et JavaScript ES6. Mon objectif principal était d'assurer une expérience utilisateur fluide et intuitive, tout en garantissant une intégration harmonieuse avec les services back-end déjà développés.",
    image: "src/image/HBnB Evolution: Part 3 (Client).png",
    technologies: ["Html5", "CSS3", "", "JavaScript ES6", "API REST"],
    githubLink: "https://github.com/edemdj/holbertonschool-hbnb-client.git",
    liveLink: "https://example.com"
  },
  {
    title: "PORTOLIO_PRO",
    description: "Mon projet, PortfolioPro, est une plateforme innovante permettant aux utilisateurs de créer, partager et découvrir des portfolios inspirants dans divers domaines. Conçu pour les créatifs et les professionnels, PortfolioPro facilite la mise en valeur des compétences et des réalisations, tout en mettant en avant la distinction propre à chaque individu grâce à ses accomplissements.",
    image: "src/image/PORTFOLIO_PRO.jpg",
    technologies: ["JavaScript", "HTML", "CSS", "React", "Node.js", "Express", "SQL"],
    githubLink: "https://github.com/edemdj/social-network.git",
    liveLink: "https://youtu.be/AQitjy50ZM0"
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
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                    >
                      {tech}
                    </span>
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
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-blue-600"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}