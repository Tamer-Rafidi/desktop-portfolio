import React, { useState } from 'react';
import { Linkedin } from 'lucide-react';

const Window = ({ 
  window, 
  activeWindow, 
  onStartDragging, 
  onMinimize, 
  onMaximize, 
  onClose, 
  onSetActive,
  children 
}) => {
  const [screenWidth] = useState(window.innerWidth);

  const handleMouseDown = (e) => {
    if (e.target.closest('.window-controls')) return;
    onStartDragging(window.id, e);
  };

  if (window.minimized) return null;

  const getCenteredPosition = () => {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    return {
      left: Math.max(0, (viewportWidth - window.width) / 2),
      top: Math.max(40, (viewportHeight - window.height) / 2)
    };
  };

  const windowStyle = window.maximized 
    ? { top: '40px', left: 0, width: '100vw', height: 'calc(100vh - 88px)' }
    : screenWidth < 1200 
      ? { 
          ...getCenteredPosition(),
          width: `${window.width}px`, 
          height: `${window.height}px` 
        }
      : { 
          top: `${window.y}px`, 
          left: `${window.x}px`, 
          width: `${window.width}px`, 
          height: `${window.height}px` 
        };

  return (
    <div
      className={`absolute bg-black rounded border-2 border-green-400/50 shadow-2xl shadow-green-400/20 overflow-hidden font-mono ${
        activeWindow === window.id ? 'z-20 border-green-400' : 'z-10'
      }`}
      style={windowStyle}
      onClick={() => onSetActive(window.id)}
    >
      <div 
        className="flex items-center justify-between bg-gray-900 px-4 py-3 select-none border-b border-green-400/50"
        onMouseDown={handleMouseDown}
      >
        <div className="flex items-center space-x-3">
          <window.app.icon className={`w-4 h-4 ${window.app.color}`} />
          <span className="text-green-400 text-sm font-medium">{window.app.name}</span>
        </div>
        <div className="flex items-center space-x-2 window-controls">
          {window.id === 'resume' && (
            <a 
              href="https://drive.google.com/file/d/1FkCFh9o7XCdJAHC7sk5TJDE5betbd-eT/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 rounded hover:bg-green-400/20 flex items-center justify-center text-green-400 text-xs font-bold transition-colors border border-green-400/50 hover:border-green-400"
              title="View Resume PDF"
            >
              Open PDF
            </a>
          )}
          {window.id === 'email' && (
            <a 
              href="https://www.linkedin.com/in/tamerrafidi"
              target="_blank"
              rel="noopener noreferrer"
              className="w-24 h-7 rounded hover:bg-blue-400/20 flex items-center justify-center text-blue-400 text-xs font-bold transition-colors border border-blue-400/50 hover:border-blue-400 gap-1.5"
              title="Visit LinkedIn Profile"
            >
              <Linkedin size={16} />
              <span>LinkedIn</span>
            </a>
          )}
          <button 
            onClick={() => onMinimize(window.id)}
            className="w-6 h-6 rounded bg-yellow-600 hover:bg-yellow-500 flex items-center justify-center text-black text-sm font-bold transition-colors"
          >
            _
          </button>
          <button 
            onClick={() => onMaximize(window.id)}
            className="w-6 h-6 rounded bg-green-600 hover:bg-green-500 flex items-center justify-center text-black text-sm font-bold transition-colors"
          >
            □
          </button>
          <button 
            onClick={() => onClose(window.id)}
            className="w-6 h-6 rounded bg-red-600 hover:bg-red-500 flex items-center justify-center text-black text-sm font-bold transition-colors"
          >
            ×
          </button>
        </div>
      </div>
      <div className="h-full bg-black text-green-400 overflow-auto">
        {children}
      </div>
    </div>
  );
};

export default Window;