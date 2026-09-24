import React from 'react';

export default function KineticMarquee() {
  const items = [
    "MULTI-AGENT SYSTEMS",
    "LANGGRAPH ORCHESTRATION",
    "NVIDIA NIM INFERENCE",
    "BROWSER AUTOMATION",
    "DETERMINISTIC RAG",
    "FASTAPI BACKENDS",
    "SUPABASE & POSTGRESQL",
    "HUMAN-IN-THE-LOOP SAFETY"
  ];

  return (
    <div className="w-full relative z-20 overflow-hidden select-none bg-[#ff5500] py-3 sm:py-3.5 shadow-[0_10px_30px_rgba(255,85,0,0.25)] border-y border-white/20">
      <div className="animate-marquee flex items-center gap-10 font-display font-extrabold text-sm sm:text-base md:text-lg tracking-wider text-white uppercase">
        {/* Render items twice for infinite loop */}
        {[...items, ...items].map((text, idx) => (
          <div key={idx} className="flex items-center gap-10 shrink-0">
            <span className="text-black font-black text-xs sm:text-sm px-2.5 py-0.5 rounded bg-white">
              AI/ML
            </span>
            <span className="font-extrabold drop-shadow-[0_1px_3px_rgba(0,0,0,0.4)]">{text}</span>
            <span className="text-white/60 text-xs">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
