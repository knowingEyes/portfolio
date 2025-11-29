import SectionLabel from "../components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import SectionSubtitle from "@/components/ui/SectionSubtitle";
import StackCard from "@/components/card/StackCard";


const Expertise = () => {
  return (
    <section className=" border-b border-gray-900/50 relative">
      <div className="">
        <SectionLabel>Expertise</SectionLabel>

        <div className="grid lg:grid-cols-2 gap-16 ">
          <div>
            <SectionTitle>
              Engineering at the intersection of
              <span className="text-primary-500">AI</span> and
              <span className="text-primary-500">Infrastructure</span>.
            </SectionTitle>
            <SectionSubtitle>
              With over 8 years of experience, I focus on building sustainable,
              test-driven codebases that can evolve rapidly. My philosophy is
              rooted in technical excellence and iterative improvement, ensuring
              that complex AI models turn into reliable production services.
            </SectionSubtitle>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Backend", val: "Go / Python" },
                { label: "Cloud", val: "AWS / K8s" },
                { label: "MLOps", val: "TensorFlow" },
                { label: "Frontend", val: "React / Next" },
              ].map((skill, i) => (
                <div key={i} className="border-l border-gray-800 pl-4">
                  <div className="text-[10px] uppercase text-gray-600 tracking-wider mb-1">
                    {skill.label}
                  </div>
                  <div className="text-xs font-mono text-gray-300">
                    {skill.val}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <StackCard />
        </div>
      </div>
    </section>
  );
};

export default Expertise;
