import SectionLabel from "../components/ui/SectionLabel";
import SectionSubtitle from "../components/ui/SectionSubtitle";
import SectionTitle from "../components/ui/SectionTitle";

const About = () => {
  return (
    <section id="about">
      <SectionLabel>About</SectionLabel>
      <SectionTitle>Experience & Technical Stack</SectionTitle>
      <div className=" text-gray-400">
        <SectionSubtitle>
          My engineering journey began with backend systems and evolved into a
          deep focus on the infrastructure required to support modern AI
          applications at scale.
        </SectionSubtitle>

        <div className="space-y-8 mt-12 border-t border-gray-800 pt-12">
          {[1, 2, 3].map((i) => (
            <div key={i} className="grid md:grid-cols-4 gap-6">
              <div className="text-sm text-gray-500 font-mono">
                202{i} - Present
              </div>
              <div className="md:col-span-3">
                <h3 className="text-lg font-bold text-white mb-2">
                  Senior Engineer at Tech Corp {i}
                </h3>
                <p className="text-sm leading-relaxed">
                  Spearheaded the migration of monolithic services to
                  microservices on Kubernetes. Implemented OpenTelemetry for
                  full observability.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
