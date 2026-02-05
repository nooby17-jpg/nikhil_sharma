"use client";
import { useEffect, useRef } from "react";

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // --- CONFIGURATION ---
    // Adjust counts based on screen size for better performance/look
    const isMobile = width < 768;
    const STAR_COUNT = isMobile ? 60 : 120;
    const CLOUD_COUNT = isMobile ? 8 : 25; // More clouds on desktop, fewer on mobile
    const MOUSE_INFLUENCE = 0.05; // Gentle pull
    
    // --- INTERFACES ---
    interface Star {
      x: number;
      y: number;
      size: number;
      vx: number;
      vy: number;
      originalX: number;
      originalY: number;
      friction: number;
    }

    interface Cloud {
      x: number;
      y: number;
      radius: number;
      baseRadius: number;
      color: string;
      vx: number;
      vy: number;
      driftX: number; // Constant ambient drift
      driftY: number; // Constant ambient drift
      pulseSpeed: number;
      pulseOffset: number;
    }

    // --- INITIALIZATION ---
    const stars: Star[] = [];
    const clouds: Cloud[] = [];
    // Start mouse far off-screen so clouds don't clump in the middle initially
    const mouse = { x: -9999, y: -9999 }; 

    // 1. Initialize Stars
    for (let i = 0; i < STAR_COUNT; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      stars.push({
        x,
        y,
        originalX: x,
        originalY: y,
        size: Math.random() * 2,
        vx: 0,
        vy: 0,
        friction: 0.95 + Math.random() * 0.04
      });
    }

    // 2. Initialize Spaced-Out Clouds
    const cloudColors = [
      "rgba(90, 20, 160, 0.22)",   // Deep Purple
      "rgba(30, 60, 180, 0.18)",   // Royal Blue
      "rgba(140, 60, 200, 0.15)",  // Soft Violet
      "rgba(20, 180, 220, 0.10)",  // Cyan Glow
      "rgba(80, 80, 90, 0.15)"     // Deep Smoke
    ];

    for (let i = 0; i < CLOUD_COUNT; i++) {
      // Randomize radius for variety
      const radius = isMobile ? (150 + Math.random() * 200) : (300 + Math.random() * 400);
      
      clouds.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: radius,
        baseRadius: radius,
        color: cloudColors[Math.floor(Math.random() * cloudColors.length)],
        vx: 0,
        vy: 0,
        // Ambient constant drift (never stops)
        driftX: (Math.random() - 0.5) * 0.3, 
        driftY: (Math.random() - 0.5) * 0.3,
        pulseSpeed: 0.01 + Math.random() * 0.02,
        pulseOffset: Math.random() * Math.PI * 2
      });
    }

    // --- ANIMATION LOOP ---
    let time = 0;
    const animate = () => {
      time += 0.01;
      ctx.clearRect(0, 0, width, height);

      // --- DRAW CLOUDS (Background) ---
      ctx.globalCompositeOperation = "screen"; 

      clouds.forEach((cloud) => {
        // 1. Mouse Interaction (Smooth Pull)
        const dx = mouse.x - cloud.x;
        const dy = mouse.y - cloud.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        // Only react if mouse is relatively close (prevents global clumping)
        if (dist < width * 0.6) {
            cloud.vx += dx * 0.00002 * MOUSE_INFLUENCE;
            cloud.vy += dy * 0.00002 * MOUSE_INFLUENCE;
        }

        // 2. Physics & Movement
        // Apply friction to mouse velocity only, not drift
        cloud.vx *= 0.96; 
        cloud.vy *= 0.96;

        // Add constant ambient drift so they never stop moving
        cloud.x += cloud.vx + cloud.driftX;
        cloud.y += cloud.vy + cloud.driftY;

        // 3. Screen Wrap (Infinite Loop with Buffer)
        const buffer = cloud.radius;
        if (cloud.x < -buffer) cloud.x = width + buffer;
        if (cloud.x > width + buffer) cloud.x = -buffer;
        if (cloud.y < -buffer) cloud.y = height + buffer;
        if (cloud.y > height + buffer) cloud.y = -buffer;

        // 4. Pulse Effect
        const pulse = Math.sin(time * cloud.pulseSpeed + cloud.pulseOffset);
        const currentRadius = cloud.baseRadius + (pulse * 30);

        // Draw Cloud
        const gradient = ctx.createRadialGradient(
            cloud.x, cloud.y, 0, 
            cloud.x, cloud.y, currentRadius
        );
        gradient.addColorStop(0, cloud.color);
        gradient.addColorStop(1, "rgba(0,0,0,0)");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(cloud.x, cloud.y, currentRadius, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.globalCompositeOperation = "source-over"; 

      // --- DRAW STARS (Foreground) ---
      stars.forEach((star) => {
        const dx = mouse.x - star.x;
        const dy = mouse.y - star.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 200) {
          const angle = Math.atan2(dy, dx);
          const force = (200 - dist) / 200;
          star.vx -= Math.cos(angle) * force * 0.5;
          star.vy -= Math.sin(angle) * force * 0.5;
        }

        star.vx += (star.originalX - star.x) * 0.02;
        star.vy += (star.originalY - star.y) * 0.02;
        star.vx *= star.friction;
        star.vy *= star.friction;
        star.x += star.vx;
        star.y += star.vy;

        ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
        
        if (dist < 120) {
            ctx.strokeStyle = `rgba(255, 255, 255, ${1 - dist / 120})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(star.x, star.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
        }
      });

      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    // Resize Handler
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full pointer-events-none z-0" />;
}