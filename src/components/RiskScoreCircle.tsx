import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface RiskScoreCircleProps {
  score: number;
  size?: number;
  strokeWidth?: number;
}

const RiskScoreCircle = ({ score, size = 240, strokeWidth = 14 }: RiskScoreCircleProps) => {
  const [animatedScore, setAnimatedScore] = useState(0);
  
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (animatedScore / 100) * circumference;

  const getRiskLevel = (score: number): { 
    label: string; 
    color: string; 
    bgColor: string;
    glowColor: string;
  } => {
    if (score < 30) return { 
      label: "LOW RISK", 
      color: "155 70% 50%",
      bgColor: "hsl(155 70% 50% / 0.1)",
      glowColor: "hsl(155 70% 50% / 0.4)"
    };
    if (score < 70) return { 
      label: "MEDIUM RISK", 
      color: "40 95% 55%",
      bgColor: "hsl(40 95% 55% / 0.1)",
      glowColor: "hsl(40 95% 55% / 0.4)"
    };
    return { 
      label: "HIGH RISK", 
      color: "0 80% 55%",
      bgColor: "hsl(0 80% 55% / 0.1)",
      glowColor: "hsl(0 80% 55% / 0.4)"
    };
  };

  const riskInfo = getRiskLevel(score);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedScore(score);
    }, 400);
    return () => clearTimeout(timer);
  }, [score]);

  return (
    <div className="relative flex items-center justify-center">
      {/* Outer glow */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: size + 60,
          height: size + 60,
          background: `radial-gradient(circle, ${riskInfo.glowColor} 0%, transparent 70%)`,
        }}
        animate={{ 
          scale: [1, 1.08, 1], 
          opacity: [0.4, 0.7, 0.4] 
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Background circle with glass effect */}
      <div 
        className="absolute rounded-full glass-card"
        style={{
          width: size - 20,
          height: size - 20,
        }}
      />

      <svg width={size} height={size} className="transform -rotate-90 relative z-10">
        {/* Background track */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="hsl(var(--muted))"
          strokeWidth={strokeWidth}
          fill="none"
          opacity={0.3}
        />
        
        {/* Progress arc */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={`hsl(${riskInfo.color})`}
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.8, ease: "easeOut", delay: 0.5 }}
          style={{
            filter: `drop-shadow(0 0 15px hsl(${riskInfo.color} / 0.6))`,
          }}
        />

        {/* Gradient definition */}
        <defs>
          <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={`hsl(${riskInfo.color})`} />
            <stop offset="100%" stopColor={`hsl(${riskInfo.color} / 0.6)`} />
          </linearGradient>
        </defs>
      </svg>

      {/* Center content */}
      <div className="absolute flex flex-col items-center justify-center z-20">
        <motion.span
          className="text-6xl font-bold tracking-tight"
          style={{ color: `hsl(${riskInfo.color})` }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {Math.round(animatedScore)}
          <span className="text-3xl">%</span>
        </motion.span>
        <motion.span
          className="text-xs font-bold tracking-[0.2em] mt-2 px-3 py-1 rounded-full"
          style={{ 
            color: `hsl(${riskInfo.color})`,
            backgroundColor: riskInfo.bgColor
          }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          {riskInfo.label}
        </motion.span>
      </div>
    </div>
  );
};

export default RiskScoreCircle;