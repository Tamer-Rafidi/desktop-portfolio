import React, { useState, useEffect } from 'react';
import { globalLogState, logUpdateListeners } from '../data/logEntries';

const LiveLog = () => {
  const [, forceUpdate] = useState({});

  useEffect(() => {
    const updateCallback = () => forceUpdate({});
    logUpdateListeners.add(updateCallback);
    
    return () => {
      logUpdateListeners.delete(updateCallback);
    };
  }, []);

  const getLevelColor = (level) => {
    switch (level) {
      case 'info': return 'text-blue-400';
      case 'success': return 'text-green-400';
      case 'warning': return 'text-yellow-400';
      case 'error': return 'text-red-400';
      case 'debug': return 'text-purple-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="pb-20">
      {globalLogState.displayedEntries.map((entry, index) => (
        <div 
          key={index} 
          className="log-entry"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <span className="text-gray-500 mr-4 min-w-[180px] font-light text-sm">
            {entry.timestamp}
          </span>
          <span className={`mr-3 font-medium min-w-[60px] text-sm ${getLevelColor(entry.level)}`}>
            [{entry.level.toUpperCase()}]
          </span>
          <span className="text-white flex-1">
            {entry.message}
            {entry.tags && entry.tags.map((tag, tagIndex) => (
              <span 
                key={tagIndex}
                className="bg-green-400/20 text-green-400 px-2 py-1 rounded text-xs ml-2 border border-green-400/30"
              >
                {tag}
              </span>
            ))}
          </span>
        </div>
      ))}

      {globalLogState.showCursor && (
        <div className="mt-5 text-gray-500">
          <span className="cursor">_</span> Monitoring for new events...
        </div>
      )}
    </div>
  );
};

export default LiveLog;