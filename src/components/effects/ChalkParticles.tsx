import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  life: number;
  maxLife: number;
}

const ChalkParticles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const mousePos = useRef({ x: 0, y: 0 });

  const createParticle = (x: number, y: number): Particle => ({
    x,
    y,
    size: Math.random() * 3 + 1,
    speedX: Math.random() * 2 - 1,
    speedY: Math.random() * 2 - 1,
    opacity: Math.random() * 0.5 + 0.3,
    life: 0,
    maxLife: Math.random() * 100 + 50,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      
      // Add particles on mouse move
      if (Math.random() < 0.1) {
        for (let i = 0; i < 2; i++) {
          particles.current.push(createParticle(e.clientX, e.clientY));
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Add random particles
      if (Math.random() < 0.05 && particles.current.length < 50) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        particles.current.push(createParticle(x, y));
      }

      // Update and draw particles
      particles.current = particles.current.filter(p => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.life++;
        
        // Fade out as they age
        const normalizedLife = Math.min(p.life / p.maxLife, 1);
        const opacity = p.opacity * (1 - normalizedLife);
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(245, 245, 245, ${opacity})`;
        ctx.fill();
        
        return p.life < p.maxLife;
      });

      requestAnimationFrame(animate);
    };

    // Initialize
    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 chalk-dust"
    />
  );
};

export default ChalkParticles;