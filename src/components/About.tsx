"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link"; 

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const container = useRef(null);

  useGSAP(() => {
    
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      ScrollTrigger.create({
        trigger: container.current,
        start: "top top",
        end: "bottom bottom",
        pin: ".about-left", 
      });
    });

    return () => mm.revert(); 
  }, { scope: container });

  return (
    <section ref={container} className="relative w-full flex flex-col md:flex-row border-b border-[#333] bg-[#0a0a0a]">
      
      <div className="about-left w-full md:w-1/2 h-auto md:h-screen p-6 md:p-12 flex flex-col justify-between border-r border-[#333]">
        <div className="mb-8 md:mb-0 mt-5">
            <div className="text-xs tracking-[0.2em] text-gray-500 font-inter uppercase mb-4">
            (02) — Biography
            </div>
            
            <h2 className="font-oswald text-4xl md:text-6xl uppercase leading-[0.9]">
            Decoding complex <br/>
            <span className="text-gray-600">data patterns</span> into <br/>
            seamless <span className="text-gray-600">UI systems.</span>
            </h2>
        </div>

        <div className="font-mono text-xs text-gray-500">
           BASED IN INDIA <br/>
           AVAILABLE FOR FREELANCE
        </div>
      </div>

      {/* RIGHT: SCROLLABLE TIMELINE */}
      <div className="w-full md:w-1/2 flex flex-col">
        
        {/* Experience Item 1 */}
        <div className="min-h-[50vh] border-b border-[#333] p-12 flex flex-col justify-center hover:bg-[#111] transition-colors duration-500">
            <span className="font-mono text-xs text-green-500 mb-4">2021 — Present</span>
            <h3 className="font-oswald text-3xl uppercase mb-2">Frontend Specialist</h3>
            <p className="font-inter text-gray-400 text-sm leading-relaxed max-w-md">
                Focused on pixel-perfect UI implementation using React and Tailwind. 
                Mastered component-driven architecture and state management, laying the foundation for complex application building.
            </p>
        </div>

        {/* Experience Item 2 */}
        <div className="min-h-[50vh] border-b border-[#333] p-12 flex flex-col justify-center hover:bg-[#111] transition-colors duration-500">
            <span className="font-mono text-xs text-green-500 mb-4">2021 — 2022</span>
            <h3 className="font-oswald text-3xl uppercase mb-2">Bolds Innovation Pvt. Ltd.</h3>
            <p className="font-inter text-gray-400 text-sm leading-relaxed max-w-md">
                <strong>Frontend Developer & ML Engineer.</strong> <br/><br/>
                Spearheaded the integration of predictive models into React dashboards. 
                Optimized high-volume data visualization using D3.js, reducing load times by 40%.
                Bridged the technical gap between Data Science teams and Product Design.
            </p>
        </div>

        {/* Experience Item 3 */}
        <div className="min-h-[50vh] border-b border-[#333] p-12 flex flex-col justify-center hover:bg-[#111] transition-colors duration-500">
            <span className="font-mono text-xs text-gray-500 mb-4">2022 — PRESENTS</span>
            <h3 className="font-oswald text-3xl uppercase mb-2">Data Analytics</h3>
            <p className="font-inter text-gray-400 text-sm leading-relaxed max-w-md">
                Expanded expertise into Big Data technologies. Built pipelines using Python (Pandas/NumPy) to process large datasets for e-commerce insights and user behavior tracking.
            </p>
        </div>

        {/* Experience Item 4 */}
        <div className="min-h-[50vh] border-b border-[#333] p-12 flex flex-col justify-center hover:bg-[#111] transition-colors duration-500">
            <span className="font-mono text-xs text-gray-500 mb-4">2023 — PRESENTS</span>
            <h3 className="font-oswald text-3xl uppercase mb-2">Data Science & AI</h3>
            <p className="font-inter text-gray-400 text-sm leading-relaxed max-w-md">
                Currently developing custom neural network architectures for computer vision (OpenCV/PyTorch). 
                Experimenting with Generative AI integration in web environments ("Avya AI").
            </p>
        </div>

        {/* Tech Stack Matrix */}
        <div className="min-h-[50vh] p-12 flex flex-col justify-center">
            <h3 className="font-oswald text-3xl uppercase mb-8">The Stack</h3>
            <div className="grid grid-cols-2 gap-4 font-mono text-xs text-gray-400 mb-12">
                <div>
                    <strong className="text-white block mb-2">CORE</strong>
                    Data Analytics<br/>
                    Data Science<br/>
                    ML & AI<br/>
                    Python (Pandas, NumPy)<br/>
                    JavaScript (ES6+)<br/>
                    TypeScript
                </div>
                <div>
                    <strong className="text-white block mb-2">FRAMEWORKS</strong>
                    React / Next.js<br/>
                    Django / FastAPI<br/>
                    PyTorch / TensorFlow
                </div>
                <div>
                    <strong className="text-white block mb-2">DESIGN</strong>
                    Figma<br/>
                    Tailwind CSS<br/>
                    GSAP / Three.js
                </div>
            </div>

            <Link href="/about" className="inline-block border border-[#333] px-8 py-4 rounded-full text-xs font-mono hover:bg-white hover:text-black transition-colors w-max uppercase">
                View Full Resume & Certifications →
            </Link>
        </div>

      </div>
    </section>
  );
}