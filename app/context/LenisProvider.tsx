'use client';
import React, { createContext, useContext, useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

interface LenisContextType {
  lenis: Lenis | null;
  scrollTo: (target: Element | string, options?: any) => void;
}

const LenisContext = createContext<LenisContextType>({ 
  lenis: null, 
  scrollTo: () => {} 
});

export const useLenis = () => useContext(LenisContext);

export const LenisProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis once globally
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: false,
      wrapper: document.body,
      content: document.documentElement,
    });

    // Global animation frame loop
    function raf(time: number) {
      lenisRef.current?.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Cleanup on unmount
    return () => {
      lenisRef.current?.destroy();
    };
  }, []);

  const scrollTo = (target: Element | string, options?: any) => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(target, {
        duration: 1.5,
        easing: (t) => 1 - Math.pow(1 - t, 3),
        ...options,
      });
    }
  };

  return (
    <LenisContext.Provider value={{ lenis: lenisRef.current, scrollTo }}>
      {children}
    </LenisContext.Provider>
  );
};