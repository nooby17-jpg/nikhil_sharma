"use client";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import TextReveal from "@/components/TextReveal";
import ProjectCard from "@/components/ProjectCard";

import HeroCanvas from "@/components/HeroCanvas";
export default function AboutPage() {
  const container = useRef(null);

  return (
    <main ref={container} className="min-h-screen bg-[#0a0a0a] w-full selection:bg-white selection:text-black">

      <section className="pt-32 md:pt-40 px-6 md:px-12 pb-12 md:pb-20 border-b border-[#333] h-[100vh]">
 
         <HeroCanvas />

        <div className="flex items-center gap-2 font-mono text-xs text-gray-500 uppercase tracking-widest mb-8 md:mb-12">
             <Link href="/" className="hover:text-white transition-colors">HOME</Link>
             <span>—</span>
             <span className="text-white">ABOUT</span>
        </div>

        <div className="font-oswald mt-20 text-[20vw] md:text-[10vw] leading-[0.9] uppercase text-center justify-center font-bold mix-blend-difference">
          <TextReveal text="Beyond" />
          <TextReveal text="The Code" />
        </div>

        <div className="flex flex-col gap-4 text-lg font-mono text-gray-200 justify-center items-center pl-0 mt-60 md:mt-28">
            <span>SCROLL FOR RESUME</span>
            <span>↓</span>
          </div>
      </section>


      <div className="w-full flex flex-col md:flex-row items-start">

        <div className="w-full md:w-1/3 border-b md:border-b-0 md:border-r border-[#333] bg-[#0a0a0a] z-20 relative md:sticky md:top-32 self-start">
           <div className="p-6 md:p-12 flex flex-row md:flex-col justify-start items-center md:items-start gap-6 md:gap-12">
               
              
               <div className="relative shrink-0 w-24 h-24 md:w-40 md:h-40 rounded-full overflow-hidden border border-[#333] grayscale hover:grayscale-0 transition-all duration-500">
                    <Image 
                        src="/dp.png" 
                        alt="Nikhil Sharma"
                        fill
                        className="object-cover"
                    />
               </div>

   
               <div className="flex-1">
                   <div className="text-xs font-mono text-gray-500 mb-4 md:mb-8">(ABOUT ME)</div>
                   <p className="font-inter text-gray-400 text-sm leading-relaxed">
                     I don&apos;t just write code; I engineer intelligence. My work sits at the intersection of data science rigor and creative design intuition.
                   </p>
               </div>
           </div>
        </div>

    
        <div className="w-full md:w-2/3">
          <Section title="Education">
            <TimelineItem 
               year="2023 — 2026"
               title="Bachelor of Computer Engineering"
               subtitle="Computer Science & Engineering"
               desc="Focused on Data Science, Machine Learning, Artificial Intelligence, and Neural Networks. Graduated with Honors."
             />
             <TimelineItem 
               year="2017 — 2020"
               title="Diploma in Computer Technology"
               subtitle="Computer Science & Engineering"
               desc="Focused on Algorithms, Data Structures, and Design. Graduated with First Class."
             />
          </Section>

       
          <Section title="Experience">
            <TimelineItem 
              year="2021 — 2022"
              title="Frontend Developer"
              subtitle="Bolds Innovation Pvt. Ltd."
              desc="Leading the frontend architecture for AI-driven dashboards. Implemented real-time data visualization pipelines using D3.js and React."
            />
            <TimelineItem 
              year="2023 — 2026"
              title="Freelance Full Stack Dev"
              subtitle="Global Clients"
              desc="Delivered 15+ projects including E-commerce platforms (Django) and Portfolio sites (Next.js)."
            />
          </Section>

   
          <Section title="Certifications">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <CertCard name="Data Analytics" issuer="Google" />
                <CertCard name="IBM Data Science Professional" issuer="IBM" />
                <CertCard name="IBM Machine Learning" issuer="IBM" />
                <CertCard name="IBM Deep Learning" issuer="IBM" />
                <CertCard name="AWS Solutions Architect" issuer="Amazon" />
                <CertCard name="Meta Front-End Developer" issuer="Meta" />
                <CertCard name="Full Stack Python" issuer="Michigan Univ" />
                <CertCard name="Project Management" issuer="Google" />
                <CertCard name="Data Science" issuer="Google" />
                <CertCard name="Front End Development" issuer="Michigan Univ" />
             </div>
          </Section>

          <div className="border-b border-[#333]">
            <div className="p-6 md:p-12 border-b border-[#333]">
                 <span className="text-sm font-inter text-gray-500">(04) SELECTED WORKS</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 w-full">
                <ProjectCard id="01" title="3D Model Generation" tech="Python / AI / Deep Learning" image="/3dgen.jpg" />
                <ProjectCard id="02" title="Sign Language Translator" tech="LSTM / CNN / Comp. Vision" image="/sign.png" />
                <ProjectCard id="03" title="SpaceX Data Analysis" tech="Python / R / Data Viz" image="/space.jpg" />
                <ProjectCard id="04" title="Predictive Dashboard" tech="Python / React / D3.js" image="/aidash.jpg" />
                <ProjectCard id="05" title="Avya AI Medical Assistant" tech="Electron, Vite, Python, AI" image="/avya.jpg" />
                <ProjectCard id="06" title="Nikhil Portfolio" tech="Next.js / GSAP / WebGL" image="/portfolio.jpg" />
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}



function Section({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <div className="border-b border-[#333] p-6 md:p-12">
      <h3 className="font-oswald text-4xl uppercase mb-12 text-white/90">{title}</h3>
      {children}
    </div>
  );
}

function TimelineItem({ year, title, subtitle, desc }: { year: string, title: string, subtitle: string, desc: string }) {
  return (
    <div className="mb-12 group">
      <span className="font-mono text-xs text-green-500 block mb-2">{year}</span>
      <h4 className="font-oswald text-2xl uppercase mb-1 group-hover:translate-x-2 transition-transform duration-300">{title}</h4>
      <span className="text-sm font-bold text-gray-500 block mb-4">{subtitle}</span>
      <p className="font-inter text-gray-400 text-sm leading-relaxed max-w-md">{desc}</p>
    </div>
  );
}

function CertCard({ name, issuer }: { name: string, issuer: string }) {
  return (
    <div className="p-6 border border-[#333] hover:bg-[#111] transition-colors">
      <h5 className="font-oswald text-xl uppercase mb-2">{name}</h5>
      <span className="font-mono text-xs text-gray-500">{issuer}</span>
    </div>
  );
}