import React from 'react';
import { X, Download, Printer, Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from 'lucide-react';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl bg-[#0e0e13] border border-white/10 rounded-2xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Action Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-[#121218]">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5500]"></span>
            <span className="font-mono text-xs uppercase tracking-wider text-neutral-300">
              Curriculum Vitae · Rithin Rakesh
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/10 text-neutral-300 hover:text-white font-mono text-xs transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="p-6 md:p-10 overflow-y-auto space-y-8 font-sans bg-[#0c0c10] text-[#e0e0e6]">
          
          {/* Header */}
          <div className="border-b border-white/10 pb-6">
            <h1 className="font-display font-extrabold text-3xl md:text-4xl text-white tracking-tight uppercase">
              RITHIN RAKESH
            </h1>
            <p className="text-sm font-mono text-[#ff5500] mt-1 font-semibold uppercase tracking-wider">
              AI/ML Engineer · Data Science · Agentic Systems
            </p>

            <div className="flex flex-wrap gap-y-2 gap-x-6 mt-4 text-xs font-mono text-neutral-400">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                Kannur, Kerala, India
              </span>
              <a href="tel:+918111855550" className="flex items-center gap-1.5 hover:text-white">
                <Phone className="w-3.5 h-3.5 text-neutral-400" />
                +91 81118 55550
              </a>
              <a href="mailto:rithinrakesh2002@gmail.com" className="flex items-center gap-1.5 hover:text-white">
                <Mail className="w-3.5 h-3.5 text-neutral-400" />
                rithinrakesh2002@gmail.com
              </a>
              <a href="https://github.com/rithin-rakesh" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-white">
                <Github className="w-3.5 h-3.5 text-neutral-400" />
                github.com/rithin-rakesh
              </a>
              <a href="https://linkedin.com/in/rithinrakesh" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-white">
                <Linkedin className="w-3.5 h-3.5 text-neutral-400" />
                linkedin.com/in/rithinrakesh
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-[#ff5500] font-bold mb-3">
              Professional Summary
            </h2>
            <p className="text-xs md:text-sm text-neutral-300 leading-relaxed font-normal">
              Aspiring AI/ML Engineer and Data Science fresher with a strong foundation in Python, machine learning, deep learning, data analysis, and Agentic AI. Hands-on experience developing AI-powered applications and intelligent automation systems, including resume-based job matching and multi-step application automation. Familiar with modern AI frameworks, LLM-based workflows, data processing, and production-oriented application development.
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-[#ff5500] font-bold mb-3">
              Education
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs md:text-sm">
              <div>
                <span className="font-bold text-white block">
                  B.Tech in Computer Science and Engineering
                </span>
                <span className="text-neutral-400">
                  SRM Institute of Science and Technology, Chennai, India
                </span>
              </div>
              <span className="font-mono text-xs text-neutral-400 mt-1 sm:mt-0">
                2021 — 2025
              </span>
            </div>
          </div>

          {/* Skills Breakdown */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-[#ff5500] font-bold mb-3">
              Technical Competencies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                <strong className="text-white block font-mono mb-1">Programming & AI:</strong>
                <span className="text-neutral-300">Python, Agentic AI, RAG, Generative AI, Deep Learning, Supervised and Unsupervised Learning</span>
              </div>
              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                <strong className="text-white block font-mono mb-1">Libraries & Frameworks:</strong>
                <span className="text-neutral-300">NumPy, Pandas, Matplotlib, Seaborn, Scikit-learn, Transfer Learning (CNNs)</span>
              </div>
              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                <strong className="text-white block font-mono mb-1">Data & Databases:</strong>
                <span className="text-neutral-300">Data Cleaning, EDA, Feature Engineering, SQL, MySQL, Power BI</span>
              </div>
              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                <strong className="text-white block font-mono mb-1">Automation & Tools:</strong>
                <span className="text-neutral-300">Playwright, CDP, JobSpy, Apify, PyWinAuto, Git, GitHub, AWS</span>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-[#ff5500] font-bold mb-4">
              Work Experience
            </h2>

            <div className="space-y-6">
              {/* Role 1 */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs md:text-sm">
                  <div>
                    <h3 className="font-bold text-white">AI Intern</h3>
                    <span className="text-[#ff5500]">Leniko Solutions</span>
                  </div>
                  <span className="font-mono text-xs text-neutral-400 mt-1 sm:mt-0">
                    July 2026 — Present
                  </span>
                </div>
                <ul className="mt-2.5 space-y-1.5 text-xs text-neutral-300">
                  <li className="flex items-start gap-2">
                    <span className="text-[#ff5500]">•</span>
                    <span>Developing production-ready AI applications using Agentic AI architectures and Large Language Models.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#ff5500]">•</span>
                    <span>Building intelligent multi-agent workflows for automation, information retrieval, and business process optimization.</span>
                  </li>
                </ul>
              </div>

              {/* Role 2 */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs md:text-sm">
                  <div>
                    <h3 className="font-bold text-white">Python Data Science Intern</h3>
                    <span className="text-[#ff5500]">Luminar Technolab · Calicut, Kerala</span>
                  </div>
                  <span className="font-mono text-xs text-neutral-400 mt-1 sm:mt-0">
                    September 2025 — April 2026
                  </span>
                </div>
                <ul className="mt-2.5 space-y-1.5 text-xs text-neutral-300">
                  <li className="flex items-start gap-2">
                    <span className="text-[#ff5500]">•</span>
                    <span>Performed data cleaning, preprocessing, and exploratory data analysis on structured datasets.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#ff5500]">•</span>
                    <span>Built and optimized predictive models using machine learning and deep learning techniques.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#ff5500]">•</span>
                    <span>Implemented neural networks and transfer learning models to solve complex classification problems.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-[#ff5500] font-bold mb-4">
              Featured Engineering Projects
            </h2>

            <div className="space-y-4 text-xs">
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-white">Agentic AI Job Application Agent</h3>
                  <span className="font-mono text-neutral-400">2026 — Present</span>
                </div>
                <ul className="mt-1.5 space-y-1 text-neutral-300">
                  <li>• Developed an end-to-end AI-powered job application platform using Python, FastAPI, LangGraph, NVIDIA NIM, Supabase/PostgreSQL, JobSpy, and Apify, integrating job discovery, candidate profiling, matching, and application workflows.</li>
                  <li>• Built a multi-source job discovery and intelligent matching pipeline with normalization, deduplication, semantic and deterministic matching across skills, experience, education, location, salary, and job type.</li>
                  <li>• Implemented LLM-powered candidate screening and application assistance with resume/profile grounding, candidate answer management, eligibility validation, and human-in-the-loop approval to prevent unsupported responses.</li>
                  <li>• Integrated browser-based application automation for Indeed and Glassdoor using Playwright/CDP and PyWinAuto, with application state management, CAPTCHA/MFA handling, daily limits, duplicate detection, failure recovery, and persistent workflow state.</li>
                </ul>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-white">Brain Tumor Classification using Transfer Learning</h3>
                  <span className="font-mono text-neutral-400">2025</span>
                </div>
                <ul className="mt-1.5 space-y-1 text-neutral-300">
                  <li>• Analyzed medical image datasets and applied data preprocessing techniques.</li>
                  <li>• Built classification models using transfer learning to improve prediction accuracy.</li>
                  <li>• Evaluated model performance using accuracy and confusion matrix metrics.</li>
                </ul>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-white">Bank Loan Fraud Detection using Machine Learning</h3>
                  <span className="font-mono text-neutral-400">2025</span>
                </div>
                <ul className="mt-1.5 space-y-1 text-neutral-300">
                  <li>• Processed and analyzed large structured datasets using Machine Learning techniques.</li>
                  <li>• Predicted if the client is genuine or not using input features.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-[#ff5500] font-bold mb-3">
              Certifications & Honors
            </h2>
            <div className="space-y-1.5 text-xs text-neutral-300">
              <p>• Coursera Supervised Machine Learning: Regression and Classification</p>
              <p>• AWS Academy Graduate — Machine Learning Foundations</p>
              <p>• AWS Academy Graduate — Cloud Foundations</p>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-white/[0.08] bg-[#121218] flex items-center justify-between">
          <span className="text-xs font-mono text-neutral-400">
            Validated against Resume · Updated 2026
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-[#ff5500] hover:bg-[#ff6c1a] text-white text-xs font-medium transition-colors"
          >
            Close View
          </button>
        </div>

      </div>
    </div>
  );
}
