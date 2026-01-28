import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  BookOpen,
  ArrowLeft,
  FileSearch,
  Lock,
  ScanText,
  ShieldCheck,
  Sparkles,
  Wand2,
  Clock,
  MessageCircle,
  Activity,
} from "lucide-react";
import ParticlesBackground from "@/components/ParticlesBackground";

const sections = [
  {
    id: "overview",
    title: "Overview",
    icon: BookOpen,
    description:
      "ForensiQ helps investigators validate documents with explainable AI, metadata forensics, and tamper signals. The platform produces audit-ready reports designed for compliance workflows.",
  },
  {
    id: "quick-start",
    title: "Quick start",
    icon: Sparkles,
    description:
      "Upload a PDF or image, run analysis, then export a shareable report. Each run generates a confidence score and highlights evidence behind the verdict.",
  },
  {
    id: "upload-guidelines",
    title: "Upload guidelines",
    icon: ScanText,
    description:
      "Supported formats: PDF, PNG, JPG. For best results, upload original files with intact metadata and avoid screenshots or converted copies.",
  },
  {
    id: "analysis-pipeline",
    title: "Analysis pipeline",
    icon: FileSearch,
    description:
      "We combine metadata checks, visual anomaly detection, and linguistic consistency to surface inconsistencies. Each signal is weighted for the final risk score.",
  },
  {
    id: "interpret-results",
    title: "Interpreting results",
    icon: Wand2,
    description:
      "Review evidence cards for the why behind the verdict. Pay attention to high-confidence failures and cross-reference flagged regions in the report.",
  },
  {
    id: "security",
    title: "Security & privacy",
    icon: Lock,
    description:
      "Files are encrypted in transit. Evidence handling follows strict retention controls and can be configured for no-storage modes.",
  },
];

const Documentation = () => (
  <div className="min-h-screen bg-background neural-grid relative overflow-hidden">
    <ParticlesBackground />

    <div className="ambient-orb w-[520px] h-[520px] bg-primary/20 top-[-180px] left-[-160px]" />
    <div
      className="ambient-orb w-[480px] h-[480px] bg-secondary/15 bottom-[-140px] right-[-140px]"
      style={{ animationDelay: "4s" }}
    />

    <main className="relative z-10 px-6 md:px-10 pt-16 pb-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <ArrowLeft className="w-4 h-4" />
            </span>
            Back to home
          </Link>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm mb-5">
            <Activity className="w-4 h-4 text-primary" />
            <span className="text-muted-foreground">Documentation</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            Build trust with explainable forensics
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Everything you need to integrate ForensiQ into investigative workflows, understand verdicts,
            and produce evidence-grade reports.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[1fr,0.45fr]">
          <div className="space-y-6">
            {sections.map((section, index) => (
              <motion.section
                key={section.id}
                id={section.id}
                className="glass-card p-6 rounded-2xl border border-white/10"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.08 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <section.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-foreground mb-2">
                      {section.title}
                    </h2>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {section.description}
                    </p>
                  </div>
                </div>
              </motion.section>
            ))}

            <motion.section
              id="api"
              className="glass-card p-6 rounded-2xl border border-white/10"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-2">API Essentials</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Submit documents to the analysis endpoint, poll for completion, and fetch report artifacts.
                    All API calls require an access token and support audit metadata tags.
                  </p>
                  <div className="mt-4 grid gap-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary" />
                      Typical processing time: 2–5 seconds per document.
                    </div>
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-primary" />
                      Webhooks available for verdict-ready events.
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>
          </div>

          <div className="space-y-6">
            <motion.aside
              className="glass-card p-6 rounded-2xl border border-white/10"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-lg font-semibold text-foreground mb-4">On this page</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="hover:text-foreground transition-colors"
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
                <li>
                  <a href="#api" className="hover:text-foreground transition-colors">
                    API Essentials
                  </a>
                </li>
              </ul>
            </motion.aside>

            <motion.aside
              className="glass-card p-6 rounded-2xl border border-white/10"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-lg font-semibold text-foreground mb-4">Need help?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Reach out for onboarding, API keys, or best-practice reviews.
              </p>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MessageCircle className="w-4 h-4 text-primary" />
                support@forensiq.ai
              </div>
            </motion.aside>
          </div>
        </div>
      </div>
    </main>
  </div>
);

export default Documentation;
