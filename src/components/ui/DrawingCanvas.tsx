import React, { useRef, useState, useEffect } from 'react';
import useSound from 'use-sound';

interface DrawingCanvasProps {
  width?: number;
  height?: number;
  className?: string;
}

const DrawingCanvas: React.FC<DrawingCanvasProps> = ({ 
  width = 320, 
  height = 240,
  className = '' 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [playWrite] = useSound('/sounds/chalk-click.mp3', { volume: 0.3 });
  const prevPoint = useRef<{x: number, y: number} | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas background to simulate blackboard
    ctx.fillStyle = 'rgba(42, 59, 76, 0.5)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Set chalk style
    ctx.strokeStyle = '#F5F5F5';
    ctx.lineWidth = 3;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
  }, []);

  const startDrawing = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDrawing(true);
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const rect = canvas.getBoundingClientRect();
    const x = ('touches' in e) 
      ? e.touches[0].clientX - rect.left 
      : e.clientX - rect.left;
    const y = ('touches' in e) 
      ? e.touches[0].clientY - rect.top 
      : e.clientY - rect.top;
    
    prevPoint.current = { x, y };
    playWrite();
  };

  const draw = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDrawing || !canvasRef.current || !prevPoint.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const rect = canvas.getBoundingClientRect();
    const x = ('touches' in e) 
      ? e.touches[0].clientX - rect.left 
      : e.clientX - rect.left;
    const y = ('touches' in e) 
      ? e.touches[0].clientY - rect.top 
      : e.clientY - rect.top;
    
    // Draw the line
    ctx.beginPath();
    ctx.moveTo(prevPoint.current.x, prevPoint.current.y);
    ctx.lineTo(x, y);
    ctx.stroke();
    
    // Add some dust particles
    addChalkDust(ctx, x, y);
    
    prevPoint.current = { x, y };
  };

  const addChalkDust = (ctx: CanvasRenderingContext2D, x: number, y: number) => {
    // Create a few chalk dust particles
    for (let i = 0; i < 3; i++) {
      const dustX = x + (Math.random() * 10 - 5);
      const dustY = y + (Math.random() * 10 - 5);
      const dustSize = Math.random() * 2 + 0.5;
      
      ctx.save();
      ctx.fillStyle = 'rgba(245, 245, 245, 0.5)';
      ctx.beginPath();
      ctx.arc(dustX, dustY, dustSize, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  };

  const stopDrawing = () => {
    setIsDrawing(false);
    prevPoint.current = null;
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    ctx.fillStyle = 'rgba(42, 59, 76, 0.5)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <div className="relative">
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        className={`drawing-canvas border-2 border-chalk-white border-opacity-30 rounded-lg ${className}`}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
        onTouchStart={startDrawing}
        onTouchMove={draw}
        onTouchEnd={stopDrawing}
      />
      <button
        onClick={clearCanvas}
        className="absolute bottom-2 right-2 bg-blackboard-dark bg-opacity-70 text-chalk-white py-1 px-3 rounded-md hover:bg-opacity-90 font-chalk text-sm"
      >
        Erase
      </button>
    </div>
  );
};

export default DrawingCanvas;