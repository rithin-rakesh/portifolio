import React from 'react';
import { Briefcase, Calendar, MapPin, Award, CheckCircle2, GraduationCap, ArrowUpRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import TransparentLogo from './TransparentLogo';

export default function ExperienceSection() {
  // STRICTLY FROM RITHIN'S RESUME WITH VERIFIED LOGOS (TRANSPARENT BACKGROUNDS)
  const milestones = [
    {
      id: 'leniko',
      type: 'INDUSTRY EXPERIENCE',
      role: 'AI Intern',
      organization: 'Leniko Solutions',
      period: 'July 2026 - Present',
      location: 'India',
      status: 'Current Engagement',
      logo: '/logos/leniko.png',
      logoAlt: 'Leniko Solutions Logo',
      accentColor: '#bef264',
      glowClass: 'group-hover:border-[#bef264]/30',
      bullets: [
        'Developing production AI applications using LangGraph multi-agent workflows and Large Language Models.',
        'Building low-latency inference pipelines with NVIDIA NIM and FastAPI, backed by Supabase state checkpoints.'
      ],
      skills: ['LangGraph', 'NVIDIA NIM', 'FastAPI', 'Supabase', 'Multi-Agent Systems', 'Python']
    },
    {
      id: 'luminar',
      type: 'DATA SCIENCE INTERNSHIP',
      role: 'Data Science Intern',
      organization: 'Luminar Technolab',
      period: 'September 2025 - April 2026',
      location: 'Calicut, Kerala',
      status: 'Completed',
      logo: '/logos/luminar.png',
      logoAlt: 'Luminar Technolab Logo',
      accentColor: '#bef264',
      glowClass: 'group-hover:border-[#bef264]/30',
      bullets: [
        'Executed exploratory data analysis, statistical modeling, and feature engineering across structured datasets.',
        'Trained deep learning models and applied transfer learning to clinical MRI brain tumor classification.'
      ],
      skills: ['Python', 'Scikit-learn', 'PyTorch', 'Transfer Learning', 'CNNs', 'Pandas']
    },
    {
      id: 'srm',
      type: 'FORMAL ENGINEERING DEGREE',
      role: 'B.Tech in Computer Science',
      organization: 'SRM Institute of Science and Technology',
      period: '2021 - 2025',
      location: 'Chennai, Tamil Nadu, India',
      status: 'Degree Conferred',
      logo: '/logos/srm.png',
      logoAlt: 'SRM Institute of Science and Technology Logo',
      accentColor: '#bef264',
      glowClass: 'group-hover:border-[#bef264]/30',
      lightenDarkText: true,
      bullets: [
        'Graduated with a Bachelor of Technology in Computer Science and Engineering (2021 - 2025).',
        'Rigorous foundation in Data Structures, Algorithms, Relational Databases, and Artificial Intelligence.'
      ],
      skills: ['Algorithms', 'Data Structures', 'SQL / MySQL', 'Distributed Systems', 'AI Foundations']
    }
  ];

  // Official Resume Certifications
  const certifications = [
    {
      title: 'Supervised Machine Learning: Regression and Classification',
      issuer: 'DeepLearning.AI / Coursera',
      year: '2025',
      type: 'Machine Learning',
      badge: 'ML SPECIALIST'
    },
    {
      title: 'AWS Academy Graduate - Machine Learning Foundations',
      issuer: 'Amazon Web Services (AWS)',
      year: '2025',
      type: 'Cloud & AI',
      badge: 'AWS ML'
    },
    {
      title: 'AWS Academy Graduate - Cloud Foundations',
      issuer: 'Amazon Web Services (AWS)',
      year: '2024',
      type: 'Cloud Architecture',
      badge: 'AWS CLOUD'
    }
  ];

  return (
    <section id="experience" className="relative py-28 sm:py-36 px-6 sm:px-10 md:px-14 lg:px-20 max-w-[1520px] mx-auto border-t border-white/[0.08] overflow-hidden">
      
      {/* Top Editorial Index Bar */}
      <ScrollReveal direction="down">
        <div className="relative z-10 flex items-center justify-between text-xs font-mono uppercase tracking-[0.25em] text-neutral-400 mb-12 sm:mb-16 border-b border-white/[0.08] pb-4">
          <div className="flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff5500]" />
            <span className="text-white font-medium">02 // EXPERIENCE</span>
          </div>
          <div className="hidden md:block flex-1 mx-8 border-b border-dashed border-white/15" />
          <div className="text-neutral-400 font-mono text-[11px] tracking-[0.2em]">
            WORK EXPERIENCE & EDUCATION
          </div>
        </div>
      </ScrollReveal>

      {/* Main Headline */}
      <div className="relative z-10 mb-16 sm:mb-20">
        <ScrollReveal direction="up" delay={100}>
          <span className="text-xs font-mono uppercase tracking-[0.22em] text-[#bef264] font-medium block mb-3">
            CAREER TRAJECTORY · 2021 - PRESENT
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-bold leading-[1.08] text-white tracking-[-0.035em] max-w-4xl">
            Work Experience & Education
          </h2>
        </ScrollReveal>
        
        <ScrollReveal direction="up" delay={160}>
          <p className="mt-3 text-sm sm:text-base text-neutral-400 font-normal leading-relaxed max-w-2xl font-sans">
            Hands-on industry experience building multi-agent systems, data pipelines, and computer science engineering foundation.
          </p>
        </ScrollReveal>
      </div>

      {/* ======================================================== */}
      {/* 3 PRIMARY EXPERIENCE & EDUCATION MILESTONE CARDS        */}
      {/* (Logos rendered with 100% transparent backgrounds)      */}
      {/* ======================================================== */}
      <div className="relative z-10 space-y-8 mb-20">
        {milestones.map((item, idx) => (
          <ScrollReveal key={item.id} direction="up" delay={idx * 120}>
            <div 
              data-card="true"
              className={`p-7 sm:p-9 md:p-10 rounded-3xl bg-[#0c0c11] border border-white/10 ${item.glowClass} transition-all duration-300 relative overflow-hidden group shadow-2xl`}
            >

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
                
                {/* Left 4 Cols: Company/University Logo, Role, Meta */}
                <div className="lg:col-span-4 flex flex-col justify-between h-full">
                  <div>
                    {/* Transparent Logo Display (Zero background rectangle, perfectly transparent) */}
                    <div className="h-16 w-auto max-w-[240px] flex items-center justify-start mb-6">
                      <TransparentLogo 
                        src={item.logo} 
                        alt={item.logoAlt}
                        lightenDarkText={Boolean(item.lightenDarkText)}
                        className="max-h-14 max-w-full object-contain filter transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>

                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#bef264] font-semibold block mb-1">
                      {item.type}
                    </span>

                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight mb-2 group-hover:text-white transition-colors">
                      {item.role}
                    </h3>

                    <div className="text-sm font-sans font-medium text-neutral-300 mb-1">
                      {item.organization}
                    </div>

                    <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-4">
                      <MapPin className="w-3.5 h-3.5 text-neutral-500" />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/[0.06]">
                    <span className="inline-block px-3 py-1 rounded-full text-[11px] font-mono font-medium tracking-wider uppercase border border-white/15 bg-white/[0.03] text-neutral-300">
                      {item.period}
                    </span>
                  </div>
                </div>

                {/* Right 8 Cols: Detailed Accomplishments & Tech Arsenal */}
                <div className="lg:col-span-8 lg:border-l lg:border-white/[0.08] lg:pl-8 flex flex-col justify-between h-full">
                  
                  {/* Bullets with Asterisk style matching Reference Image 2 */}
                  <div className="space-y-3.5 mb-8">
                    {item.bullets.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-3">
                        <span className="text-[#bef264] font-bold text-sm mt-0.5 shrink-0">*</span>
                        <p className="text-xs sm:text-[14px] font-sans text-neutral-300 font-normal leading-relaxed">
                          {bullet}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Dashed Tech Stack Chips */}
                  <div className="pt-4 border-t border-white/[0.06]">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 block mb-2.5">
                      ASSOCIATED DISCIPLINES & TOOLS
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill, sIdx) => (
                        <span key={sIdx} className="dashed-chip font-kinetic-pill">
                          [ {skill} ]
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

              </div>

            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* ======================================================== */}
      {/* VERIFIED RESUME CERTIFICATIONS STRIP                     */}
      {/* ======================================================== */}
      <ScrollReveal direction="up" delay={250}>
        <div 
          data-card="true"
          className="p-7 sm:p-9 rounded-3xl bg-[#090810] border border-white/10 relative overflow-hidden"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-white/[0.08] mb-6">
            <div className="flex items-center gap-3">
              <Award className="w-5 h-5 text-[#ff5500]" />
              <span className="font-display text-base sm:text-lg font-bold text-white uppercase tracking-wider">
                CERTIFICATIONS
              </span>
            </div>
            <span className="font-mono text-xs text-[#ff5500] uppercase tracking-widest font-semibold">
              3 VERIFIED CREDENTIALS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, cIdx) => (
              <div 
                key={cIdx} 
                className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/20 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-[#ff5500] uppercase tracking-widest font-bold">
                      {cert.badge}
                    </span>
                    <span className="text-[11px] font-mono text-neutral-400">
                      {cert.year}
                    </span>
                  </div>
                  <h4 className="font-display text-sm font-bold text-white uppercase leading-snug mb-2">
                    {cert.title}
                  </h4>
                </div>
                <div className="pt-3 border-t border-white/[0.04] flex items-center justify-between text-xs font-sans text-neutral-400">
                  <span>{cert.issuer}</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </ScrollReveal>

    </section>
  );
}
