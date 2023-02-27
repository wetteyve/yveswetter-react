import { useRef } from "react";
import {
  fadeInObserver,
  useIntersectionObserver,
} from "../../utils/intersection-observer";
import data from "./data.json";

const SkillsSection = () => {
  const introRef = useRef<HTMLDivElement>(null);
  useIntersectionObserver(introRef, fadeInObserver);

  return (
    <div className="opacity-0 pb-12" ref={introRef} data-origin="bottom">
      <h1 className="r-text-xl font-semibold pb-6">{data.skillsHeading}</h1>
      <p className="r-text-m pb-12">{data.skillsIntroduction}</p>
      <div className="pb-6">
        <h2 className="r-text-m font-semibold pb-6">
          {data.skillsStacksTitle}
        </h2>
        hoi
      </div>
      <div className="pb-6">
        <h2 className="r-text-m font-semibold pb-6">
          {data.skillsFrontednTitle}
        </h2>
        hoi
      </div>
      <div className="pb-6">
        <h2 className="r-text-m font-semibold pb-6">
          {data.skillsBackendTitle}
        </h2>
        hoi
      </div>
      <div className="pb-6">
        <h2 className="r-text-m font-semibold pb-6">{data.skillsToolsTitle}</h2>
        hoi
      </div>
    </div>
  );
};

export default SkillsSection;
