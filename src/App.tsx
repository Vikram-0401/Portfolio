import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { UniversalBackground } from './components/Background';
import { useEffect } from 'react';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div className="min-h-screen text-white overflow-x-hidden relative">
      <UniversalBackground />
      <ScrollToTop />
      <Navbar />
      <main className="min-h-[calc(100vh-80px)] relative z-10">
        <Routes>
          <Route path="/" element={
            <div className="w-full">
              {/* Hero Section */}
              <section id="hero" className="min-h-[calc(100vh-80px)] flex items-center">
              <Hero />
            </section>
              {/* About Section */}
              <section id="about" className="min-h-screen py-20">
                <About />
              </section>
              {/* Skills Section */}
              <section id="skills" className="min-h-screen py-20">
                <Skills />
              </section>
              {/* Projects Section */}
              <section id="projects" className="min-h-screen py-20">
                <Projects />
              </section>
              {/* Contact Section */}
              <section id="contact" className="min-h-screen py-20">
                <Contact />
              </section>
            </div>
          } />
          <Route path="/about" element={
            <section id="about" className="min-h-[calc(100vh-80px)] pt-20">
              <About />
            </section>
          } />
          <Route path="/skills" element={
            <section id="skills" className="min-h-[calc(100vh-80px)] pt-20">
              <Skills />
            </section>
          } />
          <Route path="/projects" element={
            <section id="projects" className="min-h-[calc(100vh-80px)] pt-20">
              <Projects />
            </section>
          } />
          <Route path="/contact" element={
            <section id="contact" className="min-h-[calc(100vh-80px)] pt-20">
              <Contact />
            </section>
          } />
        </Routes>
      </main>
      <footer className="py-6 text-center text-slate-500 border-t border-slate-800 bg-black/[0.96] relative z-10">
        <p>© {new Date().getFullYear()} Vikram R. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;