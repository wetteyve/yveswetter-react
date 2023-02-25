import fingers from "../../assets/fingers.png";
import { Helmet } from "react-helmet";

const HomeContainer = () => {
  const title = "Home - Yves Wetter";
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
      <section className="h-[30vh]">Welcome Section</section>
      <section className="h-[30vh]">Skills Section</section>
      <section className="h-[30vh]">Image Section</section>
      <section className="h-[30vh]">Projects Section</section>
      <section>
        <img className="mx-auto" src={fingers} alt="thumbs-up" />
      </section>
    </div>
  );
};

export default HomeContainer;
