import Form from "@/components/layout/Form";
import InfoItem from "@/components/ui/InfoItem";
import SectionSubtitle from "@/components/ui/SectionSubtitle";
import SectionTitle from "@/components/ui/SectionTitle";

const { default: SectionLabel } = require("@/components/ui/SectionLabel");
const { Mail } = require("lucide-react");
const { Clock } = require("lucide-react");

const Contact =  () => (
  <section id="contact">
    <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
      <div>
        <SectionLabel>Communication</SectionLabel>
        <SectionTitle>
          Let's build something 
          intelligent.
        </SectionTitle>
        <SectionSubtitle className="text-[15px]">
          I am currently open to discuss projects, explore collaborations, or
          talk about new opportunities.
        </SectionSubtitle>

        <div className="space-y-6">
          <InfoItem
            Icon={Mail}
            label="Email"
            value="yungib79@gmail.com"
            href="mailto:yungib79@gmail.com"
          />
          <InfoItem
            Icon={Clock}
            label="Response Time"
            value="Usually within 24 hours"
          />
        </div>
      </div>

      <Form />
    </div>
  </section>
);

export default Contact;
