import React from 'react';

export default function KineticMarquee() {
  const items = [
    "AGENTIC AI JOB APPLICATION PLATFORM",
    "LANGGRAPH MULTI-AGENT WORKFLOWS",
    "NVIDIA NIM ACCELERATED INFERENCE",
    "FASTAPI & SUPABASE / POSTGRESQL",
    "PLAYWRIGHT & CDP BROWSER AUTOMATION",
    "INDEED & GLASSDOOR AUTOMATION",
    "HUMAN-IN-THE-LOOP (HITL) APPROVAL",
    "MULTI-SOURCE JOBSPY & APIFY PIPELINES",
    "HYBRID SEMANTIC & DETERMINISTIC MATCHING",
    "PERSISTENT APPLICATION STATE & FAILURE RECOVERY"
  ];

  return (
    <div className="w-full py-4 border-y border-white/[0.06] bg-[#0c0a14]/60 backdrop-blur-md overflow-hidden select-none relative">
      {/* Edge gradient masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#08070e] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#08070e] to-transparent z-10 pointer-events-none" />

      <div className="animate-marquee flex items-center gap-8 font-mono text-xs uppercase tracking-[0.25em] text-neutral-300">
        {/* Render items twice for infinite loop */}
        {[...items, ...items].map((text, idx) => (
          <div key={idx} className="flex items-center gap-8 shrink-0 hover:text-white transition-colors">
            <span className="text-[#ff5500] font-bold">✦</span>
            <span className="font-semibold">{text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
