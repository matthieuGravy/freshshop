import WelcomeLogged from "../../components/WelcomeLogged";
import { HeroHome } from "../../components/Hero";
import Signup from "../../components/Signup";
const Homepage = () => {
  let styleSectionOne = "bg-green-50 xl:w-10/12 m-auto";
  let styleSectiontwo = "bg-stone-500";
  return (
    <>
      <section className={styleSectionOne}>
        <HeroHome />
        <WelcomeLogged />
      </section>
      <section className={styleSectiontwo}>
        <h2>section</h2>
        <Signup />
      </section>
    </>
  );
};

export default Homepage;
