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
    title: "Platform Overview",
    icon: BookOpen,
    description:
      "ForensiQ is an AI-assisted document forensics platform that helps human experts verify document authenticity. It provides explainable AI verdicts, forensic metadata analysis, and audit-ready reports while keeping humans in the decision loop.",
  },
  {
    id: "human-ai-collaboration",
    title: "Human-AI Collaboration",
    icon: Sparkles,
    description:
      "ForensiQ augments human expertise rather than replacing it. AI provides evidence and analysis, while human experts make final authenticity determinations based on provided insights and their professional judgment.",
  },
  {
    id: "quick-start",
    title: "Quick Start Guide",
    icon: ScanText,
    description:
      "Upload a document, review AI-generated evidence analysis, examine confidence scores, and make an informed decision. Export findings as an audit-ready report for documentation and compliance.",
  },
  {
    id: "analysis-pipeline",
    title: "Forensic Analysis",
    icon: FileSearch,
    description:
      "The platform analyzes metadata timestamps, visual compression artifacts, linguistic patterns, and structural inconsistencies. Each analysis provides clear explanations and confidence levels to support human decision-making.",
  },
  {
    id: "interpret-results",
    title: "Understanding Results",
    icon: Wand2,
    description:
      "Results include evidence cards explaining findings, confidence scores for each analysis type, visual indicators of suspicious regions, and recommended next steps for human reviewers.",
  },
  {
    id: "ethics-security",
    title: "Ethics & Security",
    icon: Lock,
    description:
      "Built with privacy-first design, transparent AI decision-making, bias mitigation measures, and strict data retention controls. Documents can be processed without permanent storage for sensitive use cases.",
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
            AI-Assisted Document Forensics
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Learn how ForensiQ assists human experts in verifying document authenticity through
            explainable AI, forensic analysis, and audit-ready reporting.
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
