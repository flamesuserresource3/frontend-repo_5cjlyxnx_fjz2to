import React from 'react';
import { Gamepad2, Shield, Zap, Users } from 'lucide-react';

const features = [
  {
    icon: <Gamepad2 className="h-6 w-6" />,
    title: 'Next‑gen Gameplay',
    desc: 'High-speed pursuits, dynamic missions, and a living world that reacts to your choices.'
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: 'Superhero Edge',
    desc: 'Channel cinematic power with an interactive shield centerpiece on the hero section.'
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: 'Performance First',
    desc: 'Optimized animations and assets for buttery-smooth interactions across devices.'
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: 'Built for Community',
    desc: 'Sections for news, socials, and updates to keep your players engaged and informed.'
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20 bg-gradient-to-b from-black to-[#0b0b12] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Features that set the stage</h2>
          <p className="text-white/70 mt-3">Everything you need to launch with impact—crafted for modern game reveals.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/[0.08] transition">
              <div className="inline-flex items-center justify-center rounded-lg bg-white/10 border border-white/10 h-11 w-11 mb-4 text-white/90">
                {f.icon}
              </div>
              <h3 className="font-semibold text-lg">{f.title}</h3>
              <p className="text-white/70 mt-2 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
