import React from 'react';
import { X, Bot, Search, Brain, ShieldAlert, CheckCircle2, Terminal, Database, Cpu, Layers } from 'lucide-react';

export default function AgentWorkflowModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const steps = [
    {
      num: "01",
      title: "Multi-Source Job Discovery & Normalization",
      icon: Search,
      tag: "JobSpy + Apify Scrapers",
      desc: "Aggregates real-time job openings across multiple sources (Indeed, Glassdoor, LinkedIn) with automated normalization and deduplication across skills, experience, location, compensation, and job types."
    },
    {
      num: "02",
      title: "Hybrid Semantic & Deterministic Matching",
      icon: Layers,
      tag: "Supabase / PostgreSQL",
      desc: "Executes dual-layer scoring against structured candidate profiles: deterministic filters for hard requirements (experience, education, visa, salary) combined with semantic vector embeddings for skill alignment."
    },
    {
      num: "03",
      title: "LLM Candidate Screening & Answer Management",
      icon: Brain,
      tag: "LangGraph + NVIDIA NIM",
      desc: "NVIDIA NIM-accelerated reasoning models perform strict resume and profile grounding, generating contextual, truthful application answers while validating applicant eligibility and eliminating hallucinations."
    },
    {
      num: "04",
      title: "Human-in-the-Loop (HITL) Approval Gate",
      icon: ShieldAlert,
      tag: "Safety & Governance",
      desc: "Halts automation whenever unknown questions, new employer criteria, CAPTCHA challenges, or MFA prompts appear. Enforces explicit human approval to prevent unsupported or inaccurate submissions."
    },
    {
      num: "05",
      title: "Browser Application Engine (Indeed & Glassdoor)",
      icon: Bot,
      tag: "Playwright / CDP + PyWinAuto",
      desc: "Automates multi-step job application forms using Chrome DevTools Protocol (CDP) and desktop automation, featuring persistent workflow state recovery, duplicate submission detection, and daily application limits."
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl bg-[#0e0c15] border border-white/10 rounded-2xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/[0.08] bg-[#12101b]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#ff5500]/15 border border-[#ff5500]/30 flex items-center justify-center text-[#ff5500]">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-extrabold text-xl md:text-2xl text-white uppercase tracking-tight">
                AGENTIC AI JOB APPLICATION AGENT — ARCHITECTURE
              </h3>
              <p className="text-xs font-mono text-[#ff5500] uppercase tracking-wider">
                FastAPI · LangGraph · NVIDIA NIM · Supabase · Playwright/CDP
              </p>
            </div>
          </div>

          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 md:p-8 overflow-y-auto space-y-6">
          
          {/* Architecture Concept Statement */}
          <div className="p-4 rounded-xl bg-[#ff5500]/[0.08] border border-[#ff5500]/25 text-xs text-neutral-200 leading-relaxed font-mono">
            <span className="text-[#ff5500] font-bold">SYSTEM OVERVIEW:</span> An end-to-end AI-powered job application platform developed with Python, FastAPI, LangGraph, NVIDIA NIM, and Supabase/PostgreSQL. Integrates automated multi-source job discovery, candidate profiling, deterministic/semantic matching, LLM screening, and browser-based application automation with Human-in-the-Loop governance.
          </div>

          {/* Workflow Steps Flow */}
          <div className="space-y-3.5">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div 
                  key={idx}
                  className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-[#ff5500]/30 transition-all flex flex-col sm:flex-row sm:items-center gap-4"
                >
                  <div className="flex items-center gap-3 sm:w-2/5 shrink-0">
                    <span className="text-sm font-mono font-bold text-[#ff5500]">
                      {step.num}
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-white shrink-0">
                      <Icon className="w-4 h-4 text-[#ff5500]" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-sm text-white leading-snug">
                        {step.title}
                      </h4>
                      <span className="text-[10px] font-mono text-[#06b6d4]">
                        {step.tag}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-neutral-300 leading-relaxed sm:w-3/5 border-t sm:border-t-0 sm:border-l border-white/[0.06] pt-2 sm:pt-0 sm:pl-4">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Core Architectural Badges */}
          <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
            <div className="flex flex-wrap gap-2 text-neutral-300">
              <span className="px-2.5 py-1 rounded-md bg-[#ff5500]/10 border border-[#ff5500]/30 text-[#ff5500] font-semibold">LangGraph</span>
              <span className="px-2.5 py-1 rounded-md bg-[#06b6d4]/10 border border-[#06b6d4]/30 text-[#06b6d4] font-semibold">NVIDIA NIM</span>
              <span className="px-2.5 py-1 rounded-md bg-white/[0.05] border border-white/10">FastAPI</span>
              <span className="px-2.5 py-1 rounded-md bg-white/[0.05] border border-white/10">Supabase</span>
              <span className="px-2.5 py-1 rounded-md bg-white/[0.05] border border-white/10">PostgreSQL</span>
              <span className="px-2.5 py-1 rounded-md bg-white/[0.05] border border-white/10">Playwright / CDP</span>
              <span className="px-2.5 py-1 rounded-md bg-white/[0.05] border border-white/10">JobSpy</span>
              <span className="px-2.5 py-1 rounded-md bg-white/[0.05] border border-white/10">Apify</span>
              <span className="px-2.5 py-1 rounded-md bg-white/[0.05] border border-white/10">PyWinAuto</span>
              <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-semibold">HITL</span>
            </div>

            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-[#ff5500] hover:bg-[#ff6c1a] text-white font-medium transition-colors shadow-lg shadow-[#ff5500]/20"
            >
              Close Visualizer
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
