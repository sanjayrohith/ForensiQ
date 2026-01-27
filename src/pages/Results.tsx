import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Fingerprint, Database, ImageOff, Type, Download, RotateCcw, Clock, File, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import RiskScoreCircle from "@/components/RiskScoreCircle";
import EvidenceCard from "@/components/EvidenceCard";
import VerdictPanel from "@/components/VerdictPanel";
import ParticlesBackground from "@/components/ParticlesBackground";

// Mock data for demonstration
const mockResults = {
  riskScore: 72,
  verdict: "suspicious" as const,
  verdictSummary:
    "Analysis reveals inconsistencies in document metadata and potential visual manipulation. The creation timestamp conflicts with the document's claimed date, and image analysis detected compression artifacts consistent with editing.",
  evidence: [
    {
      title: "Metadata Forensics",
      icon: Database,
      status: "failed" as const,
      explanation:
        "Document metadata shows creation date of 2024-01-15, but internal timestamps reference dates from 2019. Software signature indicates editing with Adobe Acrobat after initial creation.",
      confidence: 94,
    },
    {
      title: "Visual Tampering",
      icon: ImageOff,
      status: "warning" as const,
      explanation:
        "Error Level Analysis detected inconsistent compression levels in the signature region. Clone detection found no duplicated regions, but edge analysis shows potential masking artifacts.",
      confidence: 67,
    },
    {
      title: "Linguistic Consistency",
      icon: Type,
      status: "passed" as const,
      explanation:
        "Text analysis shows consistent writing style throughout the document. No anomalies detected in font rendering or character spacing. OCR confidence is high across all text regions.",
      confidence: 89,
    },
  ],
};

const Results = () => {
  const navigate = useNavigate();

  const docStats = [
    { icon: File, label: "Pages", value: "12" },
    { icon: Layers, label: "Size", value: "2.4 MB" },
    { icon: Clock, label: "Analysis", value: "4.2s" },
  ];

  return (
    <div className="min-h-screen bg-background neural-grid relative">
      <ParticlesBackground />
      
      {/* Ambient orbs */}
      <div className="ambient-orb w-[500px] h-[500px] bg-primary/15 top-[-100px] right-[-100px]" />
      <div className="ambient-orb w-[400px] h-[400px] bg-secondary/10 bottom-[10%] left-[-100px]" 
        style={{ animationDelay: "3s" }} 
      />

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-8 py-5 border-b border-border/30 glass-card">
        <div className="flex items-center gap-6">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate("/")}
            className="text-muted-foreground hover:text-foreground hover:bg-muted/50"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <div className="h-5 w-px bg-border" />
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center ring-glow-primary">
              <Fingerprint className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-semibold text-foreground">Analysis Report</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button 
            variant="outline" 
            size="sm" 
            className="text-muted-foreground border-border/50 hover:bg-muted/50 hover:text-foreground"
          >
            <Download className="w-4 h-4 mr-2" />
            Export PDF
          </Button>
          <Button
            size="sm"
            onClick={() => navigate("/")}
            className="bg-primary/10 text-primary hover:bg-primary/20 border border-primary/30"
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            New Analysis
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-6xl mx-auto px-8 py-12">
        {/* Top section - Score and Document Info */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 mb-14">
          {/* Risk Score */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <RiskScoreCircle score={mockResults.riskScore} size={260} />
          </motion.div>

          {/* Document Info */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-4xl font-bold text-foreground mb-3 tracking-tight">
              Analysis Complete
            </h1>
            <p className="text-muted-foreground mb-8 text-lg">
              Analyzed: <span className="text-foreground font-semibold font-mono">contract_final_v2.pdf</span>
            </p>
            
            {/* Stats cards */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              {docStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="flex items-center gap-3 px-5 py-3 rounded-xl glass-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <stat.icon className="w-4 h-4 text-primary" />
                  <div className="text-left">
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                    <p className="text-sm font-bold text-foreground font-mono">{stat.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Evidence Cards */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3">
            <div className="w-1 h-6 rounded-full bg-gradient-to-b from-primary to-secondary" />
            Evidence Analysis
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {mockResults.evidence.map((evidence, index) => (
              <EvidenceCard
                key={evidence.title}
                {...evidence}
                delay={index}
              />
            ))}
          </div>
        </motion.div>

        {/* Final Verdict */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3">
            <div className="w-1 h-6 rounded-full bg-gradient-to-b from-primary to-secondary" />
            Final Verdict
          </h2>
          <VerdictPanel
            verdict={mockResults.verdict}
            summary={mockResults.verdictSummary}
          />
        </motion.div>
      </main>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
    </div>
  );
};

export default Results;