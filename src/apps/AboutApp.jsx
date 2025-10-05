import React from 'react';
import LiveLog from '../components/LiveLog';

const AboutApp = () => {
  return (
    <div className="h-full bg-gradient-to-br from-gray-900 to-black text-green-400 font-mono overflow-hidden">
      <div className="bg-gray-800 border-b border-green-400/30 p-4">
        <div className="text-white text-sm mb-2">about.log - Live System Monitor</div>
        <div className="text-gray-500 text-xs">tail -f ~/life/about.log</div>
      </div>

      <div className="flex-1 p-5 overflow-y-auto h-full bg-gradient-to-b from-black/50 to-black">
        <div className="text-gray-500 mb-5 pb-4 border-b border-gray-700 text-sm">
          <div>📋 System Log Initialized - Monitoring life events...</div>
          <div>Process ID: 1337 | User: Tamer R | Session: active</div>
          <div>Log Level: ALL | Auto-scroll: ENABLED</div>
        </div>

        <LiveLog />
      </div>
    </div>
  );
};

export default AboutApp;