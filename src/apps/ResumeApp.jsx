import React from 'react';
import '../styles/animations.css';

const ResumeApp = () => {
  return (
    <div className="h-full bg-black text-green-400 font-mono overflow-auto">
      <style>{`
        
        
        @keyframes scan {
          0% { transform: translate(25%, 25%) rotate(0deg); }
          100% { transform: translate(25%, 25%) rotate(360deg); }
        }
        
        @keyframes glitch-1 {
        0% {
          clip: rect(0, 9999px, 0, 0);
          transform: translate(0);
        }
        10% {
          clip: rect(10px, 9999px, 50px, 0);
          transform: translate(-5px, -5px);
        }
        20% {
          clip: rect(20px, 9999px, 40px, 0);
          transform: translate(5px, 5px);
        }
        30% {
          clip: rect(30px, 9999px, 60px, 0);
          transform: translate(-5px, 5px);
        }
        40% {
          clip: rect(40px, 9999px, 30px, 0);
          transform: translate(5px, -5px);
        }
        50% {
          clip: rect(50px, 9999px, 20px, 0);
          transform: translate(0);
        }
        100% {
          clip: rect(0, 9999px, 0, 0);
          transform: translate(0);
        }
      }

      @keyframes glitch-2 {
        0% {
          clip: rect(0, 9999px, 0, 0);
          transform: translate(0);
        }
        10% {
          clip: rect(15px, 9999px, 45px, 0);
          transform: translate(5px, 5px);
        }
        20% {
          clip: rect(25px, 9999px, 35px, 0);
          transform: translate(-5px, -5px);
        }
        30% {
          clip: rect(35px, 9999px, 55px, 0);
          transform: translate(5px, -5px);
        }
        40% {
          clip: rect(45px, 9999px, 25px, 0);
          transform: translate(-5px, 5px);
        }
        50% {
          clip: rect(55px, 9999px, 15px, 0);
          transform: translate(0);
        }
        100% {
          clip: rect(0, 9999px, 0, 0);
          transform: translate(0);
        }
      }
      `}</style>

      <div className="p-5 max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="border-2 border-green-400 p-4 mb-5 bg-green-400/5 relative overflow-hidden firmware-scan">
          <h1 className="text-lg font-bold text-center mb-3 text-shadow glitch relative" data-text="FIRMWARE DUMP ANALYSIS">
            FIRMWARE DUMP ANALYSIS
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-4 text-xs">
            <div className="space-y-1">
              <div>FILE: TAMER_RAFIDI_CORE_v3.0.bin</div>
              <div>SIZE: 8,192 KB (Professional Experience)</div>
              <div>ARCH: x64_ENGINEERING_HYBRID</div>
              <div>COMPILED: Sept 2020 - Apr 2025</div>
            </div>
            <div className="space-y-1">
              <div>CHECKSUM: 0x4B8FA3D1 (Verified)</div>
              <div>SECURITY: McMaster_Certified + Industry_Hardened</div>
              <div>STATUS: <span className="animate-pulse">DEPLOYED</span></div>
              <div>NEXT_UPDATE: Continuous_Integration</div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-5 text-xs text-green-300">
            <span>COMM_PORT: 905-330-0279</span>
            <span>EMAIL_BUFFER: tamer.rafidi10@gmail.com</span>
            <span>LINKEDIN_API: /in/tamerrafidi</span>
            <span>GITHUB_REPO: /Tamer-Rafidi</span>
          </div>
        </div>

        {/* Education Section */}
        <div className="border border-green-300 mb-4 bg-green-300/2">
          <div className="bg-gray-900 p-2 border-b border-green-300 font-medium flex justify-between items-center text-sm">
            <span>MEMORY SEGMENT: EDUCATION_BLOCK</span>
            <span className="text-gray-500 text-xs">0x0000-0x0FFF</span>
          </div>
          <div className="p-3">
            <div className="space-y-1 text-xs font-mono">
              <div className="flex">
                <span className="text-gray-500 w-16 mr-4">0x0000:</span>
                <span className="text-green-300 mr-4">4D 63 4D 61 73 74 65 72 20 55 6E 69 76 65 72 73</span>
                <span className="text-green-400 font-medium">McMaster Univers</span>
              </div>
              <div className="flex">
                <span className="text-gray-500 w-16 mr-4">0x0010:</span>
                <span className="text-green-300 mr-4">69 74 79 20 7C 20 43 6F 6D 70 75 74 65 72 20 45</span>
                <span className="text-green-400 font-medium">ity | Computer E</span>
              </div>
              <div className="flex">
                <span className="text-gray-500 w-16 mr-4">0x0020:</span>
                <span className="text-green-300 mr-4">6E 67 69 6E 65 65 72 69 6E 67 20 42 61 63 68 65</span>
                <span className="text-green-400 font-medium">ngineering Bache</span>
              </div>
              <div className="flex">
                <span className="text-gray-500 w-16 mr-4">0x0030:</span>
                <span className="text-green-300 mr-4">47 50 41 3A 20 33 2E 37 2F 34 2E 30 20 7C 20 44</span>
                <span className="text-green-400 font-medium">GPA: 3.7/4.0 | D</span>
              </div>
              <div className="flex">
                <span className="text-gray-500 w-16 mr-4">0x0040:</span>
                <span className="text-green-300 mr-4">65 61 6E 27 73 20 48 6F 6E 6F 72 20 4C 69 73 74</span>
                <span className="text-green-400 font-medium">ean's Honor List</span>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="border border-green-300 mb-4 bg-green-300/2">
          <div className="bg-gray-900 p-2 border-b border-green-300 font-medium flex justify-between items-center text-sm">
            <span>MEMORY SEGMENT: SKILL_REGISTRY</span>
            <span className="text-gray-500 text-xs">0x1000-0x1FFF</span>
          </div>
          <div className="p-3">
            <div className="space-y-3 text-xs font-mono">
              
              <div>
                <div className="text-green-300 mb-1">$ ls -la /skills/languages/</div>
                <div className="ml-4 space-y-0.5 text-green-400">
                  <div>-rwx------ python[5y]        tensorflow pandas numpy opencv</div>
                  <div>-rwx------ c_cpp[4y]          embedded systems optimization</div>
                  <div>-rwx------ systemverilog[2y]  quartus modelsim fpga</div>
                  <div>-rwx------ java[2y]           enterprise oop</div>
                  <div>-rw------- r[1y]              statistics analysis</div>
                  <div>-rwx------ matlab[2y]         signal_processing simulink</div>
                  <div>-rw------- sql[2y]            database queries</div>
                </div>
              </div>

              <div>
                <div className="text-green-300 mb-1">$ cat /proc/webstack</div>
                <div className="ml-4 space-y-0.5 text-cyan-400">
                  <div>HTML5: ████████████████████ 95% [responsive design]</div>
                  <div>CSS3:  ████████████████████ 90% [animations, grid, flexbox]</div>
                  <div>JS:    ███████████████████░ 85% [es6+, dom manipulation]</div>
                </div>
              </div>

              <div>
                <div className="text-green-300 mb-1">$ pip list --format=custom</div>
                <div className="ml-4 space-y-0.5 text-purple-400">
                  <div>tensorflow==2.x.x    # deep learning, neural networks</div>
                  <div>pandas==1.x.x        # data manipulation, analysis</div>
                  <div>numpy==1.x.x         # numerical computing, arrays</div>
                  <div>scikit-learn==1.x.x  # machine learning algorithms</div>
                  <div>matplotlib==3.x.x    # data visualization, plotting</div>
                  <div>scipy==1.x.x         # scientific computing</div>
                  <div>opencv==4.x.x        # computer vision, image processing</div>
                </div>
              </div>

              <div>
                <div className="text-green-300 mb-1">$ which --all tools</div>
                <div className="ml-4 space-y-0.5 text-yellow-400">
                  <div>/usr/bin/git         → version_control[3y] github_workflows</div>
                  <div>/opt/quartus/bin    → fpga_synthesis[2y] constraint_files</div>
                  <div>/usr/bin/pycharm   → python_ide[3y] debugging_profiling</div>
                  <div>/usr/bin/jupyter   → notebooks[3y] data_science</div>
                  <div>/opt/matlab/bin    → simulink[2y] model_based_design</div>
                  <div>/usr/bin/jira      → agile[2y] project_management</div>
                  <div>/bin/linux         → administration[2y] bash_scripting</div>
                  <div>/usr/bin/jenkins   → ci_cd[1y] automation_pipelines</div>
                  <div>/usr/bin/confluence → documentation[1y] collaboration</div>
                </div>
              </div>

              <div>
                <div className="text-green-300 mb-1">$ systemctl status methodologies</div>
                <div className="ml-4 space-y-0.5 text-blue-400">
                  <div>● agile.service       active (running) scrum kanban [2y]</div>
                  <div>● cicd.service        active (running) automation [1y]</div>
                  <div>● tdd.service         active (running) unit_testing [1y]</div>
                  <div>● code_review.service active (running) best_practices [2y]</div>
                </div>
              </div>

              <div className="border-t border-green-400/30 pt-3 mt-4">
                <div className="text-green-300 mb-1">$ df -h /skills/</div>
                <div className="ml-4 text-cyan-400">
                  <div>Filesystem    Size  Used Avail Use% Mounted on</div>
                  <div>/dev/brain   ∞TB   35+   ∞TB  ∞%   /skills</div>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Work Experience Section */}
        <div className="border border-green-300 mb-4 bg-green-300/2">
          <div className="bg-gray-900 p-2 border-b border-green-300 font-medium flex justify-between items-center text-sm">
            <span>MEMORY SEGMENT: WORK_EXPERIENCE_LOG</span>
            <span className="text-gray-500 text-xs">0x2000-0x2FFF</span>
          </div>
          <div className="p-3">
            <div className="space-y-1 text-xs font-mono mb-3">
              <div className="flex">
                <span className="text-gray-500 w-16 mr-4">0x2000:</span>
                <span className="text-green-300 mr-4">4D 44 41 20 53 70 61 63 65 20 7C 20 4A 75 6E 69</span>
                <span className="text-green-400 font-medium">MDA Space | Juni</span>
              </div>
              <div className="flex">
                <span className="text-gray-500 w-16 mr-4">0x2010:</span>
                <span className="text-green-300 mr-4">6F 72 20 53 6F 66 74 77 61 72 65 20 45 6E 67 69</span>
                <span className="text-green-400 font-medium">or Software Engi</span>
              </div>
              <div className="flex">
                <span className="text-gray-500 w-16 mr-4">0x2020:</span>
                <span className="text-green-300 mr-4">6E 65 65 72 20 7C 20 4D 61 79 20 32 30 32 35 20</span>
                <span className="text-green-400 font-medium">neer | May 2025 </span>
              </div>
              <div className="flex">
                <span className="text-gray-500 w-16 mr-4">0x2030:</span>
                <span className="text-green-300 mr-4">2D 20 50 72 65 73 65 6E 74 20 20 20 20 20 20 20</span>
                <span className="text-green-400 font-medium">- Present</span>
              </div>
            </div>
            
            <div className="text-green-400 text-sm space-y-1 mb-5">
              <div>• Python interface tools for AURORA PDU hardware testing & validation</div>
              <div>• EGSE software documentation for critical design review (CDR)</div>
            </div>

            <div className="space-y-1 text-xs font-mono mb-3">
              <div className="flex">
                <span className="text-gray-500 w-16 mr-4">0x2100:</span>
                <span className="text-green-300 mr-4">4D 44 41 20 53 70 61 63 65 20 7C 20 53 6F 66 74</span>
                <span className="text-green-400 font-medium">MDA Space | Soft</span>
              </div>
              <div className="flex">
                <span className="text-gray-500 w-16 mr-4">0x2110:</span>
                <span className="text-green-300 mr-4">77 61 72 65 20 45 6E 67 20 49 6E 74 65 72 6E 20</span>
                <span className="text-green-400 font-medium">ware Eng Intern </span>
              </div>
              <div className="flex">
                <span className="text-gray-500 w-16 mr-4">0x2120:</span>
                <span className="text-green-300 mr-4">7C 20 4A 61 6E 20 32 30 32 34 20 2D 20 4A 61 6E</span>
                <span className="text-green-400 font-medium">| Jan 2024 - Jan</span>
              </div>
              <div className="flex">
                <span className="text-gray-500 w-16 mr-4">0x2130:</span>
                <span className="text-green-300 mr-4">20 32 30 32 35 20 20 20 20 20 20 20 20 20 20 20</span>
                <span className="text-green-400 font-medium"> 2025</span>
              </div>
            </div>
            
            <div className="text-green-400 text-sm space-y-1 mb-5">
              <div>• Python post-processing API + LabVIEW → 95% reduction in manual test processing</div>
              <div>• Git workflow optimization → 60% decrease in merge conflicts</div>
              <div>• Sole software engineer on 8+ person multidisciplinary team</div>
            </div>

            <div className="space-y-1 text-xs font-mono mb-3">
              <div className="flex">
                <span className="text-gray-500 w-16 mr-4">0x2200:</span>
                <span className="text-green-300 mr-4">48 65 61 6C 74 68 63 61 72 65 20 53 79 73 74 65</span>
                <span className="text-green-400 font-medium">Healthcare Syste</span>
              </div>
              <div className="flex">
                <span className="text-gray-500 w-16 mr-4">0x2210:</span>
                <span className="text-green-300 mr-4">6D 73 20 52 26 41 20 7C 20 52 65 73 65 61 72 63</span>
                <span className="text-green-400 font-medium">ms R&A | Researc</span>
              </div>
              <div className="flex">
                <span className="text-gray-500 w-16 mr-4">0x2220:</span>
                <span className="text-green-300 mr-4">68 20 41 73 73 69 73 74 61 6E 74 20 7C 20 53 65</span>
                <span className="text-green-400 font-medium">h Assistant | Se</span>
              </div>
              <div className="flex">
                <span className="text-gray-500 w-16 mr-4">0x2230:</span>
                <span className="text-green-300 mr-4">70 74 20 2D 20 44 65 63 20 32 30 32 33 20 20 20 </span>
                <span className="text-green-400 font-medium">pt - Dec 2023</span>
              </div>
            </div>
            
            <div className="text-green-400 text-sm space-y-1">
              <div>• ML model forecasting gold/copper abundance to reduce exploration costs</div>
              <div>• EEG signal-to-game control ML system for stroke rehabilitation</div>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="border border-green-300 mb-4 bg-green-300/2">
          <div className="bg-gray-900 p-2 border-b border-green-300 font-medium flex justify-between items-center text-sm">
            <span>MEMORY SEGMENT: PROJECT_ARCHIVE</span>
            <span className="text-gray-500 text-xs">0x3000-0x3FFF</span>
          </div>
          <div className="p-3 space-y-4">
            <div>
              <div className="text-green-400 font-medium mb-2">AIRDJ | Real-Time Hand Tracking Audio Controller</div>
              <div className="flex text-xs font-mono mb-2">
                <span className="text-gray-500 w-16 mr-4">0x3000:</span>
                <span className="text-green-300 mr-4">4F 70 65 6E 43 56 20 7C 20 4D 65 64 69 61 70 69</span>
                <span className="text-green-400 font-medium">OpenCV | Mediapi</span>
              </div>
              <div className="text-green-300 text-sm space-y-1">
                <div>• Gesture-based control: volume, playback speed, low-pass filter cutoff</div>
                <div>• Live visual feedback with real-time UI overlays</div>
                <div>• Multithreaded audio playback with smooth performance</div>
              </div>
            </div>

            <div>
              <div className="text-green-400 font-medium mb-2">GROOVY.IO | AI-Powered DJ Web Application</div>
              <div className="flex text-xs font-mono mb-2">
                <span className="text-gray-500 w-16 mr-4">0x3100:</span>
                <span className="text-green-300 mr-4">46 75 6C 6C 2D 53 74 61 63 6B 20 7C 20 4F 70 65</span>
                <span className="text-green-400 font-medium">Full-Stack | Ope</span>
              </div>
              <div className="text-green-300 text-sm space-y-1">
                <div>• Analyzes tempo, energy, structure & lyrics for seamless transitions</div>
                <div>• OpenAI Whisper integration for smart chorus detection</div>
                <div>• Dynamic beat alignment & crossfading with real-time multithreading</div>
              </div>
            </div>

            <div>
              <div className="text-green-400 font-medium mb-2">IMAGE_DECOMPRESSOR | FPGA Hardware Reconstruction</div>
              <div className="flex text-xs font-mono mb-2">
                <span className="text-gray-500 w-16 mr-4">0x3200:</span>
                <span className="text-green-300 mr-4">56 65 72 69 6C 6F 67 20 46 50 47 41 20 7C 20 49</span>
                <span className="text-green-400 font-medium">Verilog FPGA | I</span>
              </div>
              <div className="text-green-300 text-sm space-y-1">
                <div>• Lossless 320x240 image decompression with YUV→RGB conversion</div>
                <div>• Optimized IDCT & upsampling: 1.25M cycles (IDCT), 273K/row (color)</div>
                <div>• Resource efficiency: ~76% multipliers, ~3,700 logic elements</div>
              </div>
            </div>
          </div>
        </div>

        {/* Status Section */}
        <div className="border border-green-300 mb-10 bg-green-300/2">
          <div className="bg-gray-900 p-2 border-b border-green-300 font-medium flex justify-between items-center text-sm">
            <span>SYSTEM STATUS & DIAGNOSTICS</span>
            <span className="text-gray-500 text-xs">0xFFFF</span>
          </div>
          <div className="p-4 text-center">
            <div className="text-green-400 text-base mb-3">
              FIRMWARE INTEGRITY: <span className="animate-pulse">VERIFIED ✓</span>
            </div>
            <div className="text-green-300 space-y-1">
              <div>Actively deployed in satellite systems</div>
              <div className="mt-3 text-xs text-gray-500">
                Last compiled: McMaster University | Currently running: MDA Space
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeApp;