import React, { useState, useEffect, useRef } from "react";

export const useInView = (elementRef, options = {}) => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const target = elementRef.current; // Save the reference to a variable inside the effect
    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, options);

    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target); // Use the saved variable here
      }
    };
  }, [elementRef, options]);

  return isInView;
};

export default function Section({ children, className }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.1 });

  return (
    <section
      className={className}
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateX(-200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
    >
      {children}
    </section>
  );
}
