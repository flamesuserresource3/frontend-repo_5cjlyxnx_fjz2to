import React from 'react';

const images = [
  'https://images.unsplash.com/photo-1516528387618-afa90b13e000?q=80&w=1974&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1498049794561-7780e7231661?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1974&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1974&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1974&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1505744767368-8b38e02a1a13?q=80&w=1974&auto=format&fit=crop',
];

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-20 bg-[#0b0b12] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">World preview</h2>
            <p className="text-white/70 mt-2">A glimpse of the neon-soaked playground your players will explore.</p>
          </div>
          <a href="#news" className="hidden sm:inline-block text-sm text-white/80 hover:text-white">See updates →</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((src, i) => (
            <figure key={i} className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5">
              <img src={src} alt="Game world scene" className="h-56 w-full object-cover transition duration-500 group-hover:scale-105" />
              <figcaption className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
