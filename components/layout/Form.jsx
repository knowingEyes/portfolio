"use client";

import Button from "../ui/Button";
import Card from "../ui/Card";
import Input from "../ui/Input";
import Textarea from "../ui/Textarea";

const Form = () => {
  return (
    <Card className="p-8 bg-gray-900/30">
      <form
        className="space-y-5"
        action="https://api.web3forms.com/submit"
        method="POST"
        onSubmit={(e) => setTimeout(() => e.target.reset(), 200)}
      >
        <div className="grid grid-cols-2 gap-5">
          <Input
            type="hidden"
            name="access_key"
            value="a6b51f1e-104a-4d21-8c88-011e1e781a15"
            className="hidden"
          ></Input>
          <Input placeholder="John Doe" label="name" name="name" required />
          <Input
            type="email"
            placeholder="john@company.com"
            label="Email"
            name="email"
            required
          />
        </div>
        <Input
          placeholder="Project Inquiry..."
          label="Subject"
          name="subject"
        />
        <Textarea
          placeholder="Tell me about your project..."
          label="Message"
          name="message"
          required
        />
        <Button type="submit" className="w-full py-3 mt-2">
          Send Message
        </Button>
      </form>
    </Card>
  );
};

export default Form;
