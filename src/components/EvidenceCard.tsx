import { motion } from "framer-motion";
import { CheckCircle2, AlertTriangle, XCircle, LucideIcon } from "lucide-react";

type Status = "passed" | "warning" | "failed";

interface EvidenceCardProps {
  title: string;
  icon: LucideIcon;
  status: Status;
  explanation: string;
  confidence: number;
  delay?: number;
}

const statusConfig = {
  passed: {
    icon: CheckCircle2,
    label: "Passed",
    colorClass: "text-risk-low",
    bgClass: "bg-[hsl(155_70%_50%/0.1)]",
    borderClass: "border-[hsl(155_70%_50%/0.3)]",
    barColor: "hsl(155 70% 50%)",
  },
  warning: {
    icon: AlertTriangle,
    label: "Warning",
    colorClass: "text-risk-medium",
    bgClass: "bg-[hsl(40_95%_55%/0.1)]",
    borderClass: "border-[hsl(40_95%_55%/0.3)]",
    barColor: "hsl(40 95% 55%)",
  },
  failed: {
    icon: XCircle,
    label: "Failed",
    colorClass: "text-risk-high",
    bgClass: "bg-[hsl(0_80%_55%/0.1)]",
    borderClass: "border-[hsl(0_80%_55%/0.3)]",
    barColor: "hsl(0 80% 55%)",
  },
};

const EvidenceCard = ({
  title,
  icon: TitleIcon,
  status,
  explanation,
  confidence,
  delay = 0,
}: EvidenceCardProps) => {
  const config = statusConfig[status];
  const StatusIcon = config.icon;

  return (
    <motion.div
      className="glass-card-hover rounded-2xl overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.12 + 0.3 }}
    >
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-5">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/15 to-secondary/15 flex items-center justify-center">
              <TitleIcon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground text-lg">{title}</h3>
          </div>
          
          {/* Status Badge */}
          <div
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full ${config.bgClass} border ${config.borderClass}`}
          >
            <StatusIcon className={`w-3.5 h-3.5 ${config.colorClass}`} />
            <span className={`text-xs font-semibold ${config.colorClass}`}>
              {config.label}
            </span>
          </div>
        </div>

        {/* Explanation */}
        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
          {explanation}
        </p>

        {/* Confidence Bar */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
              Confidence
            </span>
            <span className="text-sm font-bold text-foreground font-mono">{confidence}%</span>
          </div>
          <div className="progress-bar">
            <motion.div
              className="progress-bar-fill"
              style={{ backgroundColor: config.barColor }}
              initial={{ width: 0 }}
              animate={{ width: `${confidence}%` }}
              transition={{ duration: 1.2, delay: delay * 0.12 + 0.6, ease: "easeOut" }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default EvidenceCard;