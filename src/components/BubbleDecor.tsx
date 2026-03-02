import React from 'react';
interface BubbleDecorProps {
  variant?: 'light' | 'orange';
  className?: string;
}
export function BubbleDecor({
  variant = 'light',
  className = ''
}: BubbleDecorProps) {
  const bubbleClass =
  variant === 'light' ?
  'bg-white/15 border border-white/20' :
  'bg-orange-200/20 border border-orange-200/30';
  const bubbles = [
  {
    size: 'w-16 h-16',
    top: '80%',
    left: '5%',
    delay: '0s',
    duration: '6s'
  },
  {
    size: 'w-8  h-8',
    top: '90%',
    left: '15%',
    delay: '1.5s',
    duration: '7s'
  },
  {
    size: 'w-24 h-24',
    top: '85%',
    left: '25%',
    delay: '0.8s',
    duration: '9s'
  },
  {
    size: 'w-6  h-6',
    top: '88%',
    left: '38%',
    delay: '2.2s',
    duration: '5.5s'
  },
  {
    size: 'w-12 h-12',
    top: '82%',
    left: '50%',
    delay: '0.3s',
    duration: '8s'
  },
  {
    size: 'w-20 h-20',
    top: '87%',
    left: '62%',
    delay: '1.8s',
    duration: '7.5s'
  },
  {
    size: 'w-10 h-10',
    top: '91%',
    left: '73%',
    delay: '0.6s',
    duration: '6.5s'
  },
  {
    size: 'w-28 h-28',
    top: '84%',
    left: '82%',
    delay: '2.5s',
    duration: '10s'
  },
  {
    size: 'w-7  h-7',
    top: '89%',
    left: '92%',
    delay: '1.1s',
    duration: '5s'
  },
  {
    size: 'w-14 h-14',
    top: '86%',
    left: '45%',
    delay: '3s',
    duration: '8.5s'
  },
  {
    size: 'w-9  h-9',
    top: '93%',
    left: '58%',
    delay: '0.4s',
    duration: '6s'
  },
  {
    size: 'w-5  h-5',
    top: '90%',
    left: '70%',
    delay: '2s',
    duration: '7s'
  }];

  return (
    <>
      <style>{`
        @keyframes bubble-rise {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          85% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(-110vh) scale(0.8);
            opacity: 0;
          }
        }
        @keyframes bubble-wobble {
          0%, 100% { margin-left: 0px; }
          25%       { margin-left: 12px; }
          75%       { margin-left: -12px; }
        }
      `}</style>
      <div
        className={`absolute inset-0 overflow-hidden pointer-events-none select-none ${className}`}>

        {bubbles.map((b, i) =>
        <div
          key={i}
          className={`absolute rounded-full ${b.size} ${bubbleClass}`}
          style={{
            top: b.top,
            left: b.left,
            animation: `bubble-rise ${b.duration} ${b.delay} infinite linear, bubble-wobble ${b.duration} ${b.delay} infinite ease-in-out`
          }} />

        )}
      </div>
    </>);

}