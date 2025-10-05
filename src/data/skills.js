import { Code, Globe, Brain, Wrench, GitBranch } from 'lucide-react';

export const skillCategories = {
  languages: {
    title: "Programming Languages",
    icon: Code,
    color: "blue",
    skills: [
      { name: "Python", years: "4+", specialty: "Data Science & Automation" },
      { name: "SystemVerilog", years: "2+", specialty: "Hardware Verification" },
      { name: "C", years: "3+", specialty: "Systems Programming" },
      { name: "C++", years: "2+", specialty: "Performance Critical Apps" },
      { name: "Java", years: "2+", specialty: "Enterprise Applications" },
      { name: "R", years: "1+", specialty: "Statistical Analysis" },
      { name: "MATLAB", years: "2+", specialty: "Signal Processing" },
      { name: "SQL", years: "2+", specialty: "Database Management" }
    ]
  },
  web: {
    title: "Web Development",
    icon: Globe,
    color: "green",
    skills: [
      { name: "HTML", years: "3+", specialty: "Semantic Markup" },
      { name: "CSS", years: "3+", specialty: "Responsive Design" },
      { name: "JavaScript", years: "2+", specialty: "Interactive UIs" },
      { name: "React", years: "1+", specialty: "Frontend Framework" }
    ]
  },
  libraries: {
    title: "Python Libraries",
    icon: Brain,
    color: "purple",
    skills: [
      { name: "TensorFlow", years: "2+", specialty: "Deep Learning" },
      { name: "pandas", years: "3+", specialty: "Data Manipulation" },
      { name: "NumPy", years: "3+", specialty: "Numerical Computing" },
      { name: "scikit-learn", years: "2+", specialty: "Machine Learning" },
      { name: "Matplotlib", years: "2+", specialty: "Data Visualization" },
      { name: "PySerial", years: "1+", specialty: "Hardware Communication" },
      { name: "SciPy", years: "2+", specialty: "Scientific Computing" },
      { name: "OpenCV", years: "1+", specialty: "Computer Vision" }
    ]
  },
  tools: {
    title: "Development Tools",
    icon: Wrench,
    color: "orange",
    skills: [
      { name: "Git/GitHub", years: "3+", specialty: "Version Control" },
      { name: "Quartus", years: "2+", specialty: "FPGA Development" },
      { name: "ModelSim", years: "2+", specialty: "HDL Simulation" },
      { name: "PyCharm", years: "4+", specialty: "Python IDE" },
      { name: "VS Code", years: "4+", specialty: "Code Editor" },
      { name: "Jupyter", years: "3+", specialty: "Data Analysis" },
      { name: "Simulink", years: "1+", specialty: "Model-Based Design" },
      { name: "Jira", years: "2+", specialty: "Project Management" },
      { name: "Linux", years: "2+", specialty: "System Administration" },
      { name: "Microsoft Office", years: "5+", specialty: "Productivity Suite" },
      { name: "Confluence", years: "2+", specialty: "Documentation" }
    ]
  },
  methodologies: {
    title: "Methodologies & Practices",
    icon: GitBranch,
    color: "cyan",
    skills: [
      { name: "Agile", years: "2+", specialty: "Scrum & Kanban" },
      { name: "CI/CD", years: "1+", specialty: "DevOps Practices" },
      { name: "Test-Driven Development", years: "1+", specialty: "Quality Assurance" },
      { name: "Code Review", years: "2+", specialty: "Best Practices" }
    ]
  }
};

export const getColorClasses = (color, variant = 'default') => {
  const colors = {
    blue: {
      default: 'bg-blue-600 border-blue-400 text-blue-400',
      light: 'bg-blue-600/10 border-blue-400/30 text-blue-400',
      accent: 'text-blue-400',
      glow: 'shadow-lg shadow-blue-400/20'
    },
    green: {
      default: 'bg-green-600 border-green-400 text-green-400',
      light: 'bg-green-600/10 border-green-400/30 text-green-400',
      accent: 'text-green-400',
      glow: 'shadow-lg shadow-green-400/20'
    },
    purple: {
      default: 'bg-purple-600 border-purple-400 text-purple-400',
      light: 'bg-purple-600/10 border-purple-400/30 text-purple-400',
      accent: 'text-purple-400',
      glow: 'shadow-lg shadow-purple-400/20'
    },
    orange: {
      default: 'bg-orange-600 border-orange-400 text-orange-400',
      light: 'bg-orange-600/10 border-orange-400/30 text-orange-400',
      accent: 'text-orange-400',
      glow: 'shadow-lg shadow-orange-400/20'
    },
    cyan: {
      default: 'bg-cyan-600 border-cyan-400 text-cyan-400',
      light: 'bg-cyan-600/10 border-cyan-400/30 text-cyan-400',
      accent: 'text-cyan-400',
      glow: 'shadow-lg shadow-cyan-400/20'
    }
  };
  return colors[color]?.[variant] || colors.blue[variant];
};