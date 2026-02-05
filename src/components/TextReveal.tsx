"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function TextReveal({ text, className }: { text: string, className?: string }) {
  const container = useRef(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      textRef.current,
      { y: "100%", opacity: 0 }, 
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 90%", 
          toggleActions: "play none none reverse",
        },
      }
    );
  }, { scope: container });

  return (
    <div ref={container} className={`overflow-hidden pb-2 pr-2 ${className}`}>
      <div ref={textRef} className="translate-y-full">
        {text}
      </div>
    </div>
  );
}