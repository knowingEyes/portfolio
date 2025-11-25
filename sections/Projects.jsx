import ProjectCard from "@/components/card/ProjectCard";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import { Zap } from "lucide-react";
import { Code } from "lucide-react";
import { Clock } from "lucide-react";
const PROJECTS_DATA = [
  {
    id: 1,
    title: "Synapse AI Engine",
    description:
      "A novel neural network architecture for real-time NLP with low latency inference. Optimized for edge deployment.",
    stack: ["PyTorch", "Rust", "Kubernetes"],
    link: "#",
  },
  {
    id: 2,
    title: "Aura Data Visualization",
    description:
      "Interactive analytical dashboard displaying complex high-dimensional data relationships using WebGL 3D rendering.",
    stack: ["React", "TypeScript", "Three.js"],
    link: "#",
  },
  {
    id: 3,
    title: "Orbital Deployment V3",
    description:
      "A robust, event-driven CI/CD pipeline built using GitHub Actions and Terraform for zero-downtime microservices.",
    stack: ["Go", "Terraform", "AWS"],
    link: "#",
  },
];

const STATS_DATA = [
  { value: "8+", label: "Years Experience", icon: Clock },
  { value: "50+", label: "Systems Shipped", icon: Code },
  { value: "99.9%", label: "Uptime Achieved", icon: Zap },
];
const Projects = () => {
  return (
    <section>
      <SectionLabel>Projects</SectionLabel>
      <SectionTitle>
        Technical solutions engineered for scale and performance.
      </SectionTitle>
      {PROJECTS_DATA.map((data) => (
        <ProjectCard project={data} key={data.id} />
      ))}
    </section>
  );
};

export default Projects;
