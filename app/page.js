import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import About from "@/sections/About";
import Expertise from "@/sections/Expertise";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";

export default function App() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Expertise />
      <Projects />
      <Footer />
    </main>
  );
}
