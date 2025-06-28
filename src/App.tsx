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
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      <ScrollToTop />
      <Navbar />
      <main className="min-h-[calc(100vh-80px)]">
        <Routes>
          <Route path="/" element={
            <section id="home" className="min-h-[calc(100vh-80px)] flex items-center">
              <Hero />
            </section>
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
      <footer className="py-6 text-center text-slate-500 border-t border-slate-200 bg-slate-50">
        <p>© {new Date().getFullYear()} Vikram R. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;