import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Activity,
  ChevronRight,
  FileSearch,
  Fingerprint,
  Lock,
  ShieldCheck,
  Sparkles,
  Wand2,
  Zap,
} from "lucide-react";
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
    { icon: FileSearch, label: "Metadata Forensics", desc: "Inspect hidden document fingerprints" },
    { icon: Sparkles, label: "Model Verdict", desc: "Explainable AI with confidence scoring" },
    { icon: ShieldCheck, label: "Tamper Signals", desc: "Pixel and compression anomaly checks" },
    { icon: Wand2, label: "Remediation", desc: "Actionable next steps for investigators" },
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
      <header className="relative z-10 flex items-center justify-between px-6 md:px-10 py-6">
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
          <Link
            to="/docs"
            className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
          >
            Documentation
          </Link>
          <Link
            to="/docs#api"
            className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
          >
            API
          </Link>
          <button
            type="button"
            className="flex items-center gap-2 px-4 py-2 rounded-lg glass-card text-sm font-medium text-foreground hover:bg-primary/10 transition-colors"
          >
            Sign In
            <ChevronRight className="w-4 h-4" />
          </button>
        </motion.nav>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 px-6 md:px-10 pt-20 pb-28">
        <div className="mx-auto max-w-6xl grid gap-12 lg:grid-cols-[1.1fr,0.9fr] items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm">
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">AI-Powered Document Forensics</span>
              </div>
            </motion.div>

            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-5 tracking-tight">
                <span className="title-glow">ForensiQ</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Authenticate documents with explainable AI, forensic metadata, and anomaly signals.
                <span className="text-foreground font-medium"> Trusted evidence, ready in minutes.</span>
              </p>
            </motion.div>

            <motion.div
              className="grid sm:grid-cols-3 gap-4 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
            >
              <div className="glass-card p-4 rounded-xl">
                <p className="text-2xl font-semibold text-foreground">98%</p>
                <p className="text-xs text-muted-foreground">Detection precision</p>
              </div>
              <div className="glass-card p-4 rounded-xl">
                <p className="text-2xl font-semibold text-foreground">2.3s</p>
                <p className="text-xs text-muted-foreground">Average report time</p>
              </div>
              <div className="glass-card p-4 rounded-xl">
                <p className="text-2xl font-semibold text-foreground">SOC2</p>
                <p className="text-xs text-muted-foreground">Security aligned</p>
              </div>
            </motion.div>

            <motion.div
              className="grid gap-4 md:grid-cols-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {features.map((feature) => (
                <div
                  key={feature.label}
                  className="flex items-start gap-3 p-4 rounded-xl glass-card-hover"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{feature.label}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="glass-card p-6 md:p-8 rounded-2xl border border-white/10 shadow-2xl"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-sm text-muted-foreground">Verification Console</p>
                <h2 className="text-2xl font-semibold text-foreground">Start a new analysis</h2>
              </div>
              <div className="w-11 h-11 rounded-xl bg-primary/15 flex items-center justify-center">
                <Activity className="w-5 h-5 text-primary" />
              </div>
            </div>

            <div className="space-y-5">
              <FileUploadZone
                onFileSelect={setSelectedFile}
                onAnalyze={handleAnalyze}
                isAnalyzing={isAnalyzing}
              />

              <div className="grid gap-3">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                    1
                  </span>
                  Upload PDF or image evidence
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                    2
                  </span>
                  Run explainable AI verification
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                    3
                  </span>
                  Export audit-ready report
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-16 grid gap-4 md:grid-cols-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <div className="glass-card p-5 rounded-xl flex items-center gap-3 text-sm text-muted-foreground">
            <Lock className="w-4 h-4 text-primary" />
            End-to-end encrypted evidence handling
          </div>
          <div className="glass-card p-5 rounded-xl flex items-center gap-3 text-sm text-muted-foreground">
            <ShieldCheck className="w-4 h-4 text-primary" />
            Compliance-ready audit trails
          </div>
          <div className="glass-card p-5 rounded-xl flex items-center gap-3 text-sm text-muted-foreground">
            <FileSearch className="w-4 h-4 text-primary" />
            Detailed provenance mapping
          </div>
        </motion.div>
      </main>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
    </div>
  );
};

export default Landing;