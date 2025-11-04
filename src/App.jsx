import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Gallery from './components/Gallery';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-inter">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Gallery />
        <section id="news" className="py-20 bg-gradient-to-b from-[#0b0b12] to-black">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
              <h3 className="text-2xl sm:text-3xl font-bold">Ready to power your launch?</h3>
              <p className="text-white/70 mt-3 max-w-2xl mx-auto">This site ships with a cinematic hero, feature highlights, and a gallery section—perfect for announcing your game and building hype.</p>
              <div className="mt-6 flex items-center justify-center gap-3">
                <a href="#home" className="px-5 py-3 rounded-md bg-white text-black font-semibold hover:bg-white/90 transition">Back to Top</a>
                <a href="#features" className="px-5 py-3 rounded-md border border-white/20 text-white/90 hover:bg-white/10 transition">Explore Features</a>
              </div>
            </div>
          </div>
        </section>
        <footer className="py-10 text-center text-white/60 text-sm border-t border-white/10">
          <p>© {new Date().getFullYear()} V!CE — Game launch experience. Not affiliated with Rockstar Games.</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
