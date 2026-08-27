import React, { useEffect, useState } from 'react';

export const ScrollProgress: React.FC = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      
      const totalScrollable = documentHeight - windowHeight;
      if (totalScrollable > 0) {
        const percentage = Math.min(100, Math.max(0, (scrollTop / totalScrollable) * 100));
        setScrollPercentage(percentage);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[3.5px] z-50 pointer-events-none bg-slate-900/20 backdrop-blur-xs">
      <div
        className="h-full bg-gradient-to-r from-brand-600 via-brand-500 to-accent-amber shadow-[0_0_12px_rgba(239,68,68,0.8)] transition-all duration-75 ease-out"
        style={{ width: `${scrollPercentage}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollPercentage)}
        aria-valuemin={0}
        aria-valuemax={100}
      />
    </div>
  );
};

