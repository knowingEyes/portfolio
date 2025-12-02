import Button from "@/components/ui/Button";
import SectionSubtitle from "@/components/ui/SectionSubtitle";
import SectionTitle from "@/components/ui/SectionTitle";
import StatusBadge from "@/components/ui/StatusBadge";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-20" id="home">
      <div className="flex flex-col space-y-5 md:items-center md:text-center">
        <StatusBadge />
        <h1 className="text-5xl font-bold mb-8 text-white">
          Frontend{" "}
          <span className="text-transparent! bg-clip-text bg-linear-to-r from-gray-300 via-gray-300 to-gray-600">
            Design Engineer
          </span>
        </h1>
        <SectionSubtitle className="text-sm">
          Developer focused on crafting meaningful digital experiences that
          blend modern design, responsive layouts, and clean architecture.
        </SectionSubtitle>
        <div className="group">
          <Button>View Projects</Button>
          <Button variant="ghost" className="inline-flex gap-2">
            Contact Me{" "}
            <ArrowRight
              size={15}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
