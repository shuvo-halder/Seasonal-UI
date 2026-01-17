
import React from 'react';
import { motion } from 'framer-motion';

interface WeatherEffectProps {
  type: 'sunny' | 'rain' | 'wind' | 'snow' | 'clear';
}

const WeatherEffect: React.FC<WeatherEffectProps> = ({ type }) => {
  if (type === 'sunny' || type === 'clear') return null;

  const count = type === 'rain' ? 80 : type === 'snow' ? 50 : 20;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
      {Array.from({ length: count }).map((_, i) => {
        const left = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = type === 'rain' ? 0.5 + Math.random() * 0.5 : 3 + Math.random() * 4;

        return (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${left}%`,
              top: '-5%',
              width: type === 'rain' ? '1px' : type === 'snow' ? '6px' : '30px',
              height: type === 'rain' ? '20px' : type === 'snow' ? '6px' : '2px',
              backgroundColor: type === 'rain' ? 'rgba(255,255,255,0.4)' : type === 'snow' ? 'white' : 'rgba(255,255,255,0.1)',
              borderRadius: type === 'snow' ? '50%' : '0%',
              filter: type === 'snow' ? 'blur(1px)' : 'none',
            }}
            animate={{
              y: ['0vh', '110vh'],
              x: type === 'wind' ? ['0vw', '20vw'] : type === 'snow' ? [0, Math.random() * 50 - 25] : 0,
              opacity: [0, 1, 0],
            }}
            transition={{
              duration,
              repeat: Infinity,
              delay,
              ease: "linear",
            }}
          />
        );
      })}
    </div>
  );
};

export default WeatherEffect;
