import fingers from "../../assets/fingers.png";
import { Helmet } from "react-helmet";
import WelcomeSection from "./welcome-section";
import { useRef } from "react";
import {
  fadeInObserver,
  useIntersectionObserver,
} from "../../utils/intersection-observer";
import SkillsSection from "./skills-section";

const HomeContainer = () => {
  const fingersRef = useRef(null);
  useIntersectionObserver(fingersRef, fadeInObserver);

  const title = "Home | Yves Wetter";
  const description =
    "Portfolio for web-projects by Yves Wetter. Here you find some information about the most recent projects.";

  return (
    <div className="z-10">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="MakeThings, Makerspace, Kurs, Maschine, Arbeitsplatz, Freiraum, Space, Eventlocation"
        />
        <meta content={title} property="og:title" />
        <meta content={window.location.href} property="og:url" />
        <meta content={description} property="og:description" />
        <meta content="website" property="og:type" />
      </Helmet>
      <section>
        <WelcomeSection />
      </section>
      <section>
        <SkillsSection />
      </section>
      <section className="h-[30vh]">Projects Section</section>
      <section>
        <img
          ref={fingersRef}
          data-origin="bottom"
          className="mx-auto opacity-0"
          src={fingers}
          alt="thumbs-up"
        />
      </section>
    </div>
  );
};

export default HomeContainer;
