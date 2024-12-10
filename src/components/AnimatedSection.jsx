import React from "react";
import { useInView } from "react-intersection-observer";

const AnimatedSection = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Anima apenas uma vez
    threshold: 0.1, // Elemento deve estar 10% visível para ativar
  });

  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
