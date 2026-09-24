import React, { useState } from 'react';
import { Bot, BrainCircuit, BarChart3, Wrench } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState('ALL');

  const categories = [
    { id: 'ALL', label: 'All Disciplines' },
    { id: 'AI', label: 'Agentic & GenAI' },
    { id: 'ML', label: 'ML & Data Science' },
    { id: 'DATA', label: 'Analytics & Databases' },
    { id: 'TOOLS', label: 'Tools & Cloud' }
  ];

  const skillGroups = [
    {
      category: 'AI',
      title: 'Agentic AI & LLMs',
      icon: Bot,
      color: '#ff5500',
      items: [
        { name: 'LangGraph', level: 'Production' },
        { name: 'NVIDIA NIM', level: 'Production' },
        { name: 'Agentic AI', level: 'Production' },
        { name: 'Multi-Agent Workflows', level: 'Production' },
        { name: 'RAG Architectures', level: 'Advanced' },
        { name: 'Human-in-the-Loop (HITL)', level: 'Production' },
        { name: 'Generative AI', level: 'Advanced' }
      ]
    },
    {
      category: 'ML',
      title: 'Data Science & Machine Learning',
      icon: BrainCircuit,
      color: '#06b6d4',
      items: [
        { name: 'Python', level: 'Primary / Expert' },
        { name: 'Supervised Learning', level: 'Advanced' },
        { name: 'Unsupervised Learning', level: 'Competent' },
        { name: 'Transfer Learning', level: 'Advanced' },
        { name: 'Scikit-learn', level: 'Advanced' },
        { name: 'Pandas & NumPy', level: 'Advanced' },
        { name: 'Matplotlib & Seaborn', level: 'Advanced' }
      ]
    },
    {
      category: 'DATA',
      title: 'Data Processing & Analytics',
      icon: BarChart3,
      color: '#10b981',
      items: [
        { name: 'Supabase / PostgreSQL', level: 'Production' },
        { name: 'Exploratory Data Analysis (EDA)', level: 'Advanced' },
        { name: 'Feature Engineering', level: 'Advanced' },
        { name: 'Data Cleaning & Preprocessing', level: 'Advanced' },
        { name: 'SQL & MySQL', level: 'Competent' },
        { name: 'Power BI', level: 'Competent' }
      ]
    },
    {
      category: 'TOOLS',
      title: 'Automation, Cloud & DevOps',
      icon: Wrench,
      color: '#a855f7',
      items: [
        { name: 'FastAPI', level: 'Production' },
        { name: 'Playwright & CDP', level: 'Production' },
        { name: 'JobSpy & Apify', level: 'Advanced' },
        { name: 'PyWinAuto', level: 'Competent' },
        { name: 'Amazon Web Services (AWS)', level: 'Certified' },
        { name: 'Git & GitHub', level: 'Daily Workflow' }
      ]
    }
  ];

  const filteredGroups = activeCategory === 'ALL' 
    ? skillGroups 
    : skillGroups.filter(g => g.category === activeCategory);

  return (
    <section id="skills" className="py-28 px-6 md:px-12 max-w-[1440px] mx-auto border-t border-white/[0.08]">
      
      {/* Section Header */}
      <ScrollReveal direction="down">
        <div className="flex items-center justify-between text-xs font-mono uppercase tracking-[0.2em] text-neutral-400 mb-12">
          <div className="flex items-center gap-2">
            <span className="text-[#ff5500] font-bold">|</span>
            <span className="text-white font-medium">TECHNICAL ARSENAL</span>
          </div>
          <div className="text-neutral-400">
            <span>04 / 05</span>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={150}>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white tracking-tight">
              ENGINEERING STACK & CAPABILITIES
            </h2>
            <p className="mt-3 text-sm text-neutral-400 max-w-xl">
              A comprehensive overview of programming languages, machine learning frameworks, agentic patterns, and infrastructure tools.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all duration-200 ${
                  activeCategory === cat.id
                    ? 'bg-[#ff5500] text-white font-semibold shadow-md shadow-[#ff5500]/25'
                    : 'bg-white/[0.04] text-neutral-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.06]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Grid of Skill Cards with Staggered Scroll Transitions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredGroups.map((group, gIdx) => {
          const Icon = group.icon;
          return (
            <ScrollReveal key={gIdx} direction="up" delay={gIdx * 120} duration={600}>
              <div className="h-full p-7 rounded-2xl bg-[#0c0c11] border border-white/[0.07] hover:border-white/15 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/[0.06]">
                  <div 
                    className="w-9 h-9 rounded-xl flex items-center justify-center border"
                    style={{ 
                      backgroundColor: `${group.color}15`,
                      borderColor: `${group.color}35`,
                      color: group.color
                    }}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-white">
                    {group.title}
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {group.items.map((skill, sIdx) => (
                    <div 
                      key={sIdx}
                      className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04] flex items-center justify-between"
                    >
                      <span className="text-xs font-medium text-neutral-200">
                        {skill.name}
                      </span>
                      <span className="text-[10px] font-mono text-[#ff5500] bg-[#ff5500]/10 px-2 py-0.5 rounded border border-[#ff5500]/20">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>

    </section>
  );
}
