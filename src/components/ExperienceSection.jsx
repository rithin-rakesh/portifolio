import React from 'react';
import { Briefcase, Calendar, MapPin, Award, CheckCircle2 } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function ExperienceSection() {
  const experiences = [
    {
      role: "AI Intern",
      company: "Leniko Solutions",
      period: "July 2026 — Present",
      location: "India",
      status: "CURRENT",
      tag: "AGENTIC AI & LLMs",
      bullets: [
        "Developing production-ready AI applications using Agentic AI architectures and Large Language Models.",
        "Building intelligent multi-agent workflows for automated information retrieval, reasoning, and business process optimization.",
        "Engineering reliable prompt protocols, contextual memory buffers, and programmatic API execution pipelines."
      ],
      skills: ["Agentic AI", "LLM Workflows", "Multi-Agent Systems", "Python", "RAG"]
    },
    {
      role: "Python Data Science Intern",
      company: "Luminar Technolab",
      period: "September 2025 — April 2026",
      location: "Calicut, Kerala",
      status: "COMPLETED",
      tag: "MACHINE LEARNING",
      bullets: [
        "Performed data cleaning, preprocessing, and exploratory data analysis (EDA) on complex structured datasets.",
        "Built and optimized predictive models using classical machine learning and deep learning architectures.",
        "Implemented neural networks and transfer learning models to achieve high-accuracy multiclass categorization."
      ],
      skills: ["Python", "Scikit-learn", "Deep Learning", "Transfer Learning", "EDA", "Pandas"]
    }
  ];

  const certifications = [
    {
      title: "Supervised Machine Learning: Regression and Classification",
      issuer: "Coursera / DeepLearning.AI",
      year: "2025",
      type: "Machine Learning"
    },
    {
      title: "AWS Academy Graduate — Machine Learning Foundations",
      issuer: "Amazon Web Services",
      year: "2025",
      type: "Cloud & ML"
    },
    {
      title: "AWS Academy Graduate — Cloud Foundations",
      issuer: "Amazon Web Services",
      year: "2024",
      type: "Cloud Infrastructure"
    }
  ];

  return (
    <section id="experience" className="py-28 px-6 md:px-12 max-w-[1440px] mx-auto border-t border-white/[0.08]">
      
      {/* Section Header */}
      <ScrollReveal direction="down">
        <div className="flex items-center justify-between text-xs font-mono uppercase tracking-[0.2em] text-neutral-400 mb-14">
          <div className="flex items-center gap-2">
            <span className="text-[#ff5500] font-bold">|</span>
            <span className="text-white font-medium">EXPERIENCE & TRACK RECORD</span>
          </div>
          <div className="text-neutral-400">
            <span>02 / 05</span>
          </div>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Work Experience Cards (8 cols) */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          {experiences.map((exp, idx) => (
            <ScrollReveal key={idx} direction="up" delay={idx * 150} duration={650}>
              <div className="p-8 rounded-2xl bg-[#0c0c10] border border-white/[0.07] hover:border-[#ff5500]/40 transition-all duration-300 relative group overflow-hidden hover:-translate-y-1">
                {/* Subtle accent hover wash */}
                <div className="absolute top-0 right-0 w-36 h-36 bg-[#ff5500]/5 rounded-bl-full pointer-events-none group-hover:bg-[#ff5500]/10 transition-colors" />

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="font-display font-bold text-xl md:text-2xl text-white">
                        {exp.role}
                      </h3>
                      {exp.status === 'CURRENT' && (
                        <span className="px-2.5 py-0.5 rounded-full bg-[#ff5500]/15 text-[#ff5500] border border-[#ff5500]/30 text-[10px] font-mono font-semibold tracking-wider">
                          ACTIVE
                        </span>
                      )}
                    </div>
                    <p className="text-[#ff5500] font-medium text-sm mt-1">
                      {exp.company}
                    </p>
                  </div>

                  <div className="text-left sm:text-right font-mono text-xs text-neutral-400">
                    <div className="flex items-center sm:justify-end gap-1.5 text-neutral-300">
                      <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center sm:justify-end gap-1.5 text-neutral-400 mt-1">
                      <MapPin className="w-3 h-3" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Bullet Points */}
                <ul className="space-y-2.5 my-6 text-neutral-300 text-sm leading-relaxed">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff5500] mt-2 shrink-0"></span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.06]">
                  {exp.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx}
                      className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.06] text-xs font-mono text-neutral-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Right Column: Education & Certifications (4 cols) */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          
          {/* Education Box */}
          <ScrollReveal direction="left" delay={200} duration={650}>
            <div className="p-7 rounded-2xl bg-[#0c0c10] border border-white/[0.07] hover:border-white/15 transition-all relative">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#ff5500] block mb-2">
                ACADEMIC DEGREE
              </span>
              <h4 className="font-display font-bold text-lg text-white mb-1">
                B.Tech in Computer Science and Engineering
              </h4>
              <p className="text-neutral-300 text-sm font-medium">
                SRM Institute of Science and Technology
              </p>
              <p className="text-xs font-mono text-neutral-400 mt-1">
                Chennai, India · 2021 — 2025
              </p>
              <div className="mt-4 pt-4 border-t border-white/[0.06] text-xs text-neutral-400 leading-relaxed">
                Curriculum focused on Advanced Data Structures, Algorithms, Distributed Computing, Database Architectures, and Applied Machine Learning.
              </div>
            </div>
          </ScrollReveal>

          {/* Certifications Box */}
          <ScrollReveal direction="left" delay={350} duration={650}>
            <div className="p-7 rounded-2xl bg-[#0c0c10] border border-white/[0.07] hover:border-white/15 transition-all flex-1">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#ff5500]">
                  ACCREDITATIONS
                </span>
                <Award className="w-4 h-4 text-[#ff5500]" />
              </div>

              <div className="space-y-3.5">
                {certifications.map((cert, cIdx) => (
                  <div key={cIdx} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:border-[#ff5500]/30 transition-colors">
                    <h5 className="font-medium text-xs text-white leading-snug">
                      {cert.title}
                    </h5>
                    <div className="flex items-center justify-between mt-2 text-[11px] font-mono text-neutral-400">
                      <span>{cert.issuer}</span>
                      <span className="text-neutral-400">{cert.year}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

        </div>

      </div>

    </section>
  );
}
