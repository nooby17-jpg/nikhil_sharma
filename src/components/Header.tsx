"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [time, setTime] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Time & Scroll Logic
  useEffect(() => {
    // Time Setup
    setTime(new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }));
    const timer = setInterval(() => {
        setTime(new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }));
    }, 60000);

    // Scroll Setup
    const handleScroll = () => {
        setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
        clearInterval(timer);
        window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
    <header 
        className={`fixed top-0 left-0 w-full z-50 flex justify-between items-start text-[#ededed] pointer-events-none transition-all duration-500 ease-[0.76, 0, 0.24, 1]
        ${isScrolled 
            ? "py-4 px-6 md:px-12 bg-[#0a0a0a]/60 backdrop-blur-md border-b border-white/10 shadow-lg"
            : "p-6 md:p-12 mix-blend-difference bg-transparent"
        }`}
    >
      
      
      <div className="flex flex-col text-sm font-medium leading-tight pointer-events-auto cursor-pointer z-50 group">
        <Link href="/">
            <span className="font-bold tracking-tight group-hover:text-gray-400 transition-colors">NIKHIL SHARMA</span>
            <span className={`text-xs opacity-70 mt-1 block transition-all duration-300 ${isScrolled ? 'h-0 opacity-0 overflow-hidden' : 'h-auto opacity-70'}`}>
            DESIGN, DEVELOPMENT, <br /> INTELLIGENCE
            </span>
        </Link>
      </div>

      <nav className="hidden md:block pointer-events-auto">
        <ul className="flex gap-8 text-sm font-medium tracking-wide">
          <NavLink href="/projects">PROJECTS</NavLink>
          <NavLink href="/about">ABOUT</NavLink>
          <NavLink href="/contact">CONTACT</NavLink>
        </ul>
      </nav>

      <div className="hidden md:block text-right text-xs uppercase tracking-widest opacity-70">
        INDIA <br /> 
        <span className={`${isScrolled ? 'hidden' : 'inline'}`}>IST {time}</span>
      </div>

      <div 
        onClick={toggleMenu}
        className="md:hidden text-sm cursor-pointer pointer-events-auto font-mono uppercase z-50 hover:opacity-60 transition-opacity"
      >
        [{isMenuOpen ? "CLOSE" : "MENU"}]
      </div>
    </header>

   
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div 
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 bg-[#0a0a0a] z-40 flex flex-col justify-center items-center pointer-events-auto"
        >
             <ul className="flex flex-col gap-8 text-4xl font-oswald uppercase text-center">
                <li><Link href="/" onClick={toggleMenu}>Home</Link></li>
                <li><Link href="/projects" onClick={toggleMenu}>Projects</Link></li>
                <li><Link href="/about" onClick={toggleMenu}>About</Link></li>
                <li><Link href="/contact" onClick={toggleMenu}>Contact</Link></li>
             </ul>
             <div className="absolute bottom-10 text-xs font-mono text-gray-500">
                NIKHIL SHARMA © 2026
             </div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
      <li>
        <Link href={href} className="relative group inline-block">
        
            <span className="relative z-10">{children}</span>
            
          
            <span className="absolute left-0 top-1/2 block h-[2px] w-0 bg-[#ededed] transition-[width] duration-300 ease-out group-hover:w-full -translate-y-1/2"></span>
        </Link>
      </li>
    );
}