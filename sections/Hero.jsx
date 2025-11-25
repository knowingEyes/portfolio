import Button from "@/components/ui/Button";
import StatusBadge from "@/components/ui/StatusBadge";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section>
      <StatusBadge />
      <h1 className="text-5xl">Intelligent systems built for precision</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus est
        fugit reiciendis cum expedita, perferendis et rem adipisci beatae
        nostrum? Nobis consequatur quod, eveniet optio ut placeat debitis omnis
        adipisci.
      </p>
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
    </section>
  );
};

export default Hero;
