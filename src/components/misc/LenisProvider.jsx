import { createContext, useContext, useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

// Create the context
const LenisContext = createContext(null);

export const LenisProvider = ({ children }) => {
  const lenis = useRef(null);

  useEffect(() => {
    try {
      lenis.current = new Lenis({ smooth: true });

      const raf = (time) => {
        lenis.current.raf(time);
        requestAnimationFrame(raf);
      };

      requestAnimationFrame(raf);

      return () => {
        lenis.current.destroy(); // Cleanup when unmounting
      };
    } catch (error) {
      console.error("Error initializing Lenis:", error);
    }
  }, []);

  return (
    <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>
  );
};

// Custom hook to access Lenis instance
export const useLenis = () => {
  return useContext(LenisContext);
};

export default LenisProvider;
