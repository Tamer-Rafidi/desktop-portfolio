import React, { useState } from 'react';
import { nodeData } from '../data/career';

const CareerApp = () => {
  const [selectedNode, setSelectedNode] = useState(null);

  return (
    <div className="p-6 h-full overflow-auto bg-gradient-to-b from-gray-900 to-black font-mono">
      <div className="mb-6">
        <div className="text-yellow-400 text-lg mb-2">CAREER PROGRESSION SKILL TREE</div>
        <div className="text-blue-400">Status: Software Engineer | Level: Junior</div>
        <div className="text-gray-400 text-sm">━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</div>
      </div>

      <div className="flex gap-6">
        <div className="flex-1 relative bg-black/40 rounded-lg border border-green-400/20 p-8 min-h-96">
          
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
            <defs>
              <linearGradient id="mainGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{ stopColor: "#3b82f6", stopOpacity: 0.8 }} />
                <stop offset="100%" style={{ stopColor: "#10b981", stopOpacity: 0.8 }} />
              </linearGradient>
              
              <linearGradient id="branchGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: "#10b981", stopOpacity: 0.6 }} />
                <stop offset="100%" style={{ stopColor: "#059669", stopOpacity: 0.8 }} />
              </linearGradient>

              <linearGradient id="TAGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: "#10b981", stopOpacity: 0.6 }} />
                <stop offset="100%" style={{ stopColor: "#e44dd7ff", stopOpacity: 0.8 }} />
              </linearGradient>

              <linearGradient id="FTGradientOne" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="20%" style={{ stopColor: "#10b981", stopOpacity: 0.8 }} />
                <stop offset="100%" style={{ stopColor: "#46b2e4ff", stopOpacity: 0.8 }} />
              </linearGradient>

              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            <path 
              d="M 154 95 Q 150 150 170 165" 
              stroke="url(#mainGradient)" 
              strokeWidth="4" 
              fill="none"
              filter="url(#glow)"
              strokeLinecap="round"
            />
            
            <path 
              d="M 170 165 Q 120 150 110 210" 
              stroke="url(#branchGradient)" 
              strokeWidth="3" 
              fill="none"
              filter="url(#glow)"
              strokeLinecap="round"
            />
            
            <path 
              d="M 170 165 Q 160 180 210 210 " 
              stroke="url(#branchGradient)" 
              strokeWidth="3" 
              fill="none"
              filter="url(#glow)"
              strokeLinecap="round"           
            />
            
            <path 
              d="M 170 165 Q 210 150 320 210 " 
              stroke="url(#TAGradient)" 
              strokeWidth="3" 
              fill="none"
              filter="url(#glow)"
              strokeLinecap="round"
              />
            
            <path 
              d="M 210 240 Q 220 280 160 325" 
              stroke="url(#FTGradientOne)" 
              strokeWidth="3" 
              fill="none"
              filter="url(#glow)"
              strokeLinecap="round"
            />

            <circle cx="170" cy="165" r="4" fill="#10b981" opacity="0.9"/>
          </svg>

          {/* Nodes */}
          <div className="absolute" style={{ left: '135px', top: '55px', zIndex: 10 }}>
            <div 
              className="w-10 h-10 bg-blue-600 rounded-full border-2 border-blue-400 flex items-center justify-center text-white font-bold cursor-pointer hover:scale-110 transition-all shadow-lg shadow-blue-400/30"
              onClick={() => setSelectedNode(selectedNode === 'education' ? null : 'education')}
            >
              CS
            </div>
          </div>

          <div className="absolute" style={{ left: '85px', top: '205px', zIndex: 10 }}>
            <div 
              className="w-10 h-10 bg-green-600 rounded border-2 border-green-400 flex items-center justify-center text-white font-bold cursor-pointer hover:scale-110 transition-all shadow-lg shadow-green-400/30"
              onClick={() => setSelectedNode(selectedNode === 'intern1' ? null : 'intern1')}
            >
              I1
            </div>
          </div>

          <div className="absolute" style={{ left: '185px', top: '205px', zIndex: 10 }}>
            <div 
              className="w-10 h-10 bg-green-600 rounded border-2 border-green-400 flex items-center justify-center text-white font-bold cursor-pointer hover:scale-110 transition-all shadow-lg shadow-green-400/30"
              onClick={() => setSelectedNode(selectedNode === 'intern2' ? null : 'intern2')}
            >
              I2
            </div>
          </div>

          <div className="absolute" style={{ left: '285px', top: '205px', zIndex: 10 }}>
            <div 
              className="w-10 h-10 bg-purple-600 rounded border-2 border-purple-400 flex items-center justify-center text-white font-bold cursor-pointer hover:scale-110 transition-all shadow-lg shadow-purple-400/30"
              onClick={() => setSelectedNode(selectedNode === 'ta' ? null : 'ta')}
            >
              TA
            </div>
          </div>

          <div className="absolute" style={{ left: '133px', top: '325px', zIndex: 10 }}>
            <div 
              className="w-12 h-12 bg-cyan-600 rounded-lg border-3 border-cyan-400 flex items-center justify-center text-white font-bold cursor-pointer hover:scale-110 transition-all shadow-xl shadow-cyan-400/40 animate-pulse"
              onClick={() => setSelectedNode(selectedNode === 'fulltime' ? null : 'fulltime')}
            >
              FT
            </div>
          </div>

        </div>

        {/* Details Panel */}
        <div className="w-80 bg-black/60 rounded-lg border border-gray-600/30 p-6">
          {selectedNode ? (
            <div className="animate-in slide-in-from-right-4 duration-200">
              <div className="mb-4">
                <div className={`inline-block px-2 py-1 rounded text-xs font-semibold mb-2 ${
                  nodeData[selectedNode].type === 'Education' ? 'bg-blue-600/20 text-blue-400 border border-blue-600/30' :
                  nodeData[selectedNode].type === 'Internship' ? 'bg-green-600/20 text-green-400 border border-green-600/30' :
                  nodeData[selectedNode].type === 'Teaching' ? 'bg-purple-600/20 text-purple-400 border border-purple-600/30' :
                  'bg-cyan-600/20 text-cyan-400 border border-cyan-600/30'
                }`}>
                  {nodeData[selectedNode].type}
                </div>
                <h3 className="text-white font-bold text-lg">{nodeData[selectedNode].title}</h3>
                <div className="text-gray-400 text-sm mb-3">
                  {nodeData[selectedNode].company} • {nodeData[selectedNode].period}
                </div>
              </div>
              
              <div className="mb-4">
                <div className="text-gray-300 text-sm leading-relaxed">
                  {nodeData[selectedNode].description}
                </div>
              </div>

              <div className="mb-4">
                <div className="text-gray-400 text-xs font-semibold mb-2">SKILLS & TECHNOLOGIES</div>
                <div className="flex flex-wrap gap-1">
                  {nodeData[selectedNode].skills.map((skill, index) => (
                    <span key={index} className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded text-xs border border-gray-600/30">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-gray-400 text-xs font-semibold mb-2">KEY ACHIEVEMENTS</div>
                <ul className="text-gray-300 text-xs space-y-1">
                  {nodeData[selectedNode].achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-400 mr-2">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <div className="text-center text-gray-500">
              <div className="text-4xl mb-4">👆</div>
              <div className="text-sm">Click on a position to see detailed information</div>
            </div>
          )}
        </div>
      </div>

      {/* Stats Panel */}
      <div className="mt-6 bg-black/50 border border-green-400/30 rounded p-4">
        <div className="text-green-400 font-bold mb-3">PROGRESSION STATS</div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div>
            <div className="text-gray-400">Experience</div>
            <div className="text-cyan-400 font-bold">2+ Years</div>
          </div>
          <div>
            <div className="text-gray-400">Roles Completed</div>
            <div className="text-green-400 font-bold">4</div>
          </div>
          <div>
            <div className="text-gray-400">Skills Acquired</div>
            <div className="text-yellow-400 font-bold">12+</div>
          </div>
          <div>
            <div className="text-gray-400">Current Status</div>
            <div className="text-cyan-400 font-bold">Deployed</div>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-4 flex flex-wrap gap-4 text-xs">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
          <span className="text-blue-400">Education</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-green-600 rounded"></div>
          <span className="text-green-400">Internships</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-purple-600 rounded"></div>
          <span className="text-purple-400">Teaching</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-cyan-600 rounded-lg"></div>
          <span className="text-cyan-400">Full-Time</span>
        </div>
      </div>
    </div>
  );
};

export default CareerApp;