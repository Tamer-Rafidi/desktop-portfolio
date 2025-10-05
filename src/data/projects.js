export const projects = [
  {
    id: 'image-decompressor',
    name: 'Image Decompressor',
    description: 'A tool for lossless image compression and decompression',
    language: 'SystemVerilog',
    languageColor: '#eed9b9ff',
    stars: 120,
    forks: 43,
    size: '49.3 MB',
    lastCommit: '9 months ago',
    topics: ['SystemVerilog', 'Quartus', 'ModelSim', 'Simulation', 'FPGA'],
    githubUrl: 'https://github.com/Tamer-Rafidi/Image-Decompressor',
    readme: `# Image Decompressor

Image Decompressor is a hardware-based project implemented in Verilog to perform lossless decoding, dequantization, inverse signal transformation, interpolation, and color space conversion. The system runs on FPGA hardware, using Quartus for simulation, timing analysis, and deployment, and is capable of reconstructing compressed images in real time.

## Features
- **Upsampling & Colour Space Conversion (M1)**: Converts YUV to RGB using interpolation and color space conversion with ~76% multiplier utilization.
- **Inverse Discrete Cosine Transform (M2)**: Implements IDCT with multiple DPRAMs to fetch, multiply, and store coefficients, reconstructing image data from frequency space to pixel space.
- **Lossless Decoding & Dequantization**: Supports reverse-engineering of compressed image data into raw pixel values.
- **SRAM & DPRAM Integration**: Efficient read/write operations to handle pixel blocks for real-time decompression.
- **Modular FSM Design**: Each stage (Fs, Ct, Cs, Ws) runs as an independent state machine for parallelism and clarity.

## Tech Stack
- Hardware: FPGA (Quartus, Verilog HDL)
- Components: Dual-Port RAMs (DPRAM), shift registers, multiplexers, counters, FIR multipliers
- Tools: Quartus Prime, ModelSim, Git

## Future Improvements
- Simplify lead-in states in M1 by reducing from 21 states to 14 for better efficiency.
- Optimize coefficient MUX design by cutting down unnecessary entries to reduce logic usage.
- Improve Calc S state to include clipping/scaling before storage, minimizing wasted register bits.
- Fully debug IDCT stage mismatches at block boundaries for 100% decompression accuracy.

## Performance Metrics
- Milestone 1 (Colour Space + Upsampling):  
  - ~273,600 clock cycles to complete per image row set.  
  - Achieved ~75% multiplier utilization.  
  - 1267 logic elements used.  

- Milestone 2 (IDCT):  
  - ~1,257,600 total clock cycles to complete for Y, U, and V segments. 
  - 2101 additional logic elements, bringing total usage to ~3698 (as estimated by Quartus).  

- Overall: ~3.4x increase in resource utilization from baseline, demonstrating the cost of IDCT operations in hardware.  


`
  },
  {
    id: 'Groovy.Io',
    name: 'Groovy.Io',
    description: 'AI-Powered DJ Web App',
    language: 'Python',
    languageColor: '#3572A5',
    stars: 892,
    forks: 156,
    size: '624 MB',
    lastCommit: '5 months ago',
    topics: ['Python', 'React', 'Flask', 'OpenAI Whisper'],
    githubUrl: 'https://github.com/Tamer-Rafidi/Groovy.Io/',
    readme: `# Groovy.Io

Groovy.io is an AI-driven DJ web app that intelligently analyzes two songs and finds the best transition points to mix them seamlessly. It's designed to mimic how a real DJ thinks about beat-matching, phrasing, energy, and flow. Creating smooth, musically-aware transitions in real time.

## Features
- **AI-Powered Song Analysis**: Analyzes tempo, energy, structure, and lyrical content to identify ideal transition points between two tracks.
- **Dynamic Crossfading**: Automatically aligns beats, keys, and bars for smooth transitions, mimicking professional DJ techniques.
- **Smart Chorus Detection**: Uses repeated lyric segments to detect and target chorus sections for impactful drop-ins.
- **Real-Time Processing**:Multithreaded design ensures fast analysis and mixing, even on large tracks.

## Tech Stack
- Audio Processing: Python, Rubber Band, PyDub, FFmpeg
- Backend: Flask, MongoDB
- Frontend: React, Javascript, HTML, Tailwind CSS
- AI Models: OpenAI Whisper for transcription

## Future Improvements
- Add web-based UI with drag-and-drop song input
- Integrate Spotify or YouTube audio support
- Enable manual override for DJs to choose transition points
- Improve transition/mixing algorithms
- Allow users to queue or upload a full playlist

## Getting Started
\`\`\`bash
git clone https://github.com/Tamer-Rafidi/Groovy.Io.git
cd Groovy.io
pip install -r requirements.txt
cd my-app
npm install
npm run dev
\`\`\`


`
  },
  {
    id: 'AirDJ',
    name: 'AirDJ',
    description: 'Hand-Tracking Audio Controller',
    language: 'Python',
    languageColor: '#3572A5',
    stars: 543,
    forks: 89,
    size: '8.66 MB',
    lastCommit: '1 day ago',
    topics: ['Python', 'OpenCV', 'Mediapipe', 'SciPy', 'NumPy'],
    githubUrl: 'https://github.com/Tamer-Rafidi/AirDJ',
    readme: `# AirDJ

AirDJ is a real-time hand-tracking audio controller that lets you manipulate music using intuitive hand gestures. By tracking your hands with a webcam, it enables dynamic control of volume, playback speed, and filter effects—all without touching any hardware. Perfect for live performance or interactive music experiments.

## Features
- **Gesture-Based Audio Control**: Control multiple aspects of audio in real time using simple hand movements.
- **Volume & Low-Pass Filter (Right Hand)**: Raise or lower your right hand to adjust volume Pinch thumb and index finger to modify low-pass filter cutoff
- **Playback Speed (Left Hand)**: Pinch thumb and index finger to control speed from slow-motion to fast-forward.
- **Live Visual Feedback**: Webcam feed displays circles, lines, and text overlays for all controlled parameters.
- **Real-Time Performance**: Multithreaded design ensures smooth audio playback, hand tracking, and UI updates simultaneously.

## Tech Stack
- Audio and Signal Processing: Python, Sounddevice, SciPy, NumPy, FFmpeg, Pydub
- Computer Vision & UI: Mediapipe, OpenCV

## Future Improvements
- Web or desktop GUI for audio selection
- Track additional gestures for effects like pan, reverb, or stutter
- Playlist support for continuous live performance

## Getting Started
\`\`\`bash
git clone https://github.com/Tamer-Rafidi/AirDJ.git
cd AirDJ
pip install -r requirements.txt
python main.py
\`\`\`


`

  },
  {
    id: 'Real-time-Software-Defined-Radio',
    name: 'Software Defined Radio',
    description: 'Implementation of a software-defined radio system for real-time reception of FM mono/stereo audio.',
    language: 'C++',
    languageColor: '#F34B7D',
    stars: 1247,
    forks: 203,
    size: '4.7 MB',
    lastCommit: '2 years ago',
    topics: ['C++', 'Python', 'Raspberry Pi', 'SciPy', 'RF-Hardware'],
    githubUrl: 'https://github.com/Tamer-Rafidi/Real-time-Software-Defined-Radio',
    readme: `# Software Defined Radio

SDR FM Receiver is a software-defined radio system built on a Raspberry Pi 4 with an RF dongle for real-time reception of FM mono/stereo audio and RDS (Radio Data System) data. It replaces traditional radio hardware components with flexible, reconfigurable software to process and decode live radio signals.

## Features
- **FM Demodulation**: Extracts mono, stereo, and RDS sub-channels (0–100 kHz) from raw RF samples.
- **Mono Audio Processing**: Low-pass filtering and resampling for clear 48 kHz audio playback.
- **Stereo Audio Processing**: Uses PLL-based stereo pilot recovery, band-pass filtering, and resampling to separate left and right channels.
- **RDS Decoding**: Demodulates and extracts embedded digital information (station name, program ID, song metadata).
- **Resampler & FIR Filtering**: Efficient block processing with linear-phase FIR filters for clean and stable audio.
- **Real-Time Reception**: Processes I/Q samples from RF hardware and outputs live FM audio in real time.

## Tech Stack
- Hardware: Raspberry Pi 4, RTL-SDR dongle, antenna
- Languages: C++, Python
- Core DSP Components: FIR filters, PLL, resampling, FM demodulator
- Tools: Git, custom DSP implementations in C++/Python

## Future Improvements
- Add a user interface to display signal strength, station metadata, and song information
- Optimize runtime with multi-threading for simultaneous stereo and RDS processing
- Reduce memory usage by eliminating redundant vectors and allocations

## Performance Metrics
- 1111–1313 multiplications per output sample for mono processing (mode-dependent)
- +102 multiplications per sample for stereo processing
- Accurate RDS carrier recovery and symbol resampling achieved
- Stereo resampling and PLL runtime: ~6.4–10.2 ms per block depending on mode


`
  },
  {
    id: 'lidar-spatial-mapping',
    name: 'LIDAR Spatial Mapping',
    description: 'Real-time 3D mapping system using Lidar technology',
    language: 'C',
    languageColor: '#43494eff',
    stars: 456,
    forks: 67,
    size: '29.9 MB',
    lastCommit: '2 years ago',
    topics: ['C', 'C++', 'Assembly', 'Python', 'sensors'],
    githubUrl: 'https://github.com/Tamer-Rafidi/LIDAR-Spatial-Mapping',
    readme: `# LIDAR Spatial Mapping

Embedded Spatial Measurement System is a microcontroller-based project that integrates a time-of-flight sensor, stepper motor, and Python-based visualization to construct 3D spatial maps in real time. Built on the Texas Instruments MSP432E401Y microcontroller, the system demonstrates embedded hardware control, sensor integration, and PC-based data visualization.

## Features
- **Microcontroller (MSP432E401Y)**: ARM Cortex-M4F processor, 256KB SRAM, 12 MHz clock speed, programmed in C/C++ and Assembly.
- **Stepper Motor Control**: ULN2003 driver with 512 steps per rotation, 5–12V operating range, and LED step indicators.
- **Time-of-Flight Sensor**: VL53L1X sensor with up to 400 cm range, ±20 mm error margin, 50 Hz sampling rate, and I2C communication.
- **Data Communication**: I2C protocol between sensor and microcontroller; UART/USB link between microcontroller and PC at 115200 bps.
- **3D Visualization**: Python 3.8 with PySerial, NumPy, and Matplotlib to plot real-time distance data in x-y-z space.
- **System Control**: Onboard GPIO button toggle to start/stop data capture.

## Tech Stack
- Hardware: MSP432E401Y microcontroller, ULN2003 stepper driver, VL53L1X ToF sensor, Analog Discovery 2
- Programming Languages: C, C++, Assembly, Python
- Libraries: PySerial, NumPy, Matplotlib
- Tools: KEIL uVision5, Quartus Programmer, IDLE/Python IDE

## Future Improvements
- Increase visualization performance with GPU acceleration or optimized Python libraries.
- Improve ToF sampling speed beyond the 50 Hz limitation.
- Implement higher baud rate UART communication for faster data transfer.
- Enhance portability by integrating wireless communication (e.g., Bluetooth/Wi-Fi).
- Add multi-sensor support for full 3D spatial scanning instead of planar measurements.

## Performance Metrics
- **Stepper Motor**: 512 steps per rotation → 5.625° resolution (0.098 rad per step).
- **Sensor Accuracy**: ±20 mm ranging error, 400 cm max range.
- **Communication**: 115200 bps UART, I2C at 100 kHz between sensor and microcontroller.
- **Visualization**: Real-time updates with Z-axis depth increment of 0.1 units per scan.
- **Limitations**: ToF sensor maxes out at 50 Hz; FPU is 32-bit, slowing 64-bit operations; PC UART capped at 128 kbps.


`
  },
  {
    id: 'pacemaker',
    name: 'Pacemaker',
    description: 'Real-time software that implements a working pacemaker, with the use of Simulink and Python',
    language: 'MATLAB',
    languageColor: '#e16737',
    stars: 189,
    forks: 34,
    size: '7.11 MB',
    lastCommit: '2 years ago',
    topics: ['simulink', 'simulation', 'serial-communiation', 'medical', 'interactive'],
    githubUrl: 'https://github.com/Tamer-Rafidi/Pacemaker',
    readme: `# Pacemaker Simulator

'Pacemaker Simulator is a real-time embedded system that models and simulates how an actual pacemaker functions. Using Simulink, Python, and the FRDM K64F microcontroller, the system processes cardiac signals in real time and visualizes heart activity under multiple pacing modes.

## Features
- **Supported Pacemaker Modes**:
  - AOO – Asynchronous atrial pacing
  - VOO – Asynchronous ventricular pacing
  - AAI – Atrial demand pacing (paces atrium only if needed)
  - VVI – Ventricular demand pacing (paces ventricle only if needed)

- **Real-Time Data Flow**:
  - **Input**: DCM (Device Communication Module) simulates or streams cardiac signals.
  - **Processing**: FRDM K64F microcontroller receives signals, communicates with Simulink, and applies pacemaker logic in real time.
  - **Output**: Processed signals are displayed in **heartView**, a visualization tool for pacing and heart rhythm.

## Tech Stack
- **Simulink**: Models pacemaker algorithms and handles signal processing
- **Python**: Provides control scripts, integration, and data communication
- **FRDM K64F Board**: Embedded real-time processor and communication hub
- **heartView**: Visualization of cardiac activity and pacing response

## Future Improvements
- Add more advanced pacemaker modes (e.g., DDD, rate-responsive pacing)
- Improve real-time performance with optimized data handling
- Expand visualization features in heartView for detailed diagnostics
- Implement patient-specific parameter tuning
- Explore integration with biomedical datasets for validation

## Performance Metrics
- Fully functional support for AOO, VOO, AAI, and VVI pacing modes
- Real-time serial communication between DCM, K64F, and Simulink
- Stable heart rhythm visualization through heartView
- Demonstrated end-to-end pipeline from input signals → processing → output visualization.


`
  }
];