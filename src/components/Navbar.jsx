import React from 'react';
import { Rocket, Play } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/20 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <span className="relative inline-flex items-center justify-center w-9 h-9 rounded-md bg-gradient-to-br from-pink-500 to-purple-600 text-white shadow-lg shadow-pink-500/25">
            <Rocket size={18} />
          </span>
          <div className="leading-tight">
            <p className="font-black tracking-tight text-white text-lg">V!CE</p>
            <p className="text-xs text-white/60 -mt-1">Inspired by GTA</p>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#features" className="text-white/80 hover:text-white transition">Features</a>
          <a href="#gallery" className="text-white/80 hover:text-white transition">Gallery</a>
          <a href="#news" className="text-white/80 hover:text-white transition">News</a>
        </nav>

        <a
          href="https://www.rockstargames.com/VI"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white text-black font-medium hover:bg-white/90 transition shadow"
        >
          <Play size={16} /> Watch Trailer
        </a>
      </div>
    </header>
  );
}
