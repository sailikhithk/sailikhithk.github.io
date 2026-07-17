import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutAndTechStack from "./components/AboutAndTechStack";
import Recognition from "./components/Recognition";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Publications from "./components/Publications";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutAndTechStack />
      <Recognition />
      <Experience />
      <Publications />
      <Certifications />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
