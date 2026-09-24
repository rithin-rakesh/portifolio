import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import Footer from './components/Footer';
import AgentWorkflowModal from './components/AgentWorkflowModal';
import ResumeModal from './components/ResumeModal';
import ScrollProgressBar from './components/ScrollProgressBar';
import CustomCursor from './components/CustomCursor';

export default function App() {
  const [workflowModalOpen, setWorkflowModalOpen] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen ambient-canvas text-[#e4e4eb] antialiased selection:bg-[#ff5500] selection:text-white relative cursor-default">
      
      {/* Interactive Fluid Cursor Animation */}
      <CustomCursor />

      {/* Top Scroll Progress Indicator */}
      <ScrollProgressBar />

      {/* Persistent Floating Navbar (Reveals smoothly on scroll) */}
      <Navbar onOpenResume={() => setResumeModalOpen(true)} />

      {/* Main Content Layout with Fluid Scroll Flow */}
      <main className="relative z-10 flex flex-col">
        {/* Full-Bleed Sticky Hero Section */}
        <HeroSection onOpenResume={() => setResumeModalOpen(true)} />

        {/* The Page Coming From Under the Hero Section (Curtain Card Reveal) */}
        <div className="relative z-20 w-full bg-[#08070d] rounded-t-[2.5rem] sm:rounded-t-[3.5rem] lg:rounded-t-[4.5rem] shadow-[0_-35px_100px_rgba(0,0,0,0.95)] border-t border-white/15">
          {/* About Section */}
          <AboutSection />

          {/* Experience Section */}
          <ExperienceSection />

          {/* Projects Section with Horizontal Scroll Track */}
          <ProjectsSection onOpenWorkflow={() => setWorkflowModalOpen(true)} />

          {/* Skills Section */}
          <SkillsSection />

          {/* Contact & Footer Section */}
          <Footer onOpenResume={() => setResumeModalOpen(true)} />
        </div>
      </main>

      {/* Interactive Modals */}
      <AgentWorkflowModal 
        isOpen={workflowModalOpen} 
        onClose={() => setWorkflowModalOpen(false)} 
      />

      <ResumeModal 
        isOpen={resumeModalOpen} 
        onClose={() => setResumeModalOpen(false)} 
      />

    </div>
  );
}
