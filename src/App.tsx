import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
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
    <div className="min-h-screen bg-[#121212] text-white overflow-x-hidden">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
            <Route path="/" element={
              <>
                <section id="home">
                  <Hero />
                </section>
                <section id="about">
                  <About />
                </section>
                <section id="skills">
                  <Skills />
                </section>
                <section id="projects">
                  <Projects />
                </section>
                <section id="contact">
                  <Contact />
                </section>
              </>
            } />
            <Route path="/about" element={
              <section className="min-h-screen pt-20">
                <About />
              </section>
            } />
            <Route path="/skills" element={
              <section className="min-h-screen pt-20">
                <Skills />
              </section>
            } />
            <Route path="/projects" element={
              <section className="min-h-screen pt-20">
                <Projects />
              </section>
            } />
            <Route path="/contact" element={
              <section className="min-h-screen pt-20">
                <Contact />
              </section>
            } />
          </Routes>
        </main>
        <footer className="py-6 text-center text-gray-400 border-t border-gray-800">
          <p>© 2025 Vikram R. All rights reserved.</p>
        </footer>
      </div>
  );
}

export default App;