"use client";
import { Spotlight } from "@/components/ui/spotlight-new";

export function UniversalBackground() {
  return (
    <div className="fixed inset-0 w-full h-full bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <Spotlight />
    </div>
  );
}
