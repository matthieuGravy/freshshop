import WelcomeLogged from "../../components/WelcomeLogged";
import { HeroHome } from "../../components/Hero";
const Homepage = () => {
  return (
    <>
      <section className="bg-green-50">
        <HeroHome />
      </section>
      <WelcomeLogged />
      <h1>Homepage</h1>
    </>
  );
};

export default Homepage;
