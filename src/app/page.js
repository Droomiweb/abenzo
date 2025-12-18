'use client';

import ClickRipple from './components/ClickRipple';
import Navbar from './components/Navbar';
import Scene from './components/Scene';
import MouseFollower from './components/MouseFollower';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Terminal, PenTool, Layout, Mail, ExternalLink,
  ShoppingCart, RefreshCcw, Zap, Search, FileCode, MessageCircle, LifeBuoy,
  Instagram
} from 'lucide-react';

export default function Home() {
  
  // --- PROJECT DATA ---
  const projects = [
    {
      title: "PetLink",
      category: "AI Based Pet Matrimony Project",
      link: "https://petlinkk.vercel.app",
      color: "bg-blue-900"
    },
    {
      title: "My Coco",
      category: "3D game",
      link: "https://mycocopet.vercel.app",
      color: "bg-purple-900"
    },
    {
      title: "Food Delivery",
      category: "Cancelled project",
      link: "https://momos-theta.vercel.app",
      color: "bg-emerald-900"
    }
  ];

  // --- SERVICES DATA ---
  const services = [
    { title: "Web Development", desc: "Fast, SEO-ready Next.js sites.", icon: <Terminal /> },
    { title: "UI/UX Design", desc: "Clean interfaces that convert.", icon: <Layout /> },
    { title: "Branding", desc: "Identities that stand out.", icon: <PenTool /> },
    { title: "E-Commerce", desc: "High-performing online stores that scale.", icon: <ShoppingCart /> },
    { title: "Website Redesign", desc: "Modern, refreshed designs for outdated sites.", icon: <RefreshCcw /> },
    { title: "Performance Optimization", desc: "Lightning-fast load times and Core Web Vitals boosts.", icon: <Zap /> },
    { title: "SEO Optimization", desc: "Higher rankings with clean structure & best practices.", icon: <Search /> },
    { title: "Landing Pages", desc: "Conversion-focused pages built for results.", icon: <FileCode /> },
    { title: "Content Strategy", desc: "Clear messaging that strengthens your brand.", icon: <MessageCircle /> },
    { title: "Maintenance Support", desc: "Reliable updates, fixes, and ongoing improvements.", icon: <LifeBuoy /> },
  ];

  // --- CONTACT DATA ---
  const contactLinks = [
    {
      name: "WhatsApp",
      value: "+91 85908 14463",
      href: "https://wa.me/918590814463",
      icon: <MessageCircle size={32} />,
      color: "hover:border-green-500 hover:text-green-500",
      bg: "group-hover:bg-green-500/10"
    },
    {
      name: "Instagram",
      value: "@abenzo.co.in",
      href: "https://instagram.com/abenzo.co.in",
      icon: <Instagram size={32} />,
      color: "hover:border-pink-500 hover:text-pink-500",
      bg: "group-hover:bg-pink-500/10"
    },
    {
      name: "Email",
      value: "abenzo.co.in@gmail.com",
      href: "mailto:abenzo.co.in@gmail.com",
      icon: <Mail size={32} />,
      color: "hover:border-[#008278] hover:text-[#008278]",
      bg: "group-hover:bg-[#008278]/10"
    }
  ];

  return (
    <main className="bg-abenzo-dark min-h-screen text-white selection:bg-[#008278] selection:text-white">
      <MouseFollower />
      <ClickRipple />
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative h-screen w-full flex items-center justify-center">
        <Scene />
        <div className="z-10 text-center px-4 max-w-4xl mt-10 pointer-events-none"> 
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* OPTIMIZED: Specific Niche Tagline */}
            <h2 className="text-[#008278] font-bold tracking-[0.2em] text-xs uppercase mb-6">
              Next.js & 3D Digital Experience Agency
            </h2>
            
            {/* OPTIMIZED: H1 with Screen-Reader-Only Text for SEO */}
            <h1 className="font-space text-6xl md:text-8xl font-black mb-6 leading-none tracking-tight text-white">
              <span className="sr-only">Abenzo - 3D Web Development Agency</span>
              Abenzo<span className="text-[#008278]">.</span>
            </h1>

            <p className="text-gray-400 text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed">
              We build high-performance websites and digital brands that leave a lasting impact.
            </p>
            <div className="pointer-events-auto relative z-20">
              <a 
                href="#contact"
                className="inline-block px-8 py-4 bg-white text-black rounded-full font-bold transition-all duration-300 hover:bg-[#008278] hover:text-white hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
              >
                <span className="flex items-center gap-2">
                  Start Project <ArrowRight size={18} />
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- NEW ABOUT/SEO SECTION --- */}
      {/* This text is crucial for Google to understand what you actually DO */}
      <section className="py-12 px-6 bg-abenzo-dark relative z-10 border-b border-white/5">
        <div className="max-w-4xl mx-auto text-center">
           <p className="text-gray-400 text-lg leading-relaxed">
             We specialize in converting standard websites into <strong>immersive 3D experiences</strong>. 
             Using advanced technologies like <strong>React Three Fiber</strong> and <strong>Next.js</strong>, 
             we help startups and established brands in India and worldwide stand out with 
             award-winning interactive designs and <strong>high-performance code</strong>.
           </p>
        </div>
      </section>

      {/* --- SERVICES --- */}
      <section id="services" className="py-24 px-6 bg-abenzo-dark relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-space text-4xl font-bold mb-12 text-center">Our Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="p-8 border border-white/5 bg-white/5 rounded-xl hover:border-[#008278]/30 transition-all cursor-default group"
              >
                <div className="text-[#008278] mb-4 group-hover:scale-110 transition-transform duration-300">
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 font-space">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- WORK SHOWCASE --- */}
      <section id="work" className="py-24 px-6 bg-black relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-space text-4xl font-bold mb-12">Selected Work</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <a 
                key={i}
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative block h-[400px] w-full rounded-2xl overflow-hidden border border-white/10 bg-[#111]"
              >
                <div className="absolute inset-0 w-[400%] h-[400%] origin-top-left scale-[0.25] pointer-events-none select-none bg-white">
                  <iframe src={project.link} className="w-full h-full border-0" loading="lazy" title={project.title} scrolling="no" />
                </div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 pointer-events-none" />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 to-transparent pointer-events-none" />
                <div className="absolute top-6 right-6 p-3 bg-white text-black rounded-full opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-xl z-20">
                  <ExternalLink size={20} />
                </div>
                <div className="absolute bottom-0 left-0 w-full p-8 z-20">
                  <h3 className="text-2xl font-bold text-white font-space mb-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-500 shadow-black drop-shadow-lg">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-3">
                    <div className="h-[2px] w-4 group-hover:w-12 bg-[#008278] transition-all duration-500" />
                    <p className="text-gray-200 text-sm font-medium translate-y-2 group-hover:translate-y-0 transition-transform duration-500 delay-75 shadow-black drop-shadow-md">
                      {project.category}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="py-32 px-6 bg-abenzo-dark relative z-10 overflow-hidden">
        {/* Glow Effect behind contact */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#008278] opacity-5 blur-[120px] pointer-events-none" />
        
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-space text-4xl md:text-6xl font-black mb-6">Let's start a project.</h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">
              Ready to take your business to the next level? Reach out through any platform below.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {contactLinks.map((item, index) => (
              <motion.a 
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className={`group flex flex-col items-center justify-center p-10 border border-white/5 rounded-3xl bg-white/5 backdrop-blur-sm transition-all duration-300 ${item.color} ${item.bg}`}
              >
                <div className="mb-6 p-4 rounded-full bg-white/5 border border-white/10 group-hover:border-current transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.name}</h3>
                <p className="text-gray-400 group-hover:text-white transition-colors">{item.value}</p>
              </motion.a>
            ))}
          </div>

          <div className="mt-16 text-center">
             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-black/20 text-gray-400 text-sm">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Available for freelance work worldwide
             </div>
          </div>
        </div>
      </section>

      <footer className="py-8 text-center text-xs text-gray-600 bg-black border-t border-white/5">
        <p>© {new Date().getFullYear()} Abenzo. All rights reserved.</p>
      </footer>
    </main>
  );
}