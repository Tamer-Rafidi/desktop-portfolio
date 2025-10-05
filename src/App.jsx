import React, { useState, useEffect } from 'react';
import { Calculator, Mail, Globe, User, Briefcase, FileText, Terminal, Code, Database, Cpu, Wrench, Brain, GitBranch } from 'lucide-react';
import './styles/animations.css';

// Component imports
import AnimatedNameReveal from './components/AnimatedNameReveal';
import UserSelectScreen from './components/UserSelectScreen';
import MiniGame from './components/MiniGame';
import Window from './components/Window';
import AppIcon from './components/AppIcon';

// App imports
import ProjectsApp from './apps/ProjectsApp';
import SkillsApp from './apps/SkillsApp';
import AboutApp from './apps/AboutApp';
import ContactApp from './apps/ContactApp';
import ResumeApp from './apps/ResumeApp';
import CareerApp from './apps/CareerApp';

// Data imports
import { startLogAnimationOnce } from './data/logEntries';

// Start log animation once when module loads
startLogAnimationOnce();

const Desktop = () => {
  const [openWindows, setOpenWindows] = useState([]);
  const [activeWindow, setActiveWindow] = useState(null);
  const [time, setTime] = useState(new Date());
  const [bootText, setBootText] = useState('');
  const [showBootScreen, setShowBootScreen] = useState(true);
  const [showUserSelect, setShowUserSelect] = useState(false);
  const [showMiniGame, setShowMiniGame] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [gameState, setGameState] = useState({
    sequence: [],
    playerSequence: [],
    currentStep: 0,
    isShowingSequence: false,
    gameOver: false,
    won: false,
    attempts: 3,
    level: 1
  });
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalFocused, setTerminalFocused] = useState(false);
  const [dragState, setDragState] = useState({ isDragging: false, windowId: null, offsetX: 0, offsetY: 0 });
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(100);

  // Global mouse handlers for dragging
  useEffect(() => {
    const handleGlobalMouseMove = (e) => {
      if (!dragState.isDragging) return;
      
      const newX = e.clientX - dragState.offsetX;
      const newY = Math.max(40, e.clientY - dragState.offsetY);
      
      setOpenWindows(prev => prev.map(w => 
        w.id === dragState.windowId ? { ...w, x: newX, y: newY } : w
      ));
    };

    const handleGlobalMouseUp = () => {
      if (dragState.isDragging) {
        setDragState({ isDragging: false, windowId: null, offsetX: 0, offsetY: 0 });
      }
    };

    if (dragState.isDragging) {
      document.addEventListener('mousemove', handleGlobalMouseMove, { passive: false });
      document.addEventListener('mouseup', handleGlobalMouseUp, { passive: false });
      document.body.style.userSelect = 'none';
      
      return () => {
        document.removeEventListener('mousemove', handleGlobalMouseMove);
        document.removeEventListener('mouseup', handleGlobalMouseUp);
        document.body.style.userSelect = '';
      };
    }
  }, [dragState]);

  const startDragging = (windowId, e) => {
    const window = openWindows.find(w => w.id === windowId);
    if (!window) return;
    
    setActiveWindow(windowId);
    setDragState({
      isDragging: true,
      windowId: windowId,
      offsetX: e.clientX - window.x,
      offsetY: e.clientY - window.y
    });
    
    e.preventDefault();
    e.stopPropagation();
  };

  // Boot sequence effect
  useEffect(() => {
    const bootSequence = [
      'SYSTEM INITIALIZING...',
      'LOADING PORTFOLIO.EXE',
      'CONNECTING TO MAINFRAME...',
      'USER DATABASE FOUND',
      'ACCESS GRANTED'
    ];

    let currentLine = 0;
    const bootTimer = setInterval(() => {
      if (currentLine < bootSequence.length) {
        setBootText(prev => prev + bootSequence[currentLine] + '\n');
        currentLine++;
      } else {
        setTimeout(() => {
          setShowBootScreen(false);
          setShowUserSelect(true);
        }, 1000);
        clearInterval(bootTimer);
      }
    }, 500);

    return () => clearInterval(bootTimer);
  }, []);

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  // Screen size and zoom detection
  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 1024 || window.innerHeight < 700);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    const checkZoom = () => {
      const currentZoom = Math.round((window.outerWidth / window.innerWidth) * 100);
      setZoomLevel(currentZoom);
    };

    checkZoom();
    window.addEventListener('resize', checkZoom);
    return () => window.removeEventListener('resize', checkZoom);
  }, []);

  // User data
  const users = [
    {
      id: 'owner',
      name: 'Admin',
      username: 'root@portfolio',
      avatar: '🤖',
      bgColor: 'bg-red-500/20',
      borderColor: 'border-red-400',
      textColor: 'text-red-400',
      locked: true
    },
    {
      id: 'guest',
      name: 'Tamer R',
      username: 'rafidit@portfolio',
      avatar: '👤',
      bgColor: 'bg-green-500/20',
      borderColor: 'border-green-400',
      textColor: 'text-green-400',
      locked: false
    },
    {
      id: 'new',
      name: 'Create User',
      username: 'new@portfolio',
      avatar: '➕',
      bgColor: 'bg-cyan-500/20',
      borderColor: 'border-cyan-400',
      textColor: 'text-cyan-400',
      locked: false
    }
  ];

  // Apps configuration
  const apps = [
    { id: 'skills', name: 'skills.exe', command: 'skills', icon: Cpu, color: 'text-green-400', bgColor: 'bg-green-400/10 border-green-400/30' },
    { id: 'email', name: 'contact.sh', command: 'contact', icon: Mail, color: 'text-cyan-400', bgColor: 'bg-cyan-400/10 border-cyan-400/30' },
    { id: 'browser', name: 'projects.py', command: 'projects', icon: Code, color: 'text-yellow-400', bgColor: 'bg-yellow-400/10 border-yellow-400/30' },
    { id: 'about', name: 'about.log', command: 'about', icon: FileText, color: 'text-purple-400', bgColor: 'bg-purple-400/10 border-purple-400/30' },
    { id: 'resume', name: 'resume.pdf', command: 'resume', icon: Database, color: 'text-red-400', bgColor: 'bg-red-400/10 border-red-400/30' },
    { id: 'linkedin', name: 'career.sql', command: 'career', icon: Briefcase, color: 'text-blue-400', bgColor: 'bg-blue-400/10 border-blue-400/30' },
  ];

  // User selection handler
  const handleUserSelect = (user) => {
    if (user.locked) return;
    
    setSelectedUser(user);
    
    if (user.id === 'guest') {
      setTimeout(() => {
        setShowUserSelect(false);
      }, 500);
    } else if (user.id === 'new') {
      setTimeout(() => {
        setShowUserSelect(false);
        setShowMiniGame(true);
        initializeGame();
      }, 500);
    }
  };

  // Mini game functions
  const initializeGame = () => {
    const newSequence = [];
    for (let i = 0; i < 7; i++) {
      let nextColor;
      do {
        nextColor = Math.floor(Math.random() * 4);
      } while (i >= 2 && 
               newSequence[i-1] === nextColor && 
               newSequence[i-2] === nextColor);
      
      newSequence.push(nextColor);
    }
    
    setGameState({
      sequence: newSequence,
      playerSequence: [],
      currentStep: 0,
      isShowingSequence: true,
      gameOver: false,
      won: false,
      attempts: 3,
      level: 1
    });
    
    setTimeout(() => showSequence(newSequence), 1000);
  };

  const showSequence = (sequence) => {
    sequence.forEach((step, index) => {
      setTimeout(() => {
        const button = document.querySelector(`[data-sequence="${step}"]`);
        if (button) {
          button.classList.add('sequence-flash');
          setTimeout(() => button.classList.remove('sequence-flash'), 250);
        }
        
        if (index === sequence.length - 1) {
          setTimeout(() => {
            setGameState(prev => ({ ...prev, isShowingSequence: false }));
          }, 400);
        }
      }, (index + 1) * 450);
    });
  };

  const handleSequenceClick = (buttonIndex) => {
    if (gameState.isShowingSequence || gameState.gameOver) return;
    
    const newPlayerSequence = [...gameState.playerSequence, buttonIndex];
    const currentIndex = gameState.playerSequence.length;
    
    if (buttonIndex === gameState.sequence[currentIndex]) {
      if (newPlayerSequence.length === gameState.sequence.length) {
        setGameState(prev => ({ ...prev, won: true, gameOver: true }));
        setTimeout(() => {
          setShowMiniGame(false);
        }, 2000);
      } else {
        setGameState(prev => ({ ...prev, playerSequence: newPlayerSequence }));
      }
    } else {
      const newAttempts = gameState.attempts - 1;
      if (newAttempts <= 0) {
        setGameState(prev => ({ 
          ...prev, 
          gameOver: true, 
          won: false, 
          attempts: newAttempts 
        }));
      } else {
        setGameState(prev => ({ 
          ...prev, 
          playerSequence: [], 
          attempts: newAttempts,
          isShowingSequence: true
        }));
        setTimeout(() => showSequence(gameState.sequence), 1000);
      }
    }
  };

  const resetGame = () => {
    setShowMiniGame(false);
    setShowUserSelect(true);
    setSelectedUser(null);
  };

  // Terminal command handler
  const handleTerminalCommand = (e) => {
    if (e.key === 'Enter') {
      const command = terminalInput.trim().toLowerCase();
      const app = apps.find(a => a.command === command);
      if (app) {
        openApp(app.id);
      }
      setTerminalInput('');
    }
  };

  // Window management functions
  const openApp = (appId) => {
    if (!openWindows.find(w => w.id === appId)) {
      const windowDimensions = {
        width: 900,
        height: 650
      };

      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const x = viewportWidth < 1200 
        ? (viewportWidth - windowDimensions.width) / 2
        : Math.random() * 300 + 150;
      const y = viewportWidth < 1200
        ? (viewportHeight - windowDimensions.height) / 2
        : Math.random() * 200 + 80;

      const newWindow = {
        id: appId,
        app: apps.find(a => a.id === appId),
        x,
        y,
        width: windowDimensions.width,
        height: windowDimensions.height,
        minimized: false,
        maximized: false
      };
      setOpenWindows([...openWindows, newWindow]);
      setActiveWindow(appId);
    } else {
      setActiveWindow(appId);
    }
  };

  const closeWindow = (appId) => {
    setOpenWindows(openWindows.filter(w => w.id !== appId));
    if (activeWindow === appId) {
      setActiveWindow(openWindows.length > 1 ? openWindows[openWindows.length - 2].id : null);
    }
  };

  const minimizeWindow = (appId) => {
    setOpenWindows(openWindows.map(w => 
      w.id === appId ? { ...w, minimized: true } : w
    ));
    if (activeWindow === appId) {
      setActiveWindow(null);
    }
  };

  const restoreWindow = (appId) => {
    setOpenWindows(openWindows.map(w => 
      w.id === appId ? { ...w, minimized: false, maximized: false } : w
    ));
    setActiveWindow(appId);
  };

  const maximizeWindow = (appId) => {
    setOpenWindows(openWindows.map(w => 
      w.id === appId ? { ...w, maximized: !w.maximized } : w
    ));
  };

  // App content renderer
  const AppContent = ({ appId }) => {
    switch(appId) {
      case 'skills':
        return <SkillsApp />;
      case 'about':
        return <AboutApp />;
      case 'email':
        return <ContactApp />;
      case 'browser':
        return <ProjectsApp />;
      case 'linkedin':
        return <CareerApp />;
      case 'resume':
        return <ResumeApp />;
      default:
        return <div className="p-4 text-green-400">App not found</div>;
    }
  };

  // Boot screen
  if (showBootScreen) {
    return (
      <div className="h-screen bg-black flex items-center justify-center font-mono">
        <div className="text-green-400">
          <pre className="text-sm whitespace-pre-line">{bootText}</pre>
          <div className="animate-pulse mt-4">█</div>
        </div>
      </div>
    );
  }

  // Mini game screen
  if (showMiniGame) {
    return (
      <MiniGame 
        gameState={gameState}
        onSequenceClick={handleSequenceClick}
        onResetGame={resetGame}
      />
    );
  }

  // User select screen
  if (showUserSelect) {
    return (
      <UserSelectScreen 
        users={users}
        time={time}
        onUserSelect={handleUserSelect}
        selectedUser={selectedUser}
      />
    );
  }

  // Zoom warning screen
  if (zoomLevel !== 100) {
    return (
      <div className="h-screen bg-black flex items-center justify-center font-mono overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(90deg, transparent 95%, rgba(0, 255, 0, 0.1) 100%)`,
            backgroundSize: '20px 20px'
          }} />
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(0deg, transparent 95%, rgba(0, 255, 0, 0.1) 100%)`,
            backgroundSize: '20px 20px'
          }} />
        </div>

        <div className="text-center z-10 p-6">
          <div className="text-red-500 text-2xl mb-4 animate-pulse">⚠️ ZOOM LEVEL WARNING ⚠️</div>
          <div className="text-green-400 mb-6 space-y-2">
            <div>DISPLAY CALIBRATION REQUIRED</div>
            <div className="text-gray-500">━━━━━━━━━━━━━━━━━━━━━━━━━</div>
          </div>
          
          <div className="space-y-4 text-sm">
            <div className="text-gray-400">
              <div>CURRENT ZOOM: {zoomLevel}%</div>
              <div>REQUIRED: 100% (Default Browser Zoom)</div>
            </div>
            
            <div className="text-yellow-400">
              Please reset your browser zoom to 100%
            </div>
            
            <div className="text-xs text-gray-500 mt-4">
              Use CTRL + 0 to reset zoom (CMD + 0 on Mac)
            </div>
            
            <div className="text-green-400 text-xs animate-pulse mt-8">
              <div>[WAITING FOR ZOOM RESET]</div>
              <div className="mt-2">$ calibrate --zoom=100</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Small screen warning
  if (isSmallScreen) {
    return (
      <div className="h-screen bg-black flex items-center justify-center font-mono overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(90deg, transparent 95%, rgba(0, 255, 0, 0.1) 100%)`,
            backgroundSize: '20px 20px'
          }} />
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(0deg, transparent 95%, rgba(0, 255, 0, 0.1) 100%)`,
            backgroundSize: '20px 20px'
          }} />
        </div>

        <div className="text-center z-10 p-6">
          <div className="text-red-500 text-2xl mb-4 animate-pulse">⚠️ ACCESS DENIED ⚠️</div>
          <div className="text-green-400 mb-6 space-y-2">
            <div>SYSTEM REQUIREMENTS NOT MET</div>
            <div className="text-gray-500">━━━━━━━━━━━━━━━━━━━━━━━━━</div>
          </div>
          
          <div className="space-y-4 text-sm">
            <div className="text-gray-400">
              <div>DETECTED: {window.innerWidth}x{window.innerHeight}</div>
              <div>REQUIRED: MIN 1024px WIDTH and MIN 700px HEIGHT</div>
            </div>
            
            <div className="text-yellow-400">
              Please access this terminal from a laptop or desktop computer
            </div>
            
            <div className="text-green-400 text-xs animate-pulse mt-8">
              <div>[SWITCHING TO MOBILE VERSION COMING SOON]</div>
              <div className="mt-2">$ retry --device=desktop</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Main desktop
  return (
    <div 
      className="h-screen bg-black relative overflow-hidden font-mono" 
      style={{
        cursor: `url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M2 2 L2 14 L6 10 L10 14 L14 10 L2 2 Z" stroke="%2300ff00" stroke-width="1.5" fill="none"/></svg>') 2 2, auto`,
        z: 5
      }}
    >
      <div className="absolute inset-0 bg-black/40 z-0"></div>
      <div className="relative z-10 h-full">
        <style>{`
          * {
            cursor: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M2 2 L2 14 L6 10 L10 14 L14 10 L2 2 Z" stroke="%2300ff00" stroke-width="1.5" fill="none"/></svg>') 2 2, auto !important;
          }
        `}</style>

        <img 
          src="/terminal_pixelated_portrait_v2.png"
          alt="Terminal Portrait"
          className="absolute pointer-events-none"
          style={{
            width: '40%',
            height: 'auto',
            left: '25%',
            top: '350px',
            transform: 'translateY(-50%)',
            zIndex: 2,
            opacity: 0.7
          }}
        />

        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(90deg, transparent 95%, rgba(0, 255, 0, 0.1) 100%)`,
            backgroundSize: '20px 20px'
          }} />
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(0deg, transparent 95%, rgba(0, 255, 0, 0.1) 100%)`,
            backgroundSize: '20px 20px'
          }} />
        </div>

        <AnimatedNameReveal />

        <div className="absolute top-12 right-4 text-green-400/30 text-xs">
          {Array.from('01010110100101110010').map((char, i) => (
            <span key={i} className="animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}>
              {char}
            </span>
          ))}
        </div>

        {/* Terminal prompt */}
        <div 
          className={`absolute top-0 left-0 right-0 h-10 bg-gray-900 border-b border-green-400/50 flex items-center px-4 text-green-400 text-sm ${
            terminalFocused ? 'bg-gray-800' : ''
          }`}
          onClick={() => setTerminalFocused(true)}
        >
          <span className="text-cyan-400">rafidit@portfolio</span>
          <span className="text-white">:</span>
          <span className="text-blue-400">~/desktop</span>
          <span className="text-white">$ </span>
          <input
            type="text"
            value={terminalInput}
            onChange={(e) => setTerminalInput(e.target.value)}
            onKeyDown={handleTerminalCommand}
            onBlur={() => setTerminalFocused(false)}
            className="bg-transparent border-none outline-none flex-1 text-green-400"
            placeholder="Type command... (skills, contact, projects, about, resume, career)"
            autoFocus={terminalFocused}
          />
          <span className="animate-pulse">█</span>
        </div>

        {/* Desktop Icons */}
        {apps.map((app, index) => (
          <AppIcon key={app.id} app={app} index={index} onOpen={openApp} />
        ))}

        {/* Windows */}
        {openWindows.map(window => (
          <Window 
            key={window.id} 
            window={window}
            activeWindow={activeWindow}
            onStartDragging={startDragging}
            onMinimize={minimizeWindow}
            onMaximize={maximizeWindow}
            onClose={closeWindow}
            onSetActive={setActiveWindow}
          >
            <AppContent appId={window.id} />
          </Window>
        ))}

        {/* Taskbar */}
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gray-900 border-t-2 border-green-400/50 flex items-center px-4">
          <div className="flex items-center space-x-1">
            {openWindows.map(window => (
              <button
                key={window.id}
                onClick={() => window.minimized ? restoreWindow(window.id) : setActiveWindow(window.id)}
                className={`flex items-center space-x-2 px-3 py-1 rounded border transition-colors font-mono text-sm ${
                  activeWindow === window.id && !window.minimized
                    ? 'bg-green-400/20 border-green-400 text-green-400' 
                    : 'bg-gray-800 border-green-400/30 text-green-400 hover:bg-green-400/10'
                }`}
              >
                <window.app.icon className="w-4 h-4" />
                <span>{window.app.name}</span>
              </button>
            ))}
          </div>
          
          <div className="ml-auto text-green-400 text-sm">
            <span className="text-gray-500">[</span>
            {time.toLocaleTimeString('en-US', { 
              hour: '2-digit', 
              minute: '2-digit',
              hour12: false 
            })}
            <span className="text-gray-500">]</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desktop;