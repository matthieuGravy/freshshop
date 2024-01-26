import WelcomeLogged from "../../components/WelcomeLogged";
import { HeroHome } from "../../components/Hero";
import Signup from "../../components/Signup";
const Homepage = () => {
  return (
    <>
      <section className="bg-green-50">
        <HeroHome />
      </section>
      <WelcomeLogged />
      <h1>Homepage</h1>
      <Signup />
    </>
  );
};

export default Homepage;
