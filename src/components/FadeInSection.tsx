import React, { useEffect, useRef } from 'react';

const useFadeIn = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
};

export const FadeInSection: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
  const ref = useFadeIn();
  return (
    <div ref={ref} className={`fc-fade-in ${className}`}>
      {children}
    </div>
  );
};

export default FadeInSection;
