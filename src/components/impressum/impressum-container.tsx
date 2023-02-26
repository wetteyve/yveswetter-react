import { Helmet } from "react-helmet";
import FadeInAnimation from "../fade-in/fadein-animation";
import data from "./data.json";

const ImpressumContainer = () => {
  const title = "Impressum | Yves Wetter";
  const description = "Impressum yveswetter.ch";

  return (
    <div>
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
      <FadeInAnimation direction={"left"}>
        <h1 className="r-text-xl font-semibold pb-6">{data.title}</h1>
        <div className="grid grid-cols-2">
          <span>{"Name"}</span>
          <span>{data.fullName}</span>
          <span>{"Country"}</span>
          <span>{data.country}</span>
          <span>{"Email"}</span>
          <span>{data.email}</span>
          <span>{`Copyright © ${new Date().getFullYear()} by Yves Wetter`}</span>
          <span>{data.disclaimer}</span>
        </div>
      </FadeInAnimation>
    </div>
  );
};

export default ImpressumContainer;
