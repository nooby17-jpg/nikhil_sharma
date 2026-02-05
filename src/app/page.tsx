"use client";
import ProjectCard from "@/components/ProjectCard"; 
import About from "@/components/About"; 
import HeroCanvas from "@/components/HeroCanvas"; // New Background
import FairyTypewriter from "@/components/FairyTypewriter"; // New Text Effect

export default function Home() {
    const BASE_PATH = '/nikhil_sharma';
  return (
    <main className="min-h-screen w-full relative">
      
 
      <section className="h-screen w-full grid grid-cols-1 md:grid-cols-2 px-6 md:px-12 pt-32 border-b border-[#333] relative overflow-hidden">
    
        <HeroCanvas />

        <div className="flex flex-col md:justify-between items-start pb-12 z-10 pointer-events-none  md:text-left h-full">
          <div className="text-s tracking-[0.2em] text-gray-400 font-inter mt-10 md:mt-0">
            DATA SCIENTIST • ML ENGINEER • CREATIVE DEV
          </div>
          
          <div className="mt-5 md:mt-0 font-oswald text-[20vw] md:text-[10vw] leading-[0.8] font-bold uppercase mix-blend-difference pb-4">
             <FairyTypewriter text="Nikhil" delay={0.5} />
             <FairyTypewriter text="Sharma" delay={0.8} />
          </div>
        </div>

       
        <div className="flex flex-col justify-start md:justify-end pb-12 items-start md:items-end text-left md:text-right gap-6 z-10 pointer-events-none -mt-10 md:mt-0">
          <div className="font-inter text-gray-300 max-w-sm text-lg md:text-base leading-relaxed">
            <br/>
            Bridging the gap between <strong>predictive intelligence</strong> and <strong>immersive design</strong>. 
            Currently engineering high-performance AI porjects as Freelance and as a B.Tech Computer Engineering&apos;s Final Semester student.
          </div>
          <div className="flex gap-4 text-s font-mono text-gray-500 justify-start text-left md:justify-end">
            <span>SCROLL FOR INTELLIGENCE</span>
            <span>↓</span>
          </div>
        </div>

      </section>

      <About />

      
      <section className="w-full" id="projects">
        <div className="py-8 px-6 md:px-12 border-b border-[#333] flex justify-between items-center">
          <span className="text-sm font-inter text-gray-500">(03) SELECTED WORKS</span>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 w-full">
          <ProjectCard 
            id="01"
            title= "3D Model Generation"
            tech= "Python, Django, React, Three.js"
            image={`${BASE_PATH}/3dgen.jpg`}
          />
          <ProjectCard 
            id="02" 
            title="Avya AI Medical Assistant" 
            tech="Electron, Vite, Python, AI" 
            image={`${BASE_PATH}/avya.jpg`} 
          />
          <ProjectCard 
            id="03" 
            title="Sign Language Gen" 
            tech="DL, LSTM, Python, Streamlit" 
            image={`${BASE_PATH}/sign.png`} 
          />
          <ProjectCard 
            id="04" 
            title="Creative Portfolio V1" 
            tech="GSAP / WebGL / Three.js" 
            image={`${BASE_PATH}/portfolio.jpg`} 
          />
        </div>
      </section>
    </main>
  );
}