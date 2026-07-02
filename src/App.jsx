 import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";
 


function App() {
  return (
    <div className="bg-slate-950 text-white">
      <>
  <Navbar />
  <Hero />
  <About />
  <Projects />
  <Skills />
  <Experience />
  <Contact />

</>
    </div>
  );
}

export default App;