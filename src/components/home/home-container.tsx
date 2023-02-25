import fingers from "../../assets/fingers.png";

const HomeContainer = () => {
  return (
    <div className="z-10">
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
