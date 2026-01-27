import { motion } from "framer-motion";
import { ShieldAlert, ShieldCheck, ShieldX } from "lucide-react";

type VerdictType = "authentic" | "suspicious" | "likely_forged";

interface VerdictPanelProps {
  verdict: VerdictType;
  summary: string;
}

const verdictConfig = {
  authentic: {
    icon: ShieldCheck,
    title: "Document Appears Authentic",
    color: "155 70% 50%",
    bgGradient: "from-[hsl(155_70%_50%/0.15)] via-[hsl(155_70%_50%/0.05)] to-transparent",
    borderColor: "border-[hsl(155_70%_50%/0.4)]",
    glowColor: "0 0 50px hsl(155 70% 50% / 0.25)",
  },
  suspicious: {
    icon: ShieldAlert,
    title: "Suspicious Indicators Detected",
    color: "40 95% 55%",
    bgGradient: "from-[hsl(40_95%_55%/0.15)] via-[hsl(40_95%_55%/0.05)] to-transparent",
    borderColor: "border-[hsl(40_95%_55%/0.4)]",
    glowColor: "0 0 50px hsl(40 95% 55% / 0.25)",
  },
  likely_forged: {
    icon: ShieldX,
    title: "High Risk of Forgery",
    color: "0 80% 55%",
    bgGradient: "from-[hsl(0_80%_55%/0.15)] via-[hsl(0_80%_55%/0.05)] to-transparent",
    borderColor: "border-[hsl(0_80%_55%/0.4)]",
    glowColor: "0 0 50px hsl(0 80% 55% / 0.25)",
  },
};

const VerdictPanel = ({ verdict, summary }: VerdictPanelProps) => {
  const config = verdictConfig[verdict];
  const VerdictIcon = config.icon;

  return (
    <motion.div
      className={`relative rounded-2xl border ${config.borderColor} overflow-hidden glass-card`}
      style={{ boxShadow: config.glowColor }}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.8 }}
    >
      {/* Background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-r ${config.bgGradient}`} />

      <div className="relative p-8 flex items-start gap-6">
        {/* Icon */}
        <motion.div
          className="flex-shrink-0"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <div 
            className="w-20 h-20 rounded-2xl flex items-center justify-center"
            style={{ 
              backgroundColor: `hsl(${config.color} / 0.1)`,
              boxShadow: `0 0 30px hsl(${config.color} / 0.2)`
            }}
          >
            <VerdictIcon 
              className="w-10 h-10" 
              style={{ color: `hsl(${config.color})` }}
            />
          </div>
        </motion.div>

        {/* Content */}
        <div className="flex-1 pt-1">
          <motion.h2
            className="text-2xl font-bold mb-3"
            style={{ color: `hsl(${config.color})` }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
          >
            {config.title}
          </motion.h2>
          <motion.p
            className="text-muted-foreground leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            {summary}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default VerdictPanel;