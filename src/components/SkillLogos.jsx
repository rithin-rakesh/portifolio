import React from 'react';

// Custom-created high-fidelity SVG logos for every skill in Rithin's Technical Arsenal

export function SkillLogo({ name, className = "w-4 h-4" }) {
  const norm = name.toLowerCase().trim();

  // 1. LangGraph
  if (norm.includes('langgraph')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="5" cy="12" r="3" fill="#ff5500" />
        <circle cx="19" cy="6" r="3" fill="#ff8c00" />
        <circle cx="19" cy="18" r="3" fill="#ffaa00" />
        <path d="M7.8 10.8L16.2 7.2M7.8 13.2L16.2 16.8" stroke="#ff5500" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M19 9V15" stroke="#ffaa00" strokeWidth="1.4" strokeDasharray="2 2" />
      </svg>
    );
  }

  // 2. LangChain
  if (norm.includes('langchain')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="8" width="10" height="8" rx="4" stroke="#10b981" strokeWidth="1.8" />
        <rect x="11" y="8" width="10" height="8" rx="4" stroke="#059669" strokeWidth="1.8" />
        <circle cx="8" cy="12" r="1.5" fill="#10b981" />
        <circle cx="16" cy="12" r="1.5" fill="#059669" />
      </svg>
    );
  }

  // 3. CrewAI
  if (norm.includes('crewai')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="7" r="3" fill="#f43f5e" />
        <circle cx="6" cy="16" r="2.5" fill="#e11d48" />
        <circle cx="18" cy="16" r="2.5" fill="#e11d48" />
        <path d="M9 15L12 9L15 15" stroke="#f43f5e" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }

  // 4. AutoGen
  if (norm.includes('autogen')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3L20 7.5V16.5L12 21L4 16.5V7.5L12 3Z" stroke="#06b6d4" strokeWidth="1.6" />
        <circle cx="12" cy="12" r="3" fill="#0891b2" />
        <path d="M12 7V9M12 15V17M7.5 14.5L9.5 13.5M16.5 9.5L14.5 10.5" stroke="#06b6d4" strokeWidth="1.4" />
      </svg>
    );
  }

  // 5. Browser-use
  if (norm.includes('browser-use') || norm.includes('browser use')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="4" width="18" height="16" rx="3" stroke="#8b5cf6" strokeWidth="1.6" />
        <line x1="3" y1="8" x2="21" y2="8" stroke="#8b5cf6" strokeWidth="1.2" />
        <circle cx="6" cy="6" r="1" fill="#8b5cf6" />
        <circle cx="9" cy="6" r="1" fill="#8b5cf6" />
        <path d="M11 12L15 16M15 12L11 16" stroke="#a78bfa" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    );
  }

  // 6. Ollama
  if (norm.includes('ollama')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 5C9 3.5 10 2 12 2C14 2 15 3.5 15 5V9H17C18.5 9 20 10.5 20 12V18C20 20 18 21 16 21H8C6 21 4 20 4 18V12C4 10.5 5.5 9 7 9H9V5Z" stroke="#e2e8f0" strokeWidth="1.6" />
        <circle cx="9" cy="13" r="1.2" fill="#e2e8f0" />
        <circle cx="15" cy="13" r="1.2" fill="#e2e8f0" />
      </svg>
    );
  }

  // 7. Hugging Face
  if (norm.includes('hugging')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="9" fill="#fbbf24" fillOpacity="0.2" stroke="#f59e0b" strokeWidth="1.6" />
        <circle cx="9" cy="10" r="1.5" fill="#f59e0b" />
        <circle cx="15" cy="10" r="1.5" fill="#f59e0b" />
        <path d="M8 14C9.5 16 14.5 16 16 14" stroke="#f59e0b" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    );
  }

  // 8. Prompt Engineering
  if (norm.includes('prompt')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 17L10 12L4 7" stroke="#ec4899" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="12" y1="17" x2="19" y2="17" stroke="#ec4899" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="18" cy="8" r="1.5" fill="#f472b6" />
      </svg>
    );
  }

  // 9. RAG Systems
  if (norm.includes('rag')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="4" width="11" height="14" rx="2" stroke="#38bdf8" strokeWidth="1.6" />
        <circle cx="15" cy="15" r="4" fill="#0284c7" fillOpacity="0.3" stroke="#38bdf8" strokeWidth="1.5" />
        <line x1="18" y1="18" x2="21" y2="21" stroke="#38bdf8" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  // 10. Human-in-the-Loop
  if (norm.includes('human') || norm.includes('hitl')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L4 5V11C4 16.5 7.5 21 12 22C16.5 21 20 16.5 20 11V5L12 2Z" stroke="#10b981" strokeWidth="1.6" fill="#10b981" fillOpacity="0.1" />
        <path d="M9 12L11 14L15 10" stroke="#10b981" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  // 11. PyTorch
  if (norm.includes('pytorch')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.5 3C13.5 3 15 6 12 8C9 10 9 13 12 15C15 17 14 21 14 21C14 21 19 18 19 13C19 8 13.5 3 13.5 3Z" fill="#ee4c2c" />
        <circle cx="15" cy="7" r="1.5" fill="#ffa07a" />
      </svg>
    );
  }

  // 12. TensorFlow
  if (norm.includes('tensorflow')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L4 6.5V17.5L12 22L20 17.5V6.5L12 2Z" fill="#ff6f00" fillOpacity="0.2" stroke="#ff6f00" strokeWidth="1.6" />
        <path d="M12 6V18M7 9H17" stroke="#ff8f00" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  // 13. Scikit-learn
  if (norm.includes('scikit')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="7" cy="7" r="3.5" stroke="#f59e0b" strokeWidth="1.6" fill="#f59e0b" fillOpacity="0.2" />
        <circle cx="16" cy="16" r="4.5" stroke="#0284c7" strokeWidth="1.6" fill="#0284c7" fillOpacity="0.2" />
        <line x1="10" y1="9" x2="13" y2="13" stroke="#94a3b8" strokeWidth="1.4" strokeDasharray="2 2" />
      </svg>
    );
  }

  // 14. CNNs
  if (norm.includes('cnn')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="7" height="7" stroke="#3b82f6" strokeWidth="1.4" fill="#3b82f6" fillOpacity="0.15" />
        <rect x="14" y="3" width="7" height="7" stroke="#3b82f6" strokeWidth="1.4" fill="#3b82f6" fillOpacity="0.15" />
        <rect x="8.5" y="14" width="7" height="7" stroke="#60a5fa" strokeWidth="1.6" fill="#60a5fa" fillOpacity="0.25" />
        <path d="M7 10L10 14M17 10L14 14" stroke="#93c5fd" strokeWidth="1.2" />
      </svg>
    );
  }

  // 15. Transfer Learning
  if (norm.includes('transfer')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="6" cy="12" r="3" fill="#6366f1" />
        <circle cx="18" cy="12" r="3" fill="#818cf8" />
        <path d="M9 12H15M13 9L16 12L13 15" stroke="#a5b4fc" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  // 16. Supervised Learning
  if (norm.includes('supervised') && !norm.includes('unsupervised')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="4" y1="20" x2="20" y2="4" stroke="#10b981" strokeWidth="1.8" />
        <circle cx="7" cy="14" r="1.5" fill="#ef4444" />
        <circle cx="10" cy="17" r="1.5" fill="#ef4444" />
        <circle cx="14" cy="7" r="1.5" fill="#3b82f6" />
        <circle cx="17" cy="10" r="1.5" fill="#3b82f6" />
      </svg>
    );
  }

  // 17. Unsupervised Learning
  if (norm.includes('unsupervised')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="7" cy="8" r="1.5" fill="#a855f7" />
        <circle cx="9" cy="6" r="1.5" fill="#a855f7" />
        <circle cx="8" cy="10" r="1.5" fill="#a855f7" />
        <circle cx="16" cy="16" r="1.5" fill="#06b6d4" />
        <circle cx="18" cy="14" r="1.5" fill="#06b6d4" />
        <circle cx="15" cy="18" r="1.5" fill="#06b6d4" />
      </svg>
    );
  }

  // 18. Model Evaluation / Confusion Matrix
  if (norm.includes('model') || norm.includes('confusion')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="4" width="7" height="7" fill="#10b981" fillOpacity="0.4" stroke="#10b981" strokeWidth="1.2" />
        <rect x="13" y="4" width="7" height="7" fill="#ef4444" fillOpacity="0.2" stroke="#ef4444" strokeWidth="1.2" />
        <rect x="4" y="13" width="7" height="7" fill="#ef4444" fillOpacity="0.2" stroke="#ef4444" strokeWidth="1.2" />
        <rect x="13" y="13" width="7" height="7" fill="#10b981" fillOpacity="0.4" stroke="#10b981" strokeWidth="1.2" />
      </svg>
    );
  }

  // 19. Neural Optimization
  if (norm.includes('neural') || norm.includes('optimization')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 6C8 6 10 18 14 18C17 18 19 14 20 12" stroke="#f59e0b" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="14" cy="18" r="2" fill="#ef4444" />
      </svg>
    );
  }

  // 20. Python
  if (norm.includes('python')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.9 2C8.5 2 6.5 3.5 6.5 5.5V8H12V9H4.5C2.8 9 2 10.3 2 12.5C2 14.8 3.2 16 5 16H6.5V14C6.5 12.3 7.8 11 9.5 11H14.5C15.9 11 17 9.9 17 8.5V5.5C17 3.5 15.2 2 11.9 2ZM9 4C9.6 4 10 4.4 10 5C10 5.6 9.6 6 9 6C8.4 6 8 5.6 8 5C8 4.4 8.4 4 9 4Z" fill="#387eb8" />
        <path d="M12.1 22C15.5 22 17.5 20.5 17.5 18.5V16H12V15H19.5C21.2 15 22 13.7 22 11.5C22 9.2 20.8 8 19 8H17.5V10C17.5 11.7 16.2 13 14.5 13H9.5C8.1 13 7 14.1 7 15.5V18.5C7 20.5 8.8 22 12.1 22ZM15 20C14.4 20 14 19.6 14 19C14 18.4 14.4 18 15 18C15.6 18 16 18.4 16 19C16 19.6 15.6 20 15 20Z" fill="#ffe052" />
      </svg>
    );
  }

  // 21. Pandas
  if (norm.includes('pandas')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="3" width="4" height="18" rx="1.5" fill="#130654" stroke="#6366f1" strokeWidth="1.2" />
        <rect x="10" y="7" width="4" height="14" rx="1.5" fill="#e70488" stroke="#f43f5e" strokeWidth="1.2" />
        <rect x="16" y="11" width="4" height="10" rx="1.5" fill="#ffca00" stroke="#f59e0b" strokeWidth="1.2" />
      </svg>
    );
  }

  // 22. NumPy
  if (norm.includes('numpy')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="4" width="16" height="16" rx="2" stroke="#4dabcf" strokeWidth="1.6" fill="#013243" />
        <text x="12" y="16" fill="#4dabcf" fontSize="11" fontWeight="bold" fontFamily="monospace" textAnchor="middle">N</text>
      </svg>
    );
  }

  // 23. Feature Engineering
  if (norm.includes('feature')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="3" stroke="#f97316" strokeWidth="1.6" />
        <path d="M12 4V7M12 17V20M4 12H7M17 12H20M6.3 6.3L8.5 8.5M15.5 15.5L17.7 17.7M6.3 17.7L8.5 15.5M15.5 8.5L17.7 6.3" stroke="#fb923c" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    );
  }

  // 24. EDA / Data Cleaning
  if (norm.includes('eda') || norm.includes('cleaning')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="10" cy="10" r="6" stroke="#10b981" strokeWidth="1.6" />
        <line x1="14.5" y1="14.5" x2="20" y2="20" stroke="#10b981" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M7 10H13M10 7V13" stroke="#34d399" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    );
  }

  // 25. Matplotlib / Seaborn
  if (norm.includes('matplotlib') || norm.includes('seaborn')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 19L9 11L14 15L20 6" stroke="#38bdf8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="9" cy="11" r="2" fill="#0284c7" />
        <circle cx="14" cy="15" r="2" fill="#0284c7" />
        <circle cx="20" cy="6" r="2" fill="#38bdf8" />
      </svg>
    );
  }

  // 26. Power BI
  if (norm.includes('power bi') || norm.includes('powerbi')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="12" width="3.5" height="9" rx="1" fill="#facc15" />
        <rect x="9.5" y="8" width="3.5" height="13" rx="1" fill="#eab308" />
        <rect x="15" y="4" width="3.5" height="17" rx="1" fill="#ca8a04" />
      </svg>
    );
  }

  // 27. Statistical Modeling
  if (norm.includes('statistical') || norm.includes('modeling')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 19C7 19 9 5 12 5C15 5 17 19 21 19" stroke="#c084fc" strokeWidth="1.6" strokeLinecap="round" />
        <line x1="12" y1="5" x2="12" y2="19" stroke="#c084fc" strokeWidth="1" strokeDasharray="2 2" />
      </svg>
    );
  }

  // 28. SQL / MySQL
  if (norm.includes('sql') || norm.includes('mysql')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="12" cy="6" rx="8" ry="3" stroke="#00758f" strokeWidth="1.6" fill="#00758f" fillOpacity="0.2" />
        <path d="M4 6V12C4 13.7 7.6 15 12 15C16.4 15 20 13.7 20 12V6" stroke="#00758f" strokeWidth="1.6" />
        <path d="M4 12V18C4 19.7 7.6 21 12 21C16.4 21 20 19.7 20 18V12" stroke="#00758f" strokeWidth="1.6" />
      </svg>
    );
  }

  // 29. Supabase / PostgreSQL
  if (norm.includes('supabase') || norm.includes('postgresql')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.5 2L4 13H11.5L9.5 22L20 9.5H12.5L14 2H12.5Z" fill="#3ecf8e" />
      </svg>
    );
  }

  // 30. AWS
  if (norm.includes('aws')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 14C10 17 14 17 18 14" stroke="#ff9900" strokeWidth="2" strokeLinecap="round" />
        <path d="M16.5 13L18.5 14L17 16" stroke="#ff9900" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="8" cy="8" r="2" fill="#ff9900" />
        <circle cx="16" cy="8" r="2" fill="#ff9900" />
      </svg>
    );
  }

  // 31. Playwright
  if (norm.includes('playwright')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="9" cy="11" r="5" stroke="#2e9b46" strokeWidth="1.6" fill="#2e9b46" fillOpacity="0.15" />
        <circle cx="15" cy="13" r="5" stroke="#ba1238" strokeWidth="1.6" fill="#ba1238" fillOpacity="0.15" />
      </svg>
    );
  }

  // 32. Chrome DevTools (CDP)
  if (norm.includes('chrome') || norm.includes('cdp')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="8" stroke="#4285f4" strokeWidth="1.6" />
        <circle cx="12" cy="12" r="3.5" fill="#4285f4" />
      </svg>
    );
  }

  // 33. PyWinAuto
  if (norm.includes('pywinauto')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="4" width="7" height="7" fill="#00adef" />
        <rect x="13" y="4" width="7" height="7" fill="#00adef" />
        <rect x="4" y="13" width="7" height="7" fill="#00adef" />
        <rect x="13" y="13" width="7" height="7" fill="#00adef" />
      </svg>
    );
  }

  // 34. FastAPI
  if (norm.includes('fastapi')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="9" stroke="#059669" strokeWidth="1.6" fill="#059669" fillOpacity="0.15" />
        <path d="M12 5L7 13H12L11 19L17 11H12L13 5H12Z" fill="#10b981" />
      </svg>
    );
  }

  // 35. Git & GitHub
  if (norm.includes('git')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="6" cy="18" r="2.5" fill="#f05032" />
        <circle cx="6" cy="6" r="2.5" fill="#f05032" />
        <circle cx="18" cy="10" r="2.5" fill="#f05032" />
        <line x1="6" y1="8.5" x2="6" y2="15.5" stroke="#f05032" strokeWidth="1.6" />
        <path d="M6 12C9 12 12 10 15.5 10" stroke="#f05032" strokeWidth="1.6" />
      </svg>
    );
  }

  // 36. Linux
  if (norm.includes('linux')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="12" cy="14" rx="6" ry="7" fill="#f8fafc" fillOpacity="0.2" stroke="#e2e8f0" strokeWidth="1.6" />
        <ellipse cx="12" cy="6" rx="3.5" ry="4" stroke="#e2e8f0" strokeWidth="1.4" />
        <circle cx="10.5" cy="5.5" r="0.8" fill="#e2e8f0" />
        <circle cx="13.5" cy="5.5" r="0.8" fill="#e2e8f0" />
        <path d="M11 7.5L12 8.5L13 7.5" stroke="#eab308" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    );
  }

  // 37. Docker
  if (norm.includes('docker')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 13C2 13 4 11 8 11C12 11 14 13 18 13C21 13 22 11 22 11C22 16 18 19 12 19C5 19 2 15 2 13Z" fill="#0db7ed" fillOpacity="0.25" stroke="#0db7ed" strokeWidth="1.4" />
        <rect x="7" y="8" width="2" height="2" fill="#0db7ed" />
        <rect x="10" y="8" width="2" height="2" fill="#0db7ed" />
        <rect x="13" y="8" width="2" height="2" fill="#0db7ed" />
        <rect x="10" y="5" width="2" height="2" fill="#0db7ed" />
      </svg>
    );
  }

  // Default fallback badge icon
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="8" stroke="#ff5500" strokeWidth="1.5" fill="#ff5500" fillOpacity="0.1" />
      <circle cx="12" cy="12" r="2.5" fill="#ff5500" />
    </svg>
  );
}
