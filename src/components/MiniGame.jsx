import React from 'react';

const MiniGame = ({ gameState, onSequenceClick, onResetGame }) => {
  const buttons = [
    { id: 0, color: 'bg-red-500', hoverColor: 'hover:bg-red-400', name: 'RED', symbol: '◆' },
    { id: 1, color: 'bg-blue-500', hoverColor: 'hover:bg-blue-400', name: 'BLUE', symbol: '●' },
    { id: 2, color: 'bg-green-500', hoverColor: 'hover:bg-green-400', name: 'GREEN', symbol: '▲' },
    { id: 3, color: 'bg-yellow-500', hoverColor: 'hover:bg-yellow-400', name: 'YELLOW', symbol: '■' }
  ];

  return (
    <div className="h-screen bg-black flex items-center justify-center font-mono relative overflow-hidden">
      <style>{`
        .sequence-flash {
          animation: flash 0.25s ease-in-out;
        }
        @keyframes flash {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.1); box-shadow: 0 0 20px currentColor; }
        }
      `}</style>
      
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(90deg, transparent 95%, rgba(0, 255, 0, 0.1) 100%)`,
          backgroundSize: '20px 20px'
        }} />
      </div>

      <div className="text-center z-10 max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-red-400 mb-4">⚠️ SECURITY CHALLENGE ⚠️</h1>
          <div className="text-green-400 text-sm mb-2">
            <div>UNAUTHORIZED ACCESS DETECTED</div>
            <div>COMPLETE SEQUENCE TO BYPASS FIREWALL</div>
          </div>
          <div className="text-gray-400 text-sm">━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</div>
        </div>

        <div className="mb-6">
          <div className="text-yellow-400 mb-2">
            STATUS: {gameState.isShowingSequence ? 'ANALYZING PATTERN...' : 
                     gameState.gameOver ? (gameState.won ? 'ACCESS GRANTED' : 'ACCESS DENIED') : 
                     'AWAITING INPUT'}
          </div>
          <div className="text-cyan-400 text-sm">
            ATTEMPTS REMAINING: {gameState.attempts} | SEQUENCE LENGTH: {gameState.sequence.length}
          </div>
        </div>

        {gameState.gameOver ? (
          <div className="mb-8">
            {gameState.won ? (
              <div>
                <div className="text-green-400 text-xl mb-4">🎉 FIREWALL BYPASSED!</div>
                <div className="text-green-300 text-sm mb-4">Welcome to the system, new user...</div>
                <div className="text-gray-400 text-xs animate-pulse">Loading desktop environment...</div>
              </div>
            ) : (
              <div>
                <div className="text-red-400 text-xl mb-4">💀 SYSTEM LOCKDOWN</div>
                <div className="text-red-300 text-sm mb-4">Security breach detected. Access denied.</div>
                <button 
                  onClick={onResetGame}
                  className="bg-red-600 hover:bg-red-500 text-white px-6 py-2 rounded font-bold transition-colors"
                >
                  [RETRY]
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="mb-8">
            <div className="text-gray-400 text-sm mb-4">
              {gameState.isShowingSequence ? 
                'MEMORIZE THE SEQUENCE...' : 
                'REPEAT THE SEQUENCE BY CLICKING THE BUTTONS'
              }
            </div>
            
            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
              {buttons.map((button) => (
                <button
                  key={button.id}
                  data-sequence={button.id}
                  onClick={() => onSequenceClick(button.id)}
                  disabled={gameState.isShowingSequence || gameState.gameOver}
                  className={`w-24 h-24 rounded-lg ${button.color} ${button.hoverColor} 
                    flex flex-col items-center justify-center text-white font-bold
                    transition-all duration-200 transform hover:scale-105
                    disabled:opacity-50 disabled:cursor-not-allowed
                    border-2 border-transparent hover:border-white/30`}
                >
                  <div className="text-2xl mb-1">{button.symbol}</div>
                  <div className="text-xs">{button.name}</div>
                </button>
              ))}
            </div>

            <div className="mt-6 flex justify-center space-x-2">
              {gameState.sequence.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full border ${
                    index < gameState.playerSequence.length ? 'bg-green-400 border-green-400' : 'border-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        )}

        <div className="text-gray-500 text-xs">
          <div>HINT: Watch the pattern carefully and repeat it exactly</div>
          <div className="mt-2">⚡ NEURAL ENHANCEMENT PROTOCOL ACTIVE ⚡</div>
        </div>
      </div>
    </div>
  );
};

export default MiniGame;