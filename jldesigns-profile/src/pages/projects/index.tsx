import Image from "next/image";
import '../../app/globals.css'

// Example data structure
const projects = [
  { id: 1, title: "Wellness Tracker", description: "Microbiome analysis tool", tech: ".NET & Next.js" },
  { id: 2, title: "Reporting Engine", description: "Automated SQL Agent workflows", tech: "C# & SQL Server" },
];

export default function Projects() {
  return (
    <div>
      <main>
        <h1>Project Overview</h1>
        <div>
          {projects.map((project) => (
            <div key={project.id}>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <span>{project.tech}</span>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}