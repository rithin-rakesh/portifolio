import React, { useState } from 'react';
import { Award, CheckCircle2, Bot, BrainCircuit, BarChart3, Database, ExternalLink, Sparkles } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { SkillLogo } from './SkillLogos';

export default function SkillsSection({ onOpenResume }) {
  const [activeCategory, setActiveCategory] = useState('ALL');

  // Master categories matching Rithin's verified technical domains
  const categories = [
    { id: 'ALL', label: 'All Disciplines', count: 40 },
    { id: 'AGENTIC', label: 'Agentic AI & LLMs', count: 10 },
    { id: 'DEEP_LEARNING', label: 'Deep Learning', count: 10 },
    { id: 'DATA_EDA', label: 'Data & EDA', count: 10 },
    { id: 'CLOUD_DB', label: 'Cloud & Databases', count: 10 }
  ];

  // Verified skill groups with custom SVG logos & engineering levels
  const skillGroups = [
    {
      id: 'AGENTIC',
      number: '01',
      title: 'Agentic AI & LLMs',
      subtitle: 'Autonomous agents, workflow graphs & tool orchestration',
      icon: Bot,
      accentColor: '#ff5500',
      badgeBg: 'bg-[#ff5500]/10',
      badgeBorder: 'border-[#ff5500]/30',
      badgeText: 'text-[#ff5500]',
      hoverBorder: 'hover:border-[#ff5500]/40',
      skills: [
        { name: 'LangGraph', level: 'Production' },
        { name: 'LangChain', level: 'Production' },
        { name: 'CrewAI', level: 'Production' },
        { name: 'AutoGen', level: 'Advanced' },
        { name: 'Browser-use', level: 'Production' },
        { name: 'Ollama', level: 'Advanced' },
        { name: 'Hugging Face', level: 'Advanced' },
        { name: 'Prompt Engineering', level: 'Expert' },
        { name: 'RAG Systems', level: 'Production' },
        { name: 'Human-in-the-Loop', level: 'Production' }
      ]
    },
    {
      id: 'DEEP_LEARNING',
      number: '02',
      title: 'Machine & Deep Learning',
      subtitle: 'Neural architectures, computer vision & statistical ML',
      icon: BrainCircuit,
      accentColor: '#06b6d4',
      badgeBg: 'bg-[#06b6d4]/10',
      badgeBorder: 'border-[#06b6d4]/30',
      badgeText: 'text-[#06b6d4]',
      hoverBorder: 'hover:border-[#06b6d4]/40',
      skills: [
        { name: 'PyTorch', level: 'Production' },
        { name: 'TensorFlow', level: 'Advanced' },
        { name: 'Scikit-learn', level: 'Production' },
        { name: 'CNNs', level: 'Production' },
        { name: 'Transfer Learning', level: 'Advanced' },
        { name: 'Supervised Learning', level: 'Advanced' },
        { name: 'Unsupervised Learning', level: 'Competent' },
        { name: 'Model Evaluation', level: 'Advanced' },
        { name: 'Confusion Matrix', level: 'Advanced' },
        { name: 'Neural Optimization', level: 'Advanced' }
      ]
    },
    {
      id: 'DATA_EDA',
      number: '03',
      title: 'Data Analysis & EDA',
      subtitle: 'Exploratory analytics, statistical modeling & pipelines',
      icon: BarChart3,
      accentColor: '#10b981',
      badgeBg: 'bg-[#10b981]/10',
      badgeBorder: 'border-[#10b981]/30',
      badgeText: 'text-[#10b981]',
      hoverBorder: 'hover:border-[#10b981]/40',
      skills: [
        { name: 'Python', level: 'Primary / Expert' },
        { name: 'Pandas', level: 'Advanced' },
        { name: 'NumPy', level: 'Advanced' },
        { name: 'Feature Engineering', level: 'Advanced' },
        { name: 'EDA Preprocessing', level: 'Advanced' },
        { name: 'Data Cleaning', level: 'Advanced' },
        { name: 'Matplotlib', level: 'Advanced' },
        { name: 'Seaborn', level: 'Advanced' },
        { name: 'Power BI', level: 'Competent' },
        { name: 'Statistical Modeling', level: 'Advanced' }
      ]
    },
    {
      id: 'CLOUD_DB',
      number: '04',
      title: 'Databases & Cloud',
      subtitle: 'Relational data stores, cloud computing & automation',
      icon: Database,
      accentColor: '#a855f7',
      badgeBg: 'bg-[#a855f7]/10',
      badgeBorder: 'border-[#a855f7]/30',
      badgeText: 'text-[#a855f7]',
      hoverBorder: 'hover:border-[#a855f7]/40',
      skills: [
        { name: 'SQL / MySQL', level: 'Competent' },
        { name: 'Supabase / PostgreSQL', level: 'Production' },
        { name: 'AWS Cloud', level: 'Certified' },
        { name: 'Playwright', level: 'Production' },
        { name: 'Chrome DevTools (CDP)', level: 'Production' },
        { name: 'PyWinAuto', level: 'Competent' },
        { name: 'FastAPI', level: 'Production' },
        { name: 'Git & GitHub', level: 'Daily Workflow' },
        { name: 'Linux', level: 'Competent' },
        { name: 'Docker', level: 'Competent' }
      ]
    }
  ];

  // Resume-verified credentials
  const certifications = [
    {
      title: 'Supervised Machine Learning: Regression and Classification',
      issuer: 'DeepLearning.AI / Coursera',
      year: '2025',
      badge: 'ML SPECIALIST'
    },
    {
      title: 'AWS Academy Graduate — Machine Learning Foundations',
      issuer: 'Amazon Web Services (AWS)',
      year: '2025',
      badge: 'AWS ML'
    },
    {
      title: 'AWS Academy Graduate — Cloud Foundations',
      issuer: 'Amazon Web Services (AWS)',
      year: '2024',
      badge: 'AWS CLOUD'
    }
  ];

  const visibleGroups = activeCategory === 'ALL'
    ? skillGroups
    : skillGroups.filter((g) => g.id === activeCategory);

  return (
    <section id="skills" className="relative py-28 px-6 md:px-12 lg:px-16 max-w-[1440px] mx-auto border-t border-white/[0.08]">
      
      {/* ======================================================== */}
      {/* 1. SECTION HEADER: Editorial Telemetry                    */}
      {/* ======================================================== */}
      <ScrollReveal direction="down">
        <div className="flex items-center justify-between text-xs font-mono uppercase tracking-[0.2em] text-neutral-400 mb-10">
          <div className="flex items-center gap-2">
            <span className="text-[#bef264] font-bold">|</span>
            <span className="text-white font-medium">TECHNICAL ARSENAL</span>
          </div>
          <div className="flex items-center gap-3 text-neutral-400">
            <span className="text-[#bef264]">40 VERIFIED SKILLS</span>
            <span>·</span>
            <span className="text-neutral-400">05 / 06</span>
          </div>
        </div>
      </ScrollReveal>

      {/* ======================================================== */}
      {/* 2. SECTION TITLE & FILTER CONTROLS                       */}
      {/* ======================================================== */}
      <ScrollReveal direction="up" delay={100}>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.22em] text-[#bef264] font-medium block mb-3">
              PRODUCTION FRAMEWORKS & METHODOLOGY
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white tracking-[-0.035em]">
              Engineering Stack & Capabilities
            </h2>
            <p className="mt-3 text-sm text-neutral-400 max-w-xl font-sans font-normal leading-relaxed">
              Autonomous agentic architectures, deep learning libraries, data pipelines, and cloud databases verified across production environments.
            </p>
          </div>

          {/* Clean Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all duration-200 flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-white text-black font-semibold shadow-md shadow-white/10'
                      : 'bg-white/[0.03] text-neutral-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.06]'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isActive ? 'bg-black/10 text-black' : 'bg-white/[0.06] text-neutral-400'
                  }`}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </ScrollReveal>

      {/* ======================================================== */}
      {/* 3. 4-DISCIPLINE CARDS GRID WITH PROFESSIONAL ANIMATIONS   */}
      {/* ======================================================== */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
        {visibleGroups.map((group, gIdx) => {
          const Icon = group.icon;
          return (
            <ScrollReveal key={group.id} direction="up" delay={gIdx * 100} duration={500}>
              <div 
                className="group relative h-full p-6 sm:p-7 rounded-2xl bg-[#0c0c11] border border-white/[0.07] hover:border-white/20 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden"
              >
                {/* Subtle Ambient Corner Light Bloom */}
                <div 
                  className="absolute -top-24 -right-24 w-60 h-60 rounded-full blur-3xl pointer-events-none opacity-10 group-hover:opacity-25 transition-opacity duration-500"
                  style={{ backgroundColor: group.accentColor }}
                />

                {/* Card Top: Group Telemetry & Header */}
                <div>
                  <div className="flex items-center justify-between gap-3 mb-6 pb-4 border-b border-white/[0.06]">
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-10 h-10 rounded-xl flex items-center justify-center border transition-transform duration-300 group-hover:scale-105"
                        style={{ 
                          backgroundColor: `${group.accentColor}15`,
                          borderColor: `${group.accentColor}35`,
                          color: group.accentColor
                        }}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[#bef264] font-bold text-sm">*</span>
                          <span className="text-[11px] font-mono tracking-wider text-neutral-400">
                            {group.number} //
                          </span>
                          <h3 className="font-display font-bold text-base sm:text-lg text-white tracking-tight">
                            {group.title}
                          </h3>
                        </div>
                        <p className="text-xs text-neutral-400 mt-0.5">
                          {group.subtitle}
                        </p>
                      </div>
                    </div>

                    <span className="hidden sm:inline-block text-[11px] font-mono text-neutral-400">
                      {group.skills.length} tools
                    </span>
                  </div>

                  {/* Skills Pills Grid (10 skills with custom SVG logos) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {group.skills.map((skill, sIdx) => (
                      <div 
                        key={sIdx}
                        className="group/pill relative flex items-center justify-between p-2.5 sm:p-3 rounded-xl bg-white/[0.025] hover:bg-white/[0.06] border border-white/[0.05] hover:border-white/15 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg cursor-default"
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover/pill:scale-115">
                            <SkillLogo name={skill.name} className="w-4 h-4" />
                          </div>
                          <span className="text-xs font-medium text-neutral-200 group-hover/pill:text-white transition-colors truncate">
                            {skill.name}
                          </span>
                        </div>

                        <span className={`text-[9.5px] font-mono px-2 py-0.5 rounded border transition-all duration-200 flex-shrink-0 ${group.badgeBg} ${group.badgeBorder} ${group.badgeText} group-hover/pill:brightness-125`}>
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer Line */}
                <div className="mt-6 pt-3 border-t border-white/[0.04] flex items-center justify-between text-[11px] font-mono text-neutral-400">
                  <span>DISCIPLINE VERIFIED</span>
                  <span className="text-neutral-400">100% OPERATIONAL</span>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>

      {/* ======================================================== */}
      {/* 4. VERIFIED CERTIFICATIONS STRIP                         */}
      {/* ======================================================== */}
      <ScrollReveal direction="up" delay={200}>
        <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-[#0c0c11] via-[#101017] to-[#0c0c11] border border-white/[0.08] flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="flex items-start sm:items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#ff5500]/10 border border-[#ff5500]/30 flex items-center justify-center text-[#ff5500] flex-shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono uppercase tracking-widest text-[#ff5500] font-semibold">
                  OFFICIAL ACCREDITATIONS
                </span>
                <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <CheckCircle2 className="w-3 h-3" />
                  VERIFIED
                </span>
              </div>
              <h3 className="font-display font-bold text-lg text-white mt-1">
                Machine Learning & Cloud Foundations Certifications
              </h3>
              <p className="text-xs text-neutral-400 mt-0.5">
                Issued by DeepLearning.AI, Coursera, and Amazon Web Services (AWS)
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {certifications.map((cert, cIdx) => (
              <div 
                key={cIdx}
                className="px-3.5 py-2 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-white/15 transition-all duration-200"
              >
                <div className="text-[10px] font-mono text-[#ff5500] font-bold">
                  {cert.badge} · {cert.year}
                </div>
                <div className="text-xs font-medium text-neutral-200 max-w-[200px] truncate" title={cert.title}>
                  {cert.title}
                </div>
                <div className="text-[10px] text-neutral-400 truncate">
                  {cert.issuer}
                </div>
              </div>
            ))}

            <button
              onClick={onOpenResume}
              className="px-4 py-2 rounded-xl bg-white hover:bg-neutral-200 text-black text-xs font-semibold tracking-wide transition-all duration-200 flex items-center gap-1.5 shadow-md hover:shadow-lg flex-shrink-0"
            >
              <span>View Credentials</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </ScrollReveal>

    </section>
  );
}
