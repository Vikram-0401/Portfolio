import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { useEffect } from 'react';
import { useTheme } from './hooks/useTheme';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  // Initialize theme
  useTheme();

  return (
    <div className="min-h-screen bg-[#0d1526] text-white overflow-x-hidden transition-colors duration-300">
      <ScrollToTop />
      <Navbar />
      <main className="min-h-[calc(100vh-80px)]">
        <Routes>
          <Route path="/" element={
            <div className="w-full">
              {/* Hero Section */}
              <section id="hero" className="min-h-[calc(100vh-80px)] flex items-center bg-[#0d1526]">
                <Hero />
              </section>
              {/* About Section */}
              <section id="about" className="min-h-screen py-20 bg-[#0d1526]">
                <About />
              </section>
              {/* Skills Section */}
              <section id="skills" className="min-h-screen py-20 bg-[#0d1526]">
                <Skills />
              </section>
              {/* Projects Section */}
              <section id="projects" className="min-h-screen py-20 bg-[#0d1526]">
                <Projects />
              </section>
              {/* Contact Section */}
              <section id="contact" className="min-h-screen py-20 bg-[#0d1526]">
                <Contact />
              </section>
            </div>
          } />
          <Route path="/about" element={
            <section id="about" className="min-h-[calc(100vh-80px)] pt-20 bg-[#0d1526]">
              <About />
            </section>
          } />
          <Route path="/skills" element={
            <section id="skills" className="min-h-[calc(100vh-80px)] pt-20 bg-[#0d1526]">
              <Skills />
            </section>
          } />
          <Route path="/projects" element={
            <section id="projects" className="min-h-[calc(100vh-80px)] pt-20 bg-[#0d1526]">
              <Projects />
            </section>
          } />
          <Route path="/contact" element={
            <section id="contact" className="min-h-[calc(100vh-80px)] pt-20 bg-[#0d1526]">
              <Contact />
            </section>
          } />
        </Routes>
      </main>
      <footer className="py-6 text-center text-slate-500 border-t border-slate-800 bg-[#0d1526] transition-colors duration-300">
        <p>© {new Date().getFullYear()} Vikram R. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;