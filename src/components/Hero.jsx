import React from 'react';
import Spline from '@splinetool/react-spline';
import { PlayCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] w-full overflow-hidden bg-gradient-to-b from-[#0b0b12] via-[#0f0f1a] to-black text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-pink-500/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white/70 bg-white/10 px-3 py-1 rounded-full border border-white/10">Superhero Shield • Interactive 3D</span>
            <h1 className="text-5xl sm:text-6xl font-black leading-tight tracking-tight">
              Launch your game with a cinematic, immersive hero
            </h1>
            <p className="text-white/70 text-lg max-w-2xl">
              A modern, neon-drenched landing built for hype. Smooth 3D, bold typography, and sections designed to convert visitors into fans.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.youtube.com/watch?v=QdBZY2fkU-0"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-white text-black font-semibold hover:bg-white/90 transition shadow"
              >
                <PlayCircle size={20} /> Watch Reveal
              </a>
              <a
                href="#features"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-white/20 text-white/90 hover:bg-white/10 transition"
              >
                Explore Features
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative h-[520px] rounded-2xl bg-gradient-to-br from-pink-500/10 via-fuchsia-400/10 to-purple-500/10 border border-white/10 overflow-hidden">
              <Spline scene="https://prod.spline.design/zBXGLjse1OwBSbps/scene.splinecode" style={{ width: '100%', height: '100%' }} />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
