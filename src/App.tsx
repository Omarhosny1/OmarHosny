import { LazyMotion, domAnimation } from "framer-motion";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Journey } from "./components/Journey";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import { Services } from "./components/Services";
import { Skills } from "./components/Skills";
import { Background } from "./components/ui/Background";
import { ScrollProgress } from "./components/ui/ScrollProgress";

function App() {
  return (
    <LazyMotion features={domAnimation} strict>
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-70 focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[#0a0a0a]"
      >
        Skip to content
      </a>

      <Background />
      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Services />
        <Contact />
      </main>

      <Footer />
    </LazyMotion>
  );
}

export default App;
