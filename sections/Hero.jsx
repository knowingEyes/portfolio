import Button from "@/components/ui/Button";
import SectionSubtitle from "@/components/ui/SectionSubtitle";
import SectionTitle from "@/components/ui/SectionTitle";
import StatusBadge from "@/components/ui/StatusBadge";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-20" id="home">
      <div className="flex flex-col space-y-5">
        <StatusBadge />
        <h1 className="text-5xl font-bold mb-8 text-white">
          Frontend{" "}
          <span className="text-transparent! bg-clip-text bg-linear-to-r from-gray-300 via-gray-300 to-gray-600">
            Design Engineer
          </span>
        </h1>
        <SectionSubtitle className="text-sm">
          Crafting elegant interfaces where precision meets creativity.
          Focused on building seamless digital experiences for teams that demand
          excellence.
        </SectionSubtitle>
        <div>
          <Button>View Projects</Button>
          <Button variant="ghost" className="inline-flex gap-2">
            Contact Me{" "}
            <ArrowRight
              size={15}
              className="hover:translate-x-1 transition-transform"
            />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
