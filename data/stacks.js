import { PlayCircle } from "lucide-react";
import { DatabaseZap } from "lucide-react";
import { MonitorSmartphone } from "lucide-react";
import {
  SiTailwindcss,
  SiReact,
  SiWordpress,
  SiNextdotjs,
} from "react-icons/si";


export const STACKS_DATA = [
  {
    title: "Next.js",
    desc: "Component architecture & hooks mastery",
    icon: SiNextdotjs,
  },
  {
    title: "React",
    desc: "Component architecture & hooks mastery",
    icon: SiReact,
  },
  {
    title: "Tailwind CSS",
    desc: "Utility-first design system expertise",
    icon: SiTailwindcss,
  },
    {
    title: "Content management",
    desc: "Sanity Studio & WordPress integration",
    icon: SiWordpress,
  },
  {
    title: "Responsive",
    desc: "Mobile-first approach across all projects",
    icon: MonitorSmartphone,
  },
  {
    title: "State management",
    desc: "Zustand for elegant, scalable stores",
    icon: DatabaseZap,
  },
  {
    title: "Motion design",
    desc: "Framer Motion & AOS for fluid animations",
    icon: PlayCircle,
  },
];
