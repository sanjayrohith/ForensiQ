import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, FileText, X, Scan, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FileUploadZoneProps {
  onFileSelect: (file: File) => void;
  onAnalyze: () => void;
  isAnalyzing?: boolean;
}

const FileUploadZone = ({ onFileSelect, onAnalyze, isAnalyzing = false }: FileUploadZoneProps) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file && (file.type === "application/pdf" || file.type.startsWith("image/"))) {
      setSelectedFile(file);
      onFileSelect(file);
    }
  }, [onFileSelect]);

  const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      onFileSelect(file);
    }
  }, [onFileSelect]);

  const removeFile = useCallback(() => {
    setSelectedFile(null);
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <motion.div
        className={`upload-zone rounded-2xl p-12 text-center cursor-pointer relative ${
          isDragOver ? "dragover" : ""
        } ${isAnalyzing ? "scan-effect" : ""}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.2 }}
      >
        <input
          type="file"
          accept=".pdf,image/*"
          onChange={handleFileInput}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          disabled={isAnalyzing}
        />

        <AnimatePresence mode="wait">
          {isAnalyzing ? (
            <motion.div
              key="analyzing"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="flex flex-col items-center gap-6 py-4"
            >
              <div className="relative">
                <motion.div
                  className="w-24 h-24 rounded-2xl bg-primary/10 flex items-center justify-center"
                  animate={{ 
                    boxShadow: [
                      "0 0 20px hsl(175 90% 50% / 0.2)",
                      "0 0 40px hsl(175 90% 50% / 0.4)",
                      "0 0 20px hsl(175 90% 50% / 0.2)",
                    ]
                  }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Scan className="w-12 h-12 text-primary" />
                </motion.div>
              </div>
              <div>
                <p className="text-lg font-semibold text-foreground mb-1">
                  Analyzing Document
                </p>
                <p className="text-sm text-muted-foreground">
                  Running forensic checks...
                </p>
              </div>
              <div className="flex gap-1">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 rounded-full bg-primary"
                    animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1, 0.8] }}
                    transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                  />
                ))}
              </div>
            </motion.div>
          ) : selectedFile ? (
            <motion.div
              key="file-selected"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="flex flex-col items-center gap-5"
            >
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center ring-glow-primary">
                <FileText className="w-10 h-10 text-primary" />
              </div>
              <div className="flex items-center gap-3">
                <span className="text-foreground font-semibold text-lg">{selectedFile.name}</span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    removeFile();
                  }}
                  className="p-1.5 rounded-lg hover:bg-muted transition-colors group"
                >
                  <X className="w-4 h-4 text-muted-foreground group-hover:text-foreground" />
                </button>
              </div>
              <span className="text-sm text-muted-foreground font-mono">
                {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
              </span>
            </motion.div>
          ) : (
            <motion.div
              key="upload-prompt"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="flex flex-col items-center gap-5"
            >
              <motion.div
                className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary/15 to-secondary/15 flex items-center justify-center"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Upload className="w-12 h-12 text-primary" />
              </motion.div>
              <div>
                <p className="text-xl font-semibold text-foreground mb-2">
                  Drop your document here
                </p>
                <p className="text-muted-foreground">
                  or click to browse • <span className="font-mono text-sm">PDF, PNG, JPG</span>
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Analyze Button */}
      <motion.div
        className="mt-8 flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Button
          onClick={onAnalyze}
          disabled={!selectedFile || isAnalyzing}
          size="lg"
          className="btn-glow px-12 py-7 text-lg font-semibold bg-gradient-to-r from-primary to-primary/80 text-primary-foreground hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed rounded-xl"
        >
          {isAnalyzing ? (
            <span className="flex items-center gap-3">
              <Loader2 className="w-5 h-5 animate-spin" />
              Analyzing...
            </span>
          ) : (
            <span className="flex items-center gap-3">
              <Scan className="w-5 h-5" />
              Analyze Document
            </span>
          )}
        </Button>
      </motion.div>
    </div>
  );
};

export default FileUploadZone;