import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Fingerprint, Scan, Sparkles, Zap, Lock, ChevronRight } from "lucide-react";
import FileUploadZone from "@/components/FileUploadZone";
import ParticlesBackground from "@/components/ParticlesBackground";

const Landing = () => {
  const navigate = useNavigate();
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleAnalyze = () => {
    if (!selectedFile) return;
    
    setIsAnalyzing(true);
    setTimeout(() => {
      navigate("/results");
    }, 2500);
  };

  const features = [
    { icon: Scan, label: "Metadata Analysis", desc: "Deep inspection of file properties" },
    { icon: Sparkles, label: "AI Detection", desc: "Neural network-powered verification" },
    { icon: Lock, label: "Tamper Detection", desc: "Pixel-level forensic scanning" },
  ];

  return (
    <div className="min-h-screen bg-background neural-grid relative overflow-hidden">
      <ParticlesBackground />
      
      {/* Ambient orbs */}
      <div className="ambient-orb w-[600px] h-[600px] bg-primary/20 top-[-200px] left-[-200px]" />
      <div className="ambient-orb w-[500px] h-[500px] bg-secondary/15 bottom-[-150px] right-[-150px]" 
        style={{ animationDelay: "4s" }} 
      />

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-8 py-6">
        <motion.div 
          className="flex items-center gap-3"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg ring-glow-primary">
            <Fingerprint className="w-6 h-6 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground tracking-tight">ForensiQ</span>
        </motion.div>
        
        <motion.nav 
          className="flex items-center gap-8"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
            Documentation
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
            API
          </a>
          <a href="#" className="flex items-center gap-2 px-4 py-2 rounded-lg glass-card text-sm font-medium text-foreground hover:bg-primary/10 transition-colors">
            Sign In
            <ChevronRight className="w-4 h-4" />
          </a>
        </motion.nav>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 flex flex-col items-center justify-center px-8 pt-24 pb-32">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-muted-foreground">AI-Powered Document Analysis</span>
            <span className="px-2 py-0.5 rounded-full bg-primary/20 text-primary text-xs font-semibold">NEW</span>
          </div>
        </motion.div>

        {/* Title */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            <span className="title-glow">ForensiQ</span>
          </h1>
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Detect document forgery with explainable AI.
            <span className="text-foreground font-medium"> Trust, verified.</span>
          </motion.p>
        </motion.div>

        {/* Feature pills */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.label}
              className="flex items-center gap-3 px-5 py-3 rounded-xl glass-card-hover cursor-default"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 + index * 0.1 }}
            >
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <feature.icon className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-foreground">{feature.label}</p>
                <p className="text-xs text-muted-foreground">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Upload Zone */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="w-full"
        >
          <FileUploadZone
            onFileSelect={setSelectedFile}
            onAnalyze={handleAnalyze}
            isAnalyzing={isAnalyzing}
          />
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          className="mt-16 flex items-center gap-8 text-muted-foreground text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4" />
            <span>End-to-end encrypted</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-muted-foreground/50" />
          <span>No data stored</span>
          <div className="w-1 h-1 rounded-full bg-muted-foreground/50" />
          <span>Enterprise ready</span>
        </motion.div>
      </main>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
    </div>
  );
};

export default Landing;