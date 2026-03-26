import React, { useRef, useEffect, useState } from 'react';

const CourseCard3D = ({ title, description, icon, delay }) => {
  const cardRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const rotateX = ((y - rect.height / 2) / rect.height) * 20;
      const rotateY = ((x - rect.width / 2) / rect.width) * 20;

      setRotation({ x: rotateX, y: rotateY });
    };

    const handleMouseLeave = () => {
      setRotation({ x: 0, y: 0 });
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="h-64 perspective cursor-pointer rounded-xl overflow-hidden"
      style={{
        transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) ${
          delay ? `translateY(${Math.sin(Date.now() / 1000 + delay) * 10}px)` : ''
        }`,
        transition: 'transform 0.1s ease-out',
        transformStyle: 'preserve-3d',
        animation: `float ${3 + delay * 0.5}s ease-in-out infinite`,
        animationDelay: `${delay * 0.2}s`,
      }}
    >
      <div
        className="relative w-full h-full p-6 rounded-xl border border-lightning-purple/50 bg-gradient-to-br from-lightning-dark to-lightning-black shadow-2xl overflow-hidden"
        style={{
          boxShadow: `0 0 30px rgba(99, 102, 241, 0.3), inset 0 0 30px rgba(99, 102, 241, 0.1)`,
        }}
      >
        {/* Animated background glow */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-lightning-purple/10 to-lightning-blue/10"
          style={{
            animation: 'pulse 3s ease-in-out infinite',
            animationDelay: `${delay * 0.2}s`,
          }}
        />

        {/* Lightning bolt accent */}
        <div
          className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-lightning-purple to-transparent opacity-20 rounded-full blur-2xl"
          style={{
            animation: `glow ${2 + delay}s ease-in-out infinite`,
            animationDelay: `${delay * 0.3}s`,
          }}
        />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-between">
          <div>
            <div className="text-4xl mb-4">{icon}</div>
            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          </div>
          <p className="text-sm text-lightning-cyan/80">{description}</p>
        </div>

        {/* Border glow effect */}
        <div
          className="absolute inset-0 rounded-xl pointer-events-none"
          style={{
            border: '2px solid transparent',
            backgroundImage: 'linear-gradient(rgba(99, 102, 241, 0.3), rgba(59, 130, 246, 0.3))',
            backgroundClip: 'padding-box',
            padding: '0',
          }}
        />

        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          @keyframes glow {
            0%, 100% { opacity: 0.2; transform: scale(1); }
            50% { opacity: 0.4; transform: scale(1.2); }
          }
        `}</style>
      </div>
    </div>
  );
};

export default CourseCard3D;
