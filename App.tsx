
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSeason } from './hooks/useSeason';
import { useDayNight } from './hooks/useDayNight';
import SeasonalTree from './components/SeasonalTree';
import WeatherEffect from './components/WeatherEffect';
import Clock from './components/Clock';
import { SeasonType } from './types';

const App: React.FC = () => {
  const { currentSeason, setManualMonth, currentMonthIndex } = useSeason();
  const { isNight } = useDayNight();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  return (
    <div className={`relative h-screen w-screen transition-colors duration-1000 overflow-hidden text-white
      ${isNight ? 'bg-slate-950' : 'bg-blue-50'}`}>
      
      {/* Dynamic Background Sky */}
      <motion.div 
        className={`absolute inset-0 bg-gradient-to-b transition-all duration-1000 ${isNight ? currentSeason.nightSkyGradient : currentSeason.skyGradient}`}
        initial={false}
      />

      {/* Night Sky Elements */}
      <AnimatePresence>
        {isNight && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0"
          >
            {/* Stars */}
            {Array.from({ length: 50 }).map((_, i) => (
              <div 
                key={i} 
                className="absolute bg-white rounded-full"
                style={{
                  top: `${Math.random() * 60}%`,
                  left: `${Math.random() * 100}%`,
                  width: `${Math.random() * 2 + 1}px`,
                  height: `${Math.random() * 2 + 1}px`,
                  opacity: Math.random() * 0.7 + 0.3
                }}
              />
            ))}
            {/* Moon */}
            <div className="absolute top-12 right-12 w-20 h-20 bg-yellow-50 rounded-full blur-[1px] shadow-[0_0_50px_rgba(255,255,255,0.3)] opacity-90" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Day Sky Elements */}
      <AnimatePresence>
        {!isNight && currentSeason.weather === 'sunny' && (
          <motion.div 
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            className="absolute top-12 left-12 w-24 h-24 bg-yellow-400 rounded-full blur-[2px] shadow-[0_0_80px_rgba(252,211,77,0.8)]"
          />
        )}
      </AnimatePresence>

      {/* Weather Overlay */}
      <WeatherEffect type={currentSeason.weather} />

      {/* Main Content */}
      <main className="relative z-20 h-full w-full flex flex-col justify-between p-8 md:p-12">
        
        {/* Header Section */}
        <div className="flex justify-between items-start">
          <motion.div 
            key={currentSeason.type}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className={`transition-colors duration-1000 ${isNight ? 'text-white' : 'text-slate-800'}`}
          >
            <h2 className="text-xl md:text-2xl font-medium italic opacity-80">{currentSeason.bengaliName}</h2>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-2">{currentSeason.name}</h1>
            <p className="max-w-xs text-sm md:text-base opacity-70 font-light">
              Experience the rhythmic cycle of Bangladesh through our seasonal landscape.
            </p>
          </motion.div>

          <div className={`${isNight ? 'text-white' : 'text-slate-800'}`}>
            <Clock />
          </div>
        </div>

        {/* Tree Container */}
        <div className="flex-1 flex items-center justify-center -mb-24 md:-mb-32">
          <div className="w-full max-w-2xl aspect-square">
            <SeasonalTree config={currentSeason.tree} />
          </div>
        </div>

        {/* Bottom Controls */}
        <div className="flex justify-between items-end">
          <div className="flex flex-col gap-4">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`px-6 py-3 rounded-full font-semibold transition-all shadow-lg flex items-center gap-2
                ${isNight ? 'bg-white/10 text-white border border-white/20 hover:bg-white/20' : 'bg-slate-800 text-white hover:bg-slate-900'}`}
            >
              <span>{months[currentMonthIndex]}</span>
              <svg xmlns="http://www.w3.org/2000/svg" className={`w-4 h-4 transition-transform ${isMenuOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            </button>
            
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  className={`p-4 rounded-2xl grid grid-cols-3 md:grid-cols-4 gap-2 border shadow-2xl backdrop-blur-md
                    ${isNight ? 'bg-slate-900/80 border-white/10' : 'bg-white/80 border-slate-200'}`}
                >
                  {months.map((m, idx) => (
                    <button 
                      key={m}
                      onClick={() => { setManualMonth(idx); setIsMenuOpen(false); }}
                      className={`px-3 py-2 rounded-lg text-sm transition-colors
                        ${currentMonthIndex === idx 
                          ? 'bg-blue-500 text-white' 
                          : isNight ? 'text-white hover:bg-white/10' : 'text-slate-800 hover:bg-slate-100'}`}
                    >
                      {m.substring(0, 3)}
                    </button>
                  ))}
                  <button 
                    onClick={() => { setManualMonth(null); setIsMenuOpen(false); }}
                    className="col-span-full mt-2 py-2 text-xs font-bold uppercase tracking-widest text-center opacity-50 hover:opacity-100"
                  >
                    Reset to Real Time
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className={`text-right ${isNight ? 'text-white' : 'text-slate-800'} hidden md:block`}>
             <div className="text-xs uppercase tracking-widest font-bold opacity-40 mb-1">Status</div>
             <div className="flex items-center gap-2 font-medium">
                <span className={`w-2 h-2 rounded-full ${isNight ? 'bg-indigo-400 shadow-[0_0_8px_#818cf8]' : 'bg-orange-400 shadow-[0_0_8px_#fb923c]'}`}></span>
                {isNight ? 'Night Cycle Active' : 'Daylight Active'}
             </div>
          </div>
        </div>

      </main>

      {/* Ground Surface */}
      <motion.div 
        className={`absolute bottom-0 left-0 right-0 h-24 transition-colors duration-1000 blur-xl scale-110
          ${isNight ? 'bg-slate-900' : 'bg-white/40'}`}
        initial={false}
      />
    </div>
  );
};

export default App;
