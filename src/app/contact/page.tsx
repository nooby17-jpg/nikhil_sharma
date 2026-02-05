"use client";
import { useRef, useState } from "react";
import TextReveal from "@/components/TextReveal";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import HeroCanvas from "@/components/HeroCanvas";
gsap.registerPlugin(ScrollTrigger);

export default function ContactPage() {
  const container = useRef(null);
  const [status, setStatus] = useState<"IDLE" | "SUBMITTING" | "SUCCESS" | "ERROR">("IDLE");

  // FORM HANDLING (Connects to Formspree)
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("SUBMITTING");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      // REPLACE 'YOUR_FORMSPREE_ID' WITH YOUR ACTUAL ID from https://formspree.io/
      const response = await fetch("https://formspree.io/f/xnjbajak", {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus("SUCCESS");
        form.reset();
      } else {
        setStatus("ERROR");
      }
    } catch (error) {
      setStatus("ERROR");
    }
  }

  // Staggered animation for the form fields
  const formVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: 0.5 + i * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    })
  };

  return (
    <main ref={container} className="min-h-screen bg-[#0a0a0a] w-full selection:bg-white selection:text-black pt-32 md:pt-0">
      
      <div className="flex flex-col md:flex-row min-h-screen">
        
        {/* LEFT SIDE: INFO & LOCATION */}
        <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col justify-between border-b md:border-b-0 md:border-r border-[#333] relative">
            
            {/* TOP AREA: BREADCRUMBS & TITLE */}
            <div className="mt-10 md:mt-28">
                {/* BREADCRUMBS */}
                <div className="flex items-center gap-2 font-mono text-xs text-gray-500 uppercase tracking-widest mb-12">
                    <Link href="/" className="hover:text-white transition-colors">HOME</Link>
                    <span>—</span>
                    <span className="text-white">CONTACT</span>
                </div>
                <HeroCanvas/>
                {/* TITLE */}
                <div className="font-oswald text-[12vw] md:text-[8vw] leading-[0.85] font-bold uppercase mix-blend-difference mb-8">
                    <TextReveal text="Let's" />
                    <TextReveal text="Talk" />
                </div>
                <p className="font-inter text-gray-100 text-sm max-w-sm leading-relaxed">
                    Have a project in mind, a question, or just want to discuss the future of AI? I'm always open to new ideas and collaborations.
                </p>
            </div>

        
            <div className="flex flex-col gap-10 md:gap-20 mb-10">
                
             
                <div>
                    <span className="font-mono text-xs text-green-400 block mb-2">(CURRENTLY BASED IN)</span>
                    <h3 className="font-oswald text-2xl uppercase text-[#fff]">
                        Siliguri - 734006<br />
                        West Bengal, India
                    </h3>
                </div>

                {/* Social Links */}
                <div>
                    <span className="font-mono text-xs text-gray-100 block mb-4">(SOCIALS)</span>
                    <div className="flex flex-col gap-2 font-oswald text-xl uppercase">
                        <SocialLink href="https://instagram.com" label="Instagram" />
                        <SocialLink href="https://github.com/nooby17-jpg" label="Github" />
                        <SocialLink href="https://www.linkedin.com/in/nikhil-sharma-3906751a0/" label="LinkedIn" />
                        <SocialLink href="https://www.kaggle.com/nikhilsharma1212" label="Kaggle" />
                    </div>
                </div>

            </div>
        </div>

        {/* RIGHT SIDE: THE FORM */}
        <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col justify-center bg-[#0a0a0a]">
             
             {status === "SUCCESS" ? (
                 <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    className="flex flex-col items-center justify-center text-center"
                 >
                    <h2 className="font-oswald text-6xl uppercase mb-4">Message Sent</h2>
                    <p className="font-mono text-sm text-gray-500">I'll get back to you shortly.</p>
                    <button 
                        onClick={() => setStatus("IDLE")} 
                        className="mt-8 border-b border-white pb-1 text-sm font-mono uppercase hover:text-gray-400 transition-colors"
                    >
                        Send another?
                    </button>
                 </motion.div>
             ) : (
                <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto flex flex-col gap-10">
                    
                    {/* Name Field */}
                    <motion.div custom={0} variants={formVariants} initial="hidden" animate="visible" className="group relative">
                        <label className="font-mono text-xs text-gray-100 uppercase tracking-widest mb-2 block">Your Name</label>
                        <input 
                            name="name"
                            type="text" 
                            placeholder="Tell us your secret Identity 🤫" 
                            className="w-full bg-transparent border-b border-[#333] py-4 text-lg md:text-xl font-inter text-[#ededed] placeholder:text-gray-700 focus:outline-none focus:border-white transition-colors"
                            required 
                        />
                    </motion.div>

                    {/* Email Field */}
                    <motion.div custom={1} variants={formVariants} initial="hidden" animate="visible" className="group relative">
                        <label className="font-mono text-xs text-gray-100 uppercase tracking-widest mb-2 block">Your Email</label>
                        <input 
                            name="email"
                            type="email" 
                            placeholder="I won't spam you 😉" 
                            className="w-full bg-transparent border-b border-[#333] py-4 text-lg md:text-xl font-inter text-[#ededed] placeholder:text-gray-700 focus:outline-none focus:border-white transition-colors"
                            required 
                        />
                    </motion.div>

                    {/* Message Field */}
                    <motion.div custom={2} variants={formVariants} initial="hidden" animate="visible" className="group relative">
                        <label className="font-mono text-xs text-gray-100 uppercase tracking-widest mb-2 block">Your Message</label>
                        <textarea 
                            name="message"
                            rows={4}
                            placeholder="You can ask or share anything with me in here... 😊" 
                            className="w-full bg-transparent border-b border-[#333] py-4 text-lg md:text-xl font-inter text-[#ededed] placeholder:text-gray-700 focus:outline-none focus:border-white transition-colors resize-none"
                            required 
                        />
                    </motion.div>

                    {/* Submit Button */}
                    <motion.button
                        custom={3} 
                        variants={formVariants} 
                        initial="hidden" 
                        animate="visible"
                        type="submit"
                        disabled={status === "SUBMITTING"}
                        className="self-start mt-4 border border-[#333] px-10 py-4 rounded-full text-xs font-mono uppercase hover:bg-white hover:text-black transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {status === "SUBMITTING" ? "Sending..." : "Send Message →"}
                    </motion.button>
                    
                    {status === "ERROR" && (
                        <p className="text-red-500 font-mono text-xs mt-2">
                            Oops! Something went wrong. Please try again or email me directly.
                        </p>
                    )}

                </form>
             )}
        </div>

      </div>
    </main>
  );
}

// Helper Component for Social Links
function SocialLink({ href, label }: { href: string, label: string }) {
    return (
        <Link 
            href={href} 
            target="_blank"
            className="group flex items-center gap-4 text-gray-400 hover:text-white transition-colors w-max"
        >
            <span className="w-2 h-2 rounded-full bg-gray-600 group-hover:bg-green-500 transition-colors"></span>
            {label}
        </Link>
    )
}