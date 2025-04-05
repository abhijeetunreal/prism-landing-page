
import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  opacity: number;
}

const Particles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    
    // Particle settings
    const particleCount = 40;
    const particles: Particle[] = [];
    const colors = [
      "rgba(211, 228, 253, 0.7)", // mindful-blue
      "rgba(242, 252, 226, 0.7)", // mindful-green
      "rgba(229, 222, 255, 0.7)", // mindful-teal
      "rgba(254, 247, 205, 0.7)", // mindful-cream
    ];
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 10 + 2,
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.5 + 0.3,
      });
    }
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((particle) => {
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
        
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Bounce off edges
        if (particle.x > canvas.width || particle.x < 0) {
          particle.speedX *= -1;
        }
        
        if (particle.y > canvas.height || particle.y < 0) {
          particle.speedY *= -1;
        }
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);
  
  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none"
      style={{ opacity: 0.6 }}
    />
  );
};

export default Particles;
