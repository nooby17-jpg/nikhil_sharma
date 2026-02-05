"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface ProjectProps {
  id: string;
  title: string;
  tech: string;
  image: string;
}

export default function ProjectCard({ id, title, tech, image }: ProjectProps) {
  return (
    <motion.div 
      // Changed aspect ratio for mobile (video) vs desktop (4/3)
      className="group relative w-full aspect-video md:aspect-[4/3] border-b border-[#333] md:border-r overflow-hidden cursor-pointer"
      initial="initial"
      whileHover="hover"
      whileTap="hover" // Ensures effect works on mobile tap
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-[#0a0a0a]">
        <motion.div
            variants={{
                initial: { opacity: 0.4, scale: 1.1, filter: "grayscale(100%)" }, // Increased base opacity for mobile visibility
                hover: { opacity: 0.8, scale: 1, filter: "grayscale(0%)" }
            }}
            transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
            className="w-full h-full relative"
        >
             <Image src={image} alt={title} fill className="object-cover" />
        </motion.div>
      </div>

      {/* Content Layer */}
      <div className="absolute inset-0 z-10 p-6 md:p-8 flex flex-col justify-between pointer-events-none mix-blend-difference text-white">
        <div className="flex justify-between w-full font-oswald text-xl md:text-2xl uppercase">
          <span className="group-hover:translate-x-2 transition-transform duration-500">{title}</span>
          <span>{id}</span>
        </div>
        
        <div className="overflow-hidden">
            <motion.div 
                variants={{
                    initial: { y: "100%" },
                    hover: { y: 0 }
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="font-mono text-xs md:text-sm tracking-tighter"
            >
                {tech}
            </motion.div>
        </div>
      </div>
    </motion.div>
  );
}