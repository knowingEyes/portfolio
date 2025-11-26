import ProjectCard from "@/components/card/ProjectCard";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import { PROJECTS_DATA } from "@/data/projects";



const Projects = () => {
  return (
    <section id="projects">
      <SectionLabel>Projects</SectionLabel>
      <SectionTitle>
        Technical solutions engineered for scale and performance.
      </SectionTitle>
      <div className="grid gap-4">
      {PROJECTS_DATA.map((project) => (
        <ProjectCard {...project} key={project.id} />
      ))}
      </div>
    </section>
  );
};

export default Projects;
