import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
interface Bubble {
  id: number;
  size: number;
  x: number;
  y: number;
  duration: number;
  delay: number;
}
export function AnimatedBubbles() {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  useEffect(() => {
    // Generate random bubbles only on client side to avoid hydration mismatch
    // Reduced to 8 for performance when used multiple times
    const newBubbles = Array.from({
      length: 8
    }).map((_, i) => ({
      id: i,
      size: Math.random() * 60 + 20,
      x: Math.random() * 100,
      y: Math.random() * 100 + 100,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5 // 0s to 5s
    }));
    setBubbles(newBubbles);
  }, []);
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {bubbles.map((bubble) =>
      <motion.div
        key={bubble.id}
        className="absolute rounded-full bg-white"
        style={{
          width: bubble.size,
          height: bubble.size,
          left: `${bubble.x}%`,
          opacity: Math.random() * 0.15 + 0.05 // 0.05 to 0.2 opacity
        }}
        initial={{
          y: `${bubble.y}%`,
          x: 0
        }}
        animate={{
          y: '-20%',
          x: [0, Math.random() * 50 - 25, 0] // Gentle horizontal drift
        }}
        transition={{
          y: {
            duration: bubble.duration,
            repeat: Infinity,
            ease: 'linear',
            delay: bubble.delay
          },
          x: {
            duration: bubble.duration * 0.8,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: bubble.delay
          }
        }} />

      )}
    </div>);

}