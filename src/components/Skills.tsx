import { FaReact, FaNodeJs, FaGit, FaGithub, FaDocker, FaPython } from "react-icons/fa";
import { SiTypescript, SiHtml5, SiCss3, SiJavascript, SiExpress, SiMongodb, SiMysql, SiC } from "react-icons/si";
import { AiFillApi } from "react-icons/ai";

const skills = {
  "Frontend": [
    { name: "React", icon: <FaReact /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "HTML5/CSS3", icon: <SiHtml5 /> },
    { name: "JavaScript", icon: <SiJavascript /> },
  ],
  "Backend": [
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express", icon: <SiExpress /> },
    { name: "SQL", icon: <SiMysql /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "REST API", icon: <AiFillApi /> },
    { name: "Python", icon: <FaPython /> },
    { name: "Langage C", icon: <SiC /> },
  ],
  "Outils": [
    { name: "Git", icon: <FaGit /> },
    { name: "Github", icon: <FaGithub /> },
    { name: "Docker", icon: <FaDocker /> },
    { name: "VS Code", icon: <SiHtml5 /> }, // Change this to an appropriate icon if needed
    { name: "Webpack", icon: <SiJavascript /> }, // Change this to an appropriate icon if needed
  ],
};

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Compétences</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-blue-600">{category}</h3>
              <ul className="space-y-2">
                {items.map((skill, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-gray-700"
                  >
                    <span className="text-blue-500 text-lg">{skill.icon}</span>
                    {skill.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
