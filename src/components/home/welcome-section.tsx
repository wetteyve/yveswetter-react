import FadeInAnimation from "../fade-in/fadein-animation";
import data from "./data.json";
import yves from "../../assets/yves.jpg";

const WelcomeSection = () => {
  return (
    data && (
      <>
        <FadeInAnimation direction={"left"}>
          <div className="max-w-3xl">
            <h1 className="r-text-xl font-semibold pb-6">
              {data.welcomeHeading}
            </h1>
            <p className="r-text-m pb-12">{data.welcomeText}</p>
          </div>
        </FadeInAnimation>

        <FadeInAnimation direction={"right"}>
          <div className="max-w-[300px] sm:max-w-[450px] md:max-w-[600px] mx-auto">
            <img src={yves} alt="image yves wetter" />
          </div>
        </FadeInAnimation>
      </>
    )
  );
};

export default WelcomeSection;
