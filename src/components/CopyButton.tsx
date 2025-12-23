"use client";

import { useState } from "react";
import { cn } from "@/src/lib/utils";

interface CopyButtonProps {
  text: string;
  className?: string;
  label?: string;
}

export default function CopyButton({ text, className, label = "Copy" }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={cn(
        "px-4 py-2 rounded-md font-semibold text-sm transition-all duration-300",
        "border-2 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black",
        "border-brand-gold text-brand-gold hover:bg-brand-gold/10",
        className
      )}
      aria-label={`${label} to clipboard`}
    >
      {copied ? "Copied!" : label}
    </button>
  );
}

