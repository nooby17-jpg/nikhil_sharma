"use client";
import { useRef, useState } from "react";
import Link from "next/link"; // <--- Added Link import
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TextReveal from "@/components/TextReveal";
import ProjectCard from "@/components/ProjectCard"; 
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import HeroCanvas from "@/components/HeroCanvas";
gsap.registerPlugin(ScrollTrigger);
const BASE_PATH = '/nikhil_sharma';
const projects = [
  {
    id: "01",
    category: "DL / AI",
    title: "3D Model Generation",
    tech: "Python, Django, React, Three.js",
    image: `${BASE_PATH}/3dgen.jpg`,
    year: "2025"
  },
  {
    id: "02",
    category: "Computer Vision",
    title: "Real-time Object Detection",
    tech: "PyTorch, OpenCV, CUDA",
    image: `${BASE_PATH}/rtob.png`,
    year: "2024"
  },
  {
    id: "03",
    category: "DL, RWA",
    title: "Sign Language Live Caption Generator",
    tech: "DL, LSTM, Python, Streamlit",
    image: `${BASE_PATH}/sign.png`,
    year: "2025"
  },
  {
    id: "04",
    category: "Creative Dev , AI",
    title: "Avya AI Medical Assitant",
    tech: "Electron, Vite, Python",
    image: `${BASE_PATH}/avya.jpg`,
    year: "2026"
  },
  {
    id: "05",
    category: "ML / AI",
    title: "Predictive Analytics Dashboard",
    tech: "Python, React, D3.js",
    image: `${BASE_PATH}/aidash.jpg`, 
    year: "2023"
  },
   {
    id: "06",
    category: "Data Analytics / Research",
    title: "SpaceX Landing & Launch deep analysis",
    tech: "Python, R, Jupyter",
    image: `${BASE_PATH}/space.jpg`, 
    year: "2022"
  },
];

const archive = [
  { name: "FoodStop Delivery", tech: "Django / Postgres", type: "Web App", year: "2022" },
  { name: "3D Model Generator", tech: "PyTorch / GANs", type: "R&D", year: "2024" },
  { name: "Portfolio V1", tech: "HTML / SCSS", type: "Design", year: "2026" },
  { name: "Koolkart E-Commerce", tech: "Django / Python", type: "Web App", year: "2025" },
  { name: "Sentiment Analysis Tool", tech: "NLP / Spacy", type: "ML Script", year: "2023" },
];

export default function ProjectsPage() {
  const container = useRef(null);
  const [filter, setFilter] = useState("ALL");

  return (
    <main className="min-h-screen bg-[#0a0a0a] w-full selection:bg-white selection:text-black">
      
      <section className="pt-32 md:pt-40 px-6 md:px-12 pb-12 border-b border-[#333] h-[100vh]">
        
        <HeroCanvas/>
        <div className="flex items-center gap-2 font-mono text-xs text-gray-500 uppercase tracking-widest mb-8 md:mb-12">
             <Link href="/" className="hover:text-white transition-colors">HOME</Link>
             <span>—</span>
             <span className="text-white">WORK</span>
        </div>

        <div className="font-oswald  mt-20 text-[18vw] md:text-[10vw] leading-[0.9] uppercase text-center justify-center font-bold mix-blend-difference">
          <TextReveal text="Selected" />
          <TextReveal text="Works" />
        </div>
       <div className="flex flex-col gap-4 text-lg font-mono text-gray-200 justify-center items-center pl-0 mt-80 md:mt-28">
            <span>SCROLL FOR PROJECTS</span>
            <span>↓</span>
          </div>
      </section>

      <section className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full">
          {projects.map((p) => (
             <ProjectCard 
               key={p.id}
               id={p.id}
               title={p.title}
               tech={p.tech}
               image={p.image}
             />
          ))}
        </div>
      </section>

    
      <section className="px-6 md:px-12 py-20 border-t border-[#333]">
        <div className="flex justify-between items-end mb-12">
            <h3 className="font-oswald text-4xl uppercase">Archive</h3>
            <span className="font-mono text-xs text-gray-500">EXPERIMENTAL & OPEN SOURCE</span>
        </div>

        <div className="w-full border-t border-[#333]">
           <div className="grid grid-cols-12 gap-4 py-4 border-b border-[#333] font-mono text-xs text-gray-500 uppercase tracking-widest">
               <div className="col-span-2 md:col-span-1">Year</div>
               <div className="col-span-6 md:col-span-5">Project</div>
               <div className="hidden md:block md:col-span-4">Stack</div>
               <div className="col-span-4 md:col-span-2 text-right">Type</div>
           </div>
           
           {archive.map((item, i) => (
             <ArchiveItem key={i} {...item} />
           ))}
        </div>
      </section>

    </main>
  );
}

function ArchiveItem({ name, tech, type, year }: { name: string, tech: string, type: string, year: string }) {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-12 gap-4 py-6 border-b border-[#333] hover:bg-[#111] transition-colors cursor-pointer group items-center"
        >
            <div className="col-span-2 md:col-span-1 font-mono text-xs text-green-500">{year}</div>
            <div className="col-span-6 md:col-span-5 font-oswald text-lg md:text-xl uppercase group-hover:translate-x-2 transition-transform">{name}</div>
            <div className="hidden md:block md:col-span-4 font-mono text-xs text-gray-500">{tech}</div>
            <div className="col-span-4 md:col-span-2 text-right font-mono text-xs text-gray-400">{type}</div>
        </motion.div>
    )
}