import React from 'react';

const AppIcon = ({ app, index, onOpen }) => {
  const iconSize = 90;
  const startY = 60;
  const startX = 24;
  const maxHeight = window.innerHeight - 140;
  const iconsPerColumn = Math.floor(maxHeight / iconSize);
  
  const row = index % iconsPerColumn;
  const col = Math.floor(index / iconsPerColumn);
  
  return (
    <div 
      className={`absolute flex flex-col items-center justify-center w-20 h-20 rounded border 
        ${app.bgColor} hover:bg-green-400/20 hover:scale-105 hover:shadow-lg 
        hover:shadow-green-400/30 transition-all duration-300 group font-mono cursor-pointer`}
      style={{
        top: `${startY + (row * iconSize)}px`,
        left: `${startX + (col * 100)}px`
      }}
      onClick={() => onOpen(app.id)}
    >
      <div className={`w-10 h-10 rounded flex items-center justify-center mb-1 
        group-hover:scale-110 transition-transform duration-200 ${app.color}`}>
        <app.icon className="w-5 h-5 group-hover:drop-shadow-lg" />
      </div>
      <span className={`text-xs text-center leading-tight ${app.color} max-w-full truncate px-1 
        group-hover:text-green-300 transition-colors duration-200`}>
        {app.name}
      </span>
    </div>
  );
};

export default AppIcon;