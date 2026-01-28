import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Code2,
  KeyRound,
  ShieldCheck,
  Webhook,
  Clock,
  FileSearch,
  Sparkles,
  Terminal,
} from "lucide-react";
import ParticlesBackground from "@/components/ParticlesBackground";

const endpoints = [
  {
    method: "POST",
    path: "/v1/analyses",
    title: "Create analysis",
    description: "Upload a document for forensic analysis and receive an analysis ID.",
  },
  {
    method: "GET",
    path: "/v1/analyses/{id}",
    title: "Get analysis status",
    description: "Poll for completion and fetch the latest verdict summary.",
  },
  {
    method: "GET",
    path: "/v1/analyses/{id}/report",
    title: "Download report",
    description: "Retrieve the full audit report (PDF/JSON).",
  },
];

const Api = () => (
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
            <Code2 className="w-4 h-4 text-primary" />
            <span className="text-muted-foreground">API Reference</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            ForensiQ API
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Submit documents, retrieve verdicts, and automate forensic reporting with a secure,
            audit-ready API.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[1fr,0.45fr]">
          <div className="space-y-6">
            <motion.section
              className="glass-card p-6 rounded-2xl border border-white/10"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <KeyRound className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-2">Authentication</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Use a bearer token issued from your ForensiQ workspace. Tokens can be scoped per
                    team, environment, and retention policy.
                  </p>
                </div>
              </div>
            </motion.section>

            <motion.section
              className="glass-card p-6 rounded-2xl border border-white/10"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <FileSearch className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-2">Core endpoints</h2>
                  <div className="mt-4 space-y-4">
                    {endpoints.map((endpoint) => (
                      <div key={endpoint.path} className="border border-white/10 rounded-xl p-4">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-xs font-semibold px-2 py-1 rounded-full bg-primary/15 text-primary">
                            {endpoint.method}
                          </span>
                          <span className="text-sm font-mono text-foreground">{endpoint.path}</span>
                        </div>
                        <p className="text-sm font-semibold text-foreground">{endpoint.title}</p>
                        <p className="text-xs text-muted-foreground">{endpoint.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.section>

            <motion.section
              className="glass-card p-6 rounded-2xl border border-white/10"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Webhook className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-2">Webhooks</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Subscribe to verdict-ready and report-export events. Retries are automatic with
                    signed payloads for verification.
                  </p>
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
              <h3 className="text-lg font-semibold text-foreground mb-4">Best practices</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-primary mt-0.5" />
                  Include a case ID in metadata for every request.
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-primary mt-0.5" />
                  Poll status after 2 seconds to reduce rate usage.
                </li>
                <li className="flex items-start gap-2">
                  <Sparkles className="w-4 h-4 text-primary mt-0.5" />
                  Store the report ID for long-term audit retrieval.
                </li>
              </ul>
            </motion.aside>

            <motion.aside
              className="glass-card p-6 rounded-2xl border border-white/10"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-lg font-semibold text-foreground mb-4">Sample request</h3>
              <div className="text-xs text-muted-foreground font-mono bg-black/30 rounded-xl p-4 leading-relaxed">
                POST /v1/analyses
                <br />
                Authorization: Bearer &lt;token&gt;
                <br />
                Content-Type: multipart/form-data
                <br />
                <br />
                file=@contract.pdf
                <br />
                caseId=INV-2031-778
              </div>
              <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                <Terminal className="w-4 h-4 text-primary" />
                Use curl or your preferred SDK.
              </div>
            </motion.aside>
          </div>
        </div>
      </div>
    </main>
  </div>
);

export default Api;
