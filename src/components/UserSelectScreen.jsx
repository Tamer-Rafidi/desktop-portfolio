import React from 'react';

const UserSelectScreen = ({ users, time, onUserSelect, selectedUser }) => {
  return (
    <div className="h-screen bg-black flex items-center justify-center font-mono relative overflow-hidden">
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

      <div className="text-center z-10">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-green-400 mb-4">PORTFOLIO SYSTEM</h1>
          <div className="text-green-400/80 text-sm">
            <div className="animate-pulse">SELECT USER PROFILE</div>
            <div className="text-gray-500 mt-2">━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</div>
          </div>
        </div>

        <div className="flex justify-center space-x-8">
          {users.map((user) => (
            <div
              key={user.id}
              onClick={() => onUserSelect(user)}
              className={`relative group ${user.locked ? 'cursor-not-allowed' : 'cursor-pointer'}`}
            >
              <div className={`w-32 h-40 rounded-lg border-2 ${user.borderColor} ${user.bgColor} 
                flex flex-col items-center justify-center transition-all duration-300
                ${!user.locked ? 'hover:scale-105 hover:shadow-lg hover:shadow-green-400/20' : 'opacity-50'}
                ${selectedUser?.id === user.id ? 'scale-105 shadow-lg shadow-green-400/30' : ''}`}
              >
                <div className={`text-4xl mb-3 ${user.locked ? 'grayscale' : ''}`}>
                  {user.avatar}
                </div>
                <div className={`text-sm font-bold ${user.textColor} mb-1`}>
                  {user.name}
                </div>
                <div className={`text-xs text-gray-400 text-center px-2`}>
                  {user.username}
                </div>
                
                {user.locked && (
                  <div className="absolute top-2 right-2 text-red-400 text-xs">
                    🔒
                  </div>
                )}

                {!user.locked && (
                  <div className={`absolute bottom-2 text-xs ${user.textColor} opacity-0 
                    group-hover:opacity-100 transition-opacity duration-200`}>
                    Click to enter
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-gray-500 text-xs">
          <div className="animate-pulse">SECURE LOGIN REQUIRED FOR ADMIN ACCESS</div>
          <div className="mt-2">Current Time: {time.toLocaleString()}</div>
        </div>
      </div>
    </div>
  );
};

export default UserSelectScreen;