import React, { useState, useEffect } from 'react';

const AnimatedNameReveal = () => {
  const [showName, setShowName] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowName(true), 500);
    const timer2 = setTimeout(() => setShowTitle(true), 1500);
    const timer3 = setTimeout(() => setShowDescription(true), 2500);
    const timer4 = setTimeout(() => setAnimationComplete(true), 4000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  return (
    <div className="absolute" style={{ right: '125px', top: '200px', zIndex: 5 }}>
      <div className={`hologram-border rounded-lg p-6 min-w-80 relative overflow-hidden transition-all duration-1000 ${
        animationComplete ? 'opacity-100' : ''
      }`}>
        <div className="scan-line"></div>
        
        {showName && (
          <div className="mb-4">
            <div 
              className="glitch-text text-4xl mb-2"
              data-text="TAMER RAFIDI"
            >
              TAMER RAFIDI
            </div>
          </div>
        )}

        {showTitle && (
          <div className="mb-4">
            <div className="text-cyan-400 text-lg font-mono typing-cursor">
              SOFTWARE ENGINEER
            </div>
          </div>
        )}

        {showDescription && (
          <div className="space-y-2">
            <div className="text-green-300 text-sm">
              &gt;&gt; Computer Engineering Graduate
            </div>
            <div className="text-green-300 text-sm">
              &gt;&gt; Hardware & Software Specialist
            </div>
            <div className="text-green-300 text-sm">
              &gt;&gt; Barcelona Aficionado
            </div>
            <div className="text-gray-400 text-xs mt-4 border-t border-green-400/30 pt-2">
              STATUS: <span className="text-green-400 animate-pulse">DEPLOYED</span> | 
              LOCATION: <span className="text-cyan-400">QUEBEC, CA</span>
            </div>
          </div>
        )}

        <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-cyan-400"></div>
        <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-cyan-400"></div>
        <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-cyan-400"></div>
        <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-cyan-400"></div>
      </div>
    </div>
  );
};

export default AnimatedNameReveal;