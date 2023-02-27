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
        switch (origin) {
          case "left":
            entry.target.classList.add("fadeInFromLeft");
            break;
          case "right":
            entry.target.classList.add("fadeInFromRight");
            break;
          case "top":
            entry.target.classList.add("fadeInFromTop");
            break;
          case "bottom":
            entry.target.classList.add("fadeInFromBottom");
            break;
          default:
            entry.target.classList.add("fadeInFromLeft");
            break;
        }
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
