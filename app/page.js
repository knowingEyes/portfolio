import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import About from "@/sections/About";
import Expertise from "@/sections/Expertise";
import Hero from "@/sections/Hero";

export default function App() {
  return (
    <main className="">
      <Header />
      <Hero />
      <Expertise />
      <About />
      <Footer />
    </main>
  );
}
