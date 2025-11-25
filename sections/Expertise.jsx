import { TrendingUp } from "lucide-react";
import SectionLabel from "../components/ui/SectionLabel";
import { Zap } from "lucide-react";
import Card from "@/components/ui/Card";

const Expertise = () => {
  return (
    <section className=" border-b border-gray-900/50 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionLabel>Expertise</SectionLabel>

        <div className="grid lg:grid-cols-2 gap-16 ">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6 tracking-tight leading-tight">
              Engineering at the intersection of{" "}
              <span className="text-primary-500">AI</span> and{" "}
              <span className="text-primary-500">Infrastructure</span>.
            </h2>
            <p className="text-sm text-gray-400 leading-loose mb-8">
              With over 8 years of experience, I focus on building sustainable,
              test-driven codebases that can evolve rapidly. My philosophy is
              rooted in technical excellence and iterative improvement, ensuring
              that complex AI models turn into reliable production services.
            </p>

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
                  <div className="text-sm font-mono text-gray-300">
                    {skill.val}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6">
            {[
              {
                title: "Cloud-Native Architecture",
                desc: "Designing fault-tolerant distributed systems on AWS & GCP.",
                icon: TrendingUp,
              },
              {
                title: "High-Performance Pipelines",
                desc: "Optimizing inference latency and throughput for edge deployment.",
                icon: Zap,
              },
            ].map((item, i) => (
              <Card
                key={i}
                className="flex flex-col justify-center min-h-[160px]"
              >
                <div className="mb-4 inline-flex p-3 rounded-lg bg-gray-950 border border-gray-800 w-fit">
                  <item.icon className="h-5 w-5 text-primary-400" />
                </div>
                <h4 className="text-base font-bold text-gray-100 mb-2">
                  {item.title}
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed max-w-sm">
                  {item.desc}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
