import React from 'react';
import { Terminal, Cpu } from 'lucide-react';
import { skillCategories } from '../data/skills';

const SkillsApp = () => {
  const colorVars = {
    blue: '#3b82f6',
    green: '#10b981',
    purple: '#8b5cf6',
    orange: '#f97316',
    cyan: '#06b6d4'
  };

  return (
    <div className="h-full bg-gradient-to-br from-gray-900 via-black to-gray-800 text-green-400 font-mono overflow-auto">
      <style>{`
        .skill-category {
          transition: all 0.3s ease;
        }
        .skill-category:hover {
          transform: translateY(-2px);
        }
        .skill-category:hover .category-header {
          border-color: var(--category-color);
        }
        .skill-category:hover .category-icon {
          color: var(--category-color) !important;
          filter: drop-shadow(0 0 8px var(--category-color));
        }
        .skill-category:hover .category-title {
          color: var(--category-color) !important;
        }
        .skill-category.blue:hover {
          background: rgba(59, 130, 246, 0.1);
          border-color: rgba(59, 130, 246, 0.6);
          box-shadow: 0 10px 25px rgba(59, 130, 246, 0.2);
        }
        .skill-category.green:hover {
          background: rgba(16, 185, 129, 0.1);
          border-color: rgba(16, 185, 129, 0.6);
          box-shadow: 0 10px 25px rgba(16, 185, 129, 0.2);
        }
        .skill-category.purple:hover {
          background: rgba(139, 92, 246, 0.1);
          border-color: rgba(139, 92, 246, 0.6);
          box-shadow: 0 10px 25px rgba(139, 92, 246, 0.2);
        }
        .skill-category.orange:hover {
          background: rgba(249, 115, 22, 0.1);
          border-color: rgba(249, 115, 22, 0.6);
          box-shadow: 0 10px 25px rgba(249, 115, 22, 0.2);
        }
        .skill-category.cyan:hover {
          background: rgba(6, 182, 212, 0.1);
          border-color: rgba(6, 182, 212, 0.6);
          box-shadow: 0 10px 25px rgba(6, 182, 212, 0.2);
        }
        .skills-grid {
          columns: 2;
          column-gap: 1.5rem;
          column-fill: balance;
        }
        @media (max-width: 1280px) {
          .skills-grid {
            columns: 2;
          }
        }
        @media (max-width: 768px) {
          .skills-grid {
            columns: 1;
          }
        }
        .skill-category {
          break-inside: avoid;
          margin-bottom: 1.5rem;
          display: inline-block;
          width: 100%;
        }
      `}</style>

      <div className="border-b border-green-400/20 bg-black/50 p-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-green-400 mb-2 flex items-center justify-center gap-3">
            <Terminal className="text-cyan-400" />
            TECHNICAL ARSENAL
            <Cpu className="text-cyan-400" />
          </h1>
          <div className="text-gray-400">Software and Computer Engineer • Test Engineer </div>
          <div className="text-sm text-gray-500 mt-2">
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="skills-grid">
          {Object.entries(skillCategories).map(([categoryId, category]) => {
            const IconComponent = category.icon;
            
            return (
              <div
                key={categoryId}
                className={`skill-category ${category.color} relative rounded-lg border-2 bg-gray-900/50 border-gray-700 hover:border-gray-600`}
                style={{ '--category-color': colorVars[category.color] }}
              >
                <div className="category-header p-4 border-b border-gray-700">
                  <div className="flex items-center gap-3 mb-2">
                    <IconComponent 
                      size={24} 
                      className="category-icon text-gray-400 transition-all duration-300"
                    />
                    <h2 className="category-title text-lg font-bold text-white transition-all duration-300">
                      {category.title}
                    </h2>
                  </div>
                  <div className="text-xs text-gray-500">
                    {category.skills.length} skills
                  </div>
                </div>

                <div className="p-4 space-y-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between p-2 rounded"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-white">
                            {skill.name}
                          </span>
                          <span className="text-xs text-gray-500">
                            {skill.years}
                          </span>
                        </div>
                        <div className="text-xs text-gray-400 truncate">
                          {skill.specialty}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4 pb-12">
          <div className="bg-gray-900/50 border border-gray-700 rounded p-4 text-center">
            <div className="text-2xl font-bold text-blue-400">
              {Object.values(skillCategories).reduce((acc, cat) => acc + cat.skills.length, 0)}
            </div>
            <div className="text-xs text-gray-400">Total Skills</div>
          </div>
          <div className="bg-gray-900/50 border border-gray-700 rounded p-4 text-center">
            <div className="text-2xl font-bold text-cyan-400">5</div>
            <div className="text-xs text-gray-400">Domains</div>
          </div>
          <div className="bg-gray-900/50 border border-gray-700 rounded p-4 text-center">
            <div className="text-2xl font-bold text-purple-400">4+</div>
            <div className="text-xs text-gray-400">Years Experience</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsApp;