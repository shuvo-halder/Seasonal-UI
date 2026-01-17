
import React from 'react';
import { motion } from 'framer-motion';
import { SeasonConfig } from '../types';

interface SeasonalTreeProps {
  config: SeasonConfig['tree'];
}

const SeasonalTree: React.FC<SeasonalTreeProps> = ({ config }) => {
  const { leafColor, trunkColor, hasLeaves, leafCount, hasFlowers, flowerColor, isDry } = config;

  // Generate random positions for leaves/flowers
  const elements = Array.from({ length: 60 }).map((_, i) => ({
    id: i,
    x: Math.sin(i * 1.5) * 120,
    y: Math.cos(i * 0.8) * 100 - 150,
    size: Math.random() * 20 + 15,
    rotate: Math.random() * 360,
    delay: Math.random() * 2,
  }));

  return (
    <div className="relative w-full h-full flex items-end justify-center">
      <svg viewBox="-200 -400 400 450" className="w-full h-full drop-shadow-2xl">
        {/* Trunk */}
        <motion.path
          d="M-30,50 Q-25,-100 0,-250 Q25,-100 30,50 L-30,50"
          fill={trunkColor}
          initial={false}
          animate={{ fill: trunkColor }}
          transition={{ duration: 1 }}
        />
        
        {/* Branches */}
        <motion.path
          d="M0,-150 L-80,-250 M0,-180 L80,-260 M0,-220 L-40,-320 M0,-220 L40,-320"
          stroke={trunkColor}
          strokeWidth="12"
          strokeLinecap="round"
          initial={false}
          animate={{ stroke: trunkColor }}
          transition={{ duration: 1 }}
        />

        {/* Leaves and Flowers */}
        <g>
          {elements.slice(0, leafCount).map((el) => (
            <React.Fragment key={el.id}>
              {hasLeaves && (
                <motion.ellipse
                  cx={el.x}
                  cy={el.y}
                  rx={el.size / 2}
                  ry={el.size / 1.5}
                  fill={leafColor}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ 
                    scale: 1, 
                    opacity: isDry ? 0.7 : 1,
                    rotate: el.rotate + (isDry ? 10 : 0)
                  }}
                  transition={{ duration: 0.8, delay: el.delay * 0.2 }}
                  className="cursor-pointer"
                  style={{ transformOrigin: `${el.x}px ${el.y}px` }}
                />
              )}
              {hasFlowers && el.id % 4 === 0 && (
                <motion.circle
                  cx={el.x + 10}
                  cy={el.y - 10}
                  r={el.size / 4}
                  fill={flowerColor}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1, delay: el.delay * 0.5 }}
                />
              )}
            </React.Fragment>
          ))}
        </g>
      </svg>
    </div>
  );
};

export default SeasonalTree;
