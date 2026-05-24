import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import About from './components/About';
import { UniversalBackground } from './components/Background';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-black text-white">
      <UniversalBackground />
      <ScrollToTop />
      <Navbar />
      <main className="relative z-10">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Contact />
              </>
            }
          />
          <Route path="/about" element={<About isStandalone />} />
          <Route path="/skills" element={<Skills isStandalone />} />
          <Route path="/projects" element={<Projects isStandalone />} />
          <Route path="/contact" element={<Contact isStandalone />} />
        </Routes>
      </main>
      <footer className="relative z-10 border-t border-white/10 bg-black/80 px-4 py-7 text-center text-sm text-slate-500 backdrop-blur-xl">
        <p>© {new Date().getFullYear()} Vikram R. Crafted for curious, useful software.</p>
      </footer>
    </div>
  );
}

export default App;
