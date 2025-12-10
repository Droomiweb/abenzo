'use client';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const navLinks = [
    { name: 'Expertise', href: '#services' },
    { name: 'Work', href: '#work' },
    { name: 'About', href: '#about' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* LOGO FIX: 'invert brightness-0' turns the black logo PURE WHITE */}
         {/* LOGO */}

        <a href="#" className="relative group z-50">

          <span className="font-space text-3xl font-extrabold tracking-tighter text-white">

            Abenzo<span className="text-[#008278]">.</span>

          </span>

        </a>



        {/* DESKTOP NAV - Sliding Pill Animation */}
        <div className="hidden md:flex items-center bg-white/5 backdrop-blur-md px-1 py-1 rounded-full border border-white/10 relative">
          {navLinks.map((link, index) => (
            <a 
              key={link.name} 
              href={link.href}
              className="relative px-5 py-2 text-sm font-medium transition-colors"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Text Layer - Changes color on hover */}
              <span className={`relative z-10 transition-colors duration-200 ${hoveredIndex === index ? 'text-white' : 'text-gray-400'}`}>
                {link.name}
              </span>

              {/* Sliding Background Pill */}
              {hoveredIndex === index && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-[#008278] rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </a>
          ))}
        </div>

        {/* CTA BUTTON FIX: Added overflow-hidden to clip the green box */}
        <div className="hidden md:block">
            <a 
                href="#contact" 
                className="group relative inline-flex items-center justify-center px-6 py-2.5 rounded-full overflow-hidden bg-white text-black font-bold text-xs uppercase tracking-widest hover:shadow-[0_0_20px_rgba(0,130,120,0.4)] transition-all"
            >
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">Let's Talk</span>
                
                {/* The Green Fill Effect */}
                <div className="absolute inset-0 bg-[#008278] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            </a>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white z-50">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-24 left-4 right-4 bg-[#050a08]/95 backdrop-blur-xl border border-white/10 p-6 rounded-2xl md:hidden shadow-2xl flex flex-col gap-6 text-center z-40"
        >
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-lg font-bold text-white hover:text-[#008278]">
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
}