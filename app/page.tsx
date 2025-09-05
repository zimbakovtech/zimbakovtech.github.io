import Header from "../components/Header";
import Hero from "../components/Hero";
import Section from "../components/Section";
import About from "../components/About";
import ProjectsGrid from "../components/ProjectsGrid";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Page() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <ProjectsGrid />
      <Contact />
      <Footer />
    </main>
  );
}
