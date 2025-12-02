import SectionLabel from "../components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import SectionSubtitle from "@/components/ui/SectionSubtitle";
import StackCard from "@/components/card/StackCard";

const About = () => {
  return (
    <section className=" border-b border-gray-900/50 relative">
      <SectionLabel>About</SectionLabel>

      <div>
        <div>
          <SectionTitle>About Me and Technical Stack.</SectionTitle>
          <SectionSubtitle>
            I’m a frontend developer who enjoys building clean, modern, and
            intuitive web experiences. I work mainly with React, Next.js, and
            modern UI tools, focusing on structure, design, and smooth user
            interactions. I learn fast, adapt quickly, and continually improve
            my craft through real projects and experimentation.
          </SectionSubtitle>

          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Backend", val: "Exploring" },
              { label: "Cloud", val: "Exploring" },
              { label: "MLOps", val: "Exploring" },
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
    </section>
  );
};

export default About;
