import { useLenis } from "./hooks/useLenis";
import PageLoader from "./components/layout/PageLoader";
import CursorGlow from "./components/layout/CursorGlow";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import GithubStats from "./components/sections/GithubStats";
import Contact from "./components/sections/Contact";

export default function App() {
  useLenis();

  return (
    <div className="relative bg-bg text-ink font-body min-h-screen">
      <PageLoader />
      <CursorGlow />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <GithubStats />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
