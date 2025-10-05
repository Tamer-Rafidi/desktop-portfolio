import React, { useState } from 'react';
import { projects } from '../data/projects';

const ProjectsApp = () => {
  const [currentView, setCurrentView] = useState('repos');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = projects.filter(project =>
    project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.topics.some(topic => topic.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setCurrentView('readme');
  };

  const handleBackToRepos = () => {
    setCurrentView('repos');
    setSelectedProject(null);
  };

  if (currentView === 'readme' && selectedProject) {
    return (
      <div className="h-full bg-gray-900 font-mono flex flex-col">
        <div className="bg-black px-4 py-2 border-b border-green-400/30 flex-shrink-0">
          <div className="flex items-center justify-between">
            <div className="text-green-400">
              <span className="text-cyan-400">dev@github</span>
              <span className="text-white">:</span>
              <span className="text-blue-400">~/{selectedProject.name}</span>
              <span className="text-white">$ cat README.md</span>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-green-600/20 hover:bg-green-600/40 border border-green-400/50 hover:border-green-400 text-green-400 hover:text-green-300 px-3 py-1 rounded transition-all duration-200 text-sm"
              >
                <span>📁</span>
                <span>[VIEW ON GITHUB]</span>
              </a>
              <button 
                onClick={handleBackToRepos}
                className="text-yellow-400 hover:text-yellow-300 transition-colors text-sm"
              >
                [← BACK TO REPOS]
              </button>
            </div>
          </div>
        </div>

        <div className="flex-1 p-6 overflow-auto"> 
          <div className="max-w-4xl">
            <pre className="text-green-400 text-sm whitespace-pre-wrap leading-relaxed">
              {selectedProject.readme}
            </pre>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full bg-gray-900 font-mono flex flex-col">
      <div className="bg-black px-3 py-1 border-b border-green-400/30 flex-shrink-0">
        <div className="text-green-400 text-sm">
          <span className="text-cyan-400">dev@github</span>
          <span className="text-white">:</span>
          <span className="text-blue-400">~/repositories</span>
          <span className="text-white">$ ls -la</span>
        </div>
      </div>

      <div className="bg-gray-800 border-b border-green-400/20 p-4 flex-shrink-0"> 
        <div className="flex items-center justify-between mb-4"> 
          <div className="text-green-400 text-base font-bold">
            &gt; SECURE_REPOSITORIES
          </div>
          <div className="text-cyan-400 text-sm">
            {filteredProjects.length} repositories found
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <div className="flex-1">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search repositories..."
              className="w-full bg-black border border-green-400/50 px-3 py-2 text-green-400 rounded focus:border-green-400 focus:outline-none text-sm"
            />
          </div>
          <div className="text-gray-400 text-sm">
            [CTRL+K]
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-auto">
        <div className="p-4"> 
          <div className="space-y-3"> 
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => handleProjectClick(project)}
                className="border border-green-400/30 rounded p-3 hover:bg-green-400/5 hover:border-green-400/50 transition-all duration-200 cursor-pointer group"
              >
                <div className="flex items-start justify-between mb-3"> 
                  <div className="flex items-center space-x-3"> 
                    <div className="text-cyan-400 font-bold text-base group-hover:text-cyan-300 transition-colors"> 
                      {project.name}
                    </div>
                    <div className="text-gray-500 text-sm">
                      Public
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 text-sm">
                    <div className="flex items-center space-x-1 text-yellow-400">
                      <span>★</span>
                      <span>{project.stars}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-blue-400">
                      <span>⑂</span>
                      <span>{project.forks}</span>
                    </div>
                  </div>
                </div>

                <div className="text-gray-300 text-sm mb-3">
                  {project.description}
                </div>

                <div className="flex items-center justify-between mb-3"> 
                  <div className="flex items-center space-x-3 text-xs">
                    <div className="flex items-center space-x-1">
                      <div 
                        className="w-2 h-2 rounded-full" 
                        style={{ backgroundColor: project.languageColor }}
                      ></div>
                      <span className="text-gray-400">{project.language}</span>
                    </div>
                    <div className="text-gray-500">
                      {project.size}
                    </div>
                    <div className="text-gray-500">
                      Updated {project.lastCommit}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2"> 
                  {project.topics.map((topic) => (
                    <span
                      key={topic}
                      className="bg-green-600/20 text-green-400 px-2 py-0.5 rounded text-xs border border-green-600/30" 
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-black border-t border-green-400/30 px-4 py-3 flex-shrink-0"> 
        <div className="flex items-center justify-between text-xs"> 
          <div className="text-gray-400">
            Total repositories: {projects.length} | Filtered: {filteredProjects.length}
          </div>
          <div className="text-green-400">
            [AUTHENTICATED] | [SECURE_CONNECTION]
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsApp;