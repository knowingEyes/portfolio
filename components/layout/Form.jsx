import Button from "../ui/Button";
import Card from "../ui/Card";
import Input from "../ui/Input";
import Textarea from "../ui/Textarea";

const Form = () => (
  <Card className="p-8 bg-gray-900/30">
    <form className="space-y-5">
      <div className="grid grid-cols-2 gap-5">
        <Input placeholder="John Doe" label="name" className="" />
        <Input type="email" placeholder="john@company.com" label="Email" />
      </div>
      <Input placeholder="Project Inquiry..." label="Subject" />
      <Textarea placeholder="Tell me about your project..." label="Message" />
      <Button type="submit" className="w-full py-3 mt-2">
        Send Message
      </Button>
    </form>
  </Card>
);

export default Form;
