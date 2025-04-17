import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[#121212] text-white overflow-x-hidden scroll-smooth">
      <Navbar />
      <div className="snap-y snap-mandatory">
        <div className="snap-center">
          <Hero />
        </div>
        <div className="snap-center">
          <About />
        </div>
        <div className="snap-center">
          <Skills />
        </div>
        <div className="snap-center">
          <Projects />
        </div>
        <div className="snap-center">
          <Contact />
        </div>
      </div>
      <footer className="py-6 text-center text-gray-400 border-t border-gray-800">
        <p>© 2025 Vikram R. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;