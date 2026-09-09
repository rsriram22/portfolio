import React from "react";
import { useInView } from "react-intersection-observer";

const ScrollSectiontop = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.05,
    initialInView: true,
    fallbackInView: true,
  });

  return (
    <div
    //   ref={ref}
    //   className={`transition-all duration-700 transform ${inView ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
    ref={ref}
      className={`transition-all duration-700 transform ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-20"
      }`}
    >
      {children}
    </div>
  );
};

export default ScrollSectiontop;