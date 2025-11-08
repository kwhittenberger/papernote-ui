// Page Navigation Dots Component for notebook-style applications
// Auto-detects sections in the page and provides navigation dots in the gutter

import React, { useEffect, useState } from 'react';

interface Section {
  id: string;
  label: string;
}

export interface PageNavigationProps {
  className?: string;
}

export const PageNavigation: React.FC<PageNavigationProps> = ({ className = '' }) => {
  const [sections, setSections] = useState<Section[]>([]);
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    // Auto-detect sections with IDs in the page
    const detectSections = () => {
      const elements = document.querySelectorAll('[id^="section-"], [data-section]');
      const detected: Section[] = [];

      elements.forEach((el) => {
        const id = el.id || el.getAttribute('data-section') || '';
        const label = el.getAttribute('aria-label') || el.getAttribute('data-label') || id;
        if (id) {
          detected.push({ id, label });
        }
      });

      setSections(detected);
      if (detected.length > 0) {
        setActiveSection(detected[0].id);
      }
    };

    detectSections();
    // Re-detect on DOM mutations
    const observer = new MutationObserver(detectSections);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Scroll spy
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section.id) || document.querySelector(`[data-section="${section.id}"]`);
        if (element) {
          const { offsetTop, offsetHeight } = element as HTMLElement;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id) || document.querySelector(`[data-section="${id}"]`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (sections.length === 0) return null;

  return (
    <nav className={`page-nav ${className}`} aria-label="Page sections">
      <div className="page-nav-dots">
        {sections.map((section) => (
          <div
            key={section.id}
            className={`page-nav-dot ${activeSection === section.id ? 'active' : ''}`}
            role="button"
            tabIndex={0}
            aria-label={section.label}
            title={section.label}
            onClick={() => scrollToSection(section.id)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                scrollToSection(section.id);
              }
            }}
          />
        ))}
      </div>
    </nav>
  );
};

export default PageNavigation;
