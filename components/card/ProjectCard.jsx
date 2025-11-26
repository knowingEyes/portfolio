import { ExternalLink } from "lucide-react";
import Card from "../ui/Card";
import { Code } from "lucide-react";

const ProjectCard = ({ title, description, stack, link }) => {
  console.log(link);
  return (
    <Card className="h-full flex flex-col group p-0 bg-gray-900/20">
      <div className="p-8 grow relative z-10">
        <div className="flex justify-between items-start mb-6">
          <div className="p-2 bg-gray-950 rounded-md border border-gray-800 text-primary-500 group-hover:text-primary-400 group-hover:border-primary-500/30 transition-colors">
            <Code className="h-5 w-5" />
          </div>
          <a href={`https://${link}.vercel.app`} >
          <ExternalLink
            className="h-4 w-4 cursor-pointer text-gray-700 hover:text-gray-400 transition-colors"
          
          />
          </a>
        </div>

        <h4 className="text-xl font-bold text-gray-100 mb-3 tracking-tight group-hover:text-primary-400 transition-colors">
          {title}
        </h4>

        <p className="text-sm text-gray-500 leading-relaxed mb-8">
          {description}
        </p>

        <div className="mt-auto pt-6 border-t border-gray-800/50 flex flex-wrap gap-2">
          {stack.map((tech) => (
            <span key={tech} className="text-[10px] font-mono text-gray-400">
              #{tech}
            </span>
          ))}
        </div>
      </div>
      {/* Sophisticated gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-primary-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    </Card>
  );
};
export default ProjectCard;
