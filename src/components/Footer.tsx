"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-20 px-6 md:px-12 border-t border-[#333] bg-[#0a0a0a] flex flex-col md:flex-row justify-between items-start md:items-end gap-10">

      <div className="flex flex-col gap-4">
        <h2 className="font-oswald text-4xl md:text-6xl uppercase leading-[0.9]">
          Let's Create <br/> The Future.
        </h2>
        <a 
          href="/contact" 
          className="text-gray-500 hover:text-white transition-colors font-mono text-sm mt-4"
        >
          DROP ME A LINE ↗
        </a>
      </div>

      <div className="flex gap-12 text-xs font-mono text-gray-500 uppercase tracking-widest">
        <div className="flex flex-col gap-2">
          <span className="text-white mb-2">Socials</span>
          <Link href="/https://www.linkedin.com/in/nikhil-sharma-3906751a0/" className="hover:text-white transition-colors">LinkedIn</Link>
          <Link href="/https://github.com/nooby17-jpg" className="hover:text-white transition-colors">GitHub</Link>
          <Link href="/https://www.kaggle.com/nikhilsharma1212" className="hover:text-white transition-colors">Kaggle</Link>
        </div>
        
        <div className="flex flex-col gap-2">
          <span className="text-white mb-2">Sitemap</span>
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <Link href="/about" className="hover:text-white transition-colors">About</Link>
          <Link href="/projects" className="hover:text-white transition-colors">Projects</Link>
        </div>
      </div>

      <div className="w-full md:w-auto text-xs text-gray-700 font-mono mt-10 md:mt-0">
        © 2026 NIKHIL SHARMA
      </div>
    </footer>
  );
}