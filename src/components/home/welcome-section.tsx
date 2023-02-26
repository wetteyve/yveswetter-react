import FadeInAnimation from "../fade-in/fadein-animation";
import data from "./data.json";

const WelcomeSection = () => {
  return (
    data && (
      <FadeInAnimation direction={"left"}>
        <div className="max-w-3xl">
          <h1 className="r-text-xl font-semibold pb-6">
            {data.welcomeHeading}
          </h1>
          <p className="r-text-m pb-12">{data.welcomeText}</p>
        </div>
      </FadeInAnimation>
    )
  );
};

export default WelcomeSection;
