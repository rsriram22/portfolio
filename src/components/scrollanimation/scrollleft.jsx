import React from "react";
import { useInView } from "react-intersection-observer";

const ScrollSectionleft = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.05,
    initialInView: true,
    fallbackInView: true,
  });

  return (
    <div
      // ref={ref}
      // className={`transition-all duration-700 transform ${inView ? "opacity-100  translate-x-0" : "opacity-0  -translate-x-20"}`}
    ref={ref}
      className={`transition-all duration-700 transform ${
        inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
      }`}
    >
      {children}
    </div>
  );
};

export default ScrollSectionleft;