import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen text-[var(--text-main)] selection:bg-[var(--accent)]/30 selection:text-[var(--text-main)]">
      <div className="gradient-bg"></div>
      <Navbar />
      
      <main>
        <Hero />
        <Services />
        <Contact />
      </main>
    </div>
  );
}
