import React, { useEffect } from "react";

export const fadeInObserver = new IntersectionObserver(
  (entries) => {
    entries
      .filter((e) => e.isIntersecting)
      .forEach((entry, index) => {
        if (
          !(entry.target instanceof HTMLElement) &&
          !(entry.target instanceof SVGElement)
        )
          return;

        const origin = entry.target.getAttribute("data-origin") || "left";
        if (!entry.target.style.animationDelay)
          entry.target.style.animationDelay = `${800 * index}ms`;
        entry.target.classList.add(
          origin === "left" ? "fadeInFromLeft" : "fadeInFromRight"
        );
        fadeInObserver.unobserve(entry.target);
      });
  },
  {
    threshold: 0.3,
  }
);

export const useIntersectionObserver = (
  elementRef: React.MutableRefObject<Element | undefined | null>,
  observer: IntersectionObserver
) => {
  useEffect(() => {
    const currentRef = elementRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [elementRef, observer]);
};
