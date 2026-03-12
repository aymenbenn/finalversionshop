import React from 'react';

interface AnimatedBubblesProps {
  className?: string;
}

export function AnimatedBubbles({ className = '' }: AnimatedBubblesProps) {
  const bubbles = [
    { size: 'w-16 h-16', left: '10%', delay: '0s', duration: '4s' },
    { size: 'w-12 h-12', left: '25%', delay: '0.5s', duration: '5s' },
    { size: 'w-20 h-20', left: '45%', delay: '1s', duration: '6s' },
    { size: 'w-10 h-10', left: '65%', delay: '1.5s', duration: '4.5s' },
    { size: 'w-14 h-14', left: '80%', delay: '2s', duration: '5.5s' },
    { size: 'w-8 h-8', left: '90%', delay: '2.5s', duration: '3.5s' },
  ];

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {bubbles.map((b, i) => (
        <div
          key={i}
          className={`absolute rounded-full ${b.size} bg-white/15 border border-white/20`}
          style={{
            bottom: '-100px',
            left: b.left,
            animation: `bubble-rise ${b.duration} ${b.delay} infinite linear, bubble-wobble ${b.duration} ${b.delay} infinite ease-in-out`,
          }}
        ></div>
      ))}

      <style>{`
        @keyframes bubble-rise {
          0% { transform: translateY(0) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
        }
        @keyframes bubble-wobble {
          0%, 100% { margin-left: 0px; }
          25% { margin-left: 12px; }
          75% { margin-left: -12px; }
        }
      `}</style>
    </div>
  );
}