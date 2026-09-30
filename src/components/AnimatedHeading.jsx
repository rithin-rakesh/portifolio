import React, { useEffect, useRef, useState } from 'react';

/**
 * AnimatedHeading
 * High-end editorial typography animation for section headings.
 * - Restrained, agency-grade masked upward reveal
 * - Staggered words with hardware-accelerated translate3d
 * - Subtle letter-spacing expansion on eyebrow/kicker
 * - IntersectionObserver-driven with zero layout shift
 * - Fully accessible with prefers-reduced-motion support
 */
export default function AnimatedHeading({
  kicker,
  title,
  subtitle,
  className = '',
  titleClassName = '',
  kickerClassName = '',
  subtitleClassName = '',
  align = 'left',
  as: Component = 'h2',
  delay = 0
}) {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (containerRef.current) {
            observer.unobserve(containerRef.current);
          }
        }
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Split title into words for staggered masked reveal
  const words = typeof title === 'string' ? title.split(' ') : [];

  const alignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end'
  }[align] || 'text-left items-start';

  return (
    <div ref={containerRef} className={`flex flex-col ${alignClasses} ${className}`}>
      
      {/* Eyebrow / Kicker with tracking expansion */}
      {kicker && (
        <div className="overflow-hidden mb-3">
          <span
            className={`text-xs font-mono uppercase tracking-[0.22em] text-[#bef264] font-medium block transition-all duration-700 ease-out ${kickerClassName}`}
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translate3d(0, 0, 0)' : 'translate3d(0, 100%, 0)',
              transitionDelay: `${delay}ms`
            }}
          >
            {kicker}
          </span>
        </div>
      )}

      {/* Main Display Headline with Masked Word Slide */}
      <Component
        className={`font-display font-bold leading-[1.08] text-white tracking-[-0.035em] ${titleClassName}`}
      >
        {words.length > 0 ? (
          <span className="flex flex-wrap gap-x-[0.28em] gap-y-[0.08em]">
            {words.map((word, idx) => (
              <span key={idx} className="inline-block overflow-hidden py-1">
                <span
                  className="inline-block transition-transform duration-700 ease-out"
                  style={{
                    transform: isVisible ? 'translate3d(0, 0, 0)' : 'translate3d(0, 115%, 0)',
                    opacity: isVisible ? 1 : 0,
                    transitionDuration: '750ms',
                    transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                    transitionDelay: `${delay + 80 + idx * 45}ms`
                  }}
                >
                  {word}
                </span>
              </span>
            ))}
          </span>
        ) : (
          <span
            className="inline-block transition-all duration-700 ease-out"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translate3d(0, 0, 0)' : 'translate3d(0, 24px, 0)',
              transitionDelay: `${delay + 100}ms`
            }}
          >
            {title}
          </span>
        )}
      </Component>

      {/* Subtitle with soft fade-in */}
      {subtitle && (
        <div className="overflow-hidden mt-3">
          <p
            className={`font-sans text-neutral-400 font-normal leading-relaxed transition-all duration-700 ease-out ${subtitleClassName}`}
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translate3d(0, 0, 0)' : 'translate3d(0, 20px, 0)',
              transitionDelay: `${delay + 220}ms`
            }}
          >
            {subtitle}
          </p>
        </div>
      )}

    </div>
  );
}
