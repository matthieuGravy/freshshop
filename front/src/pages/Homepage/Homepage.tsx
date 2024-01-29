import WelcomeForm from "../../components/WelcomeForm";
import { HeroHome } from "../../components/Hero";
import Signup from "../../components/Signup";
import { HeroCat } from "../../components/Hero";
import Login from "../../components/Login";
import { NavlinkerButton } from "../../components/Buttons";

const Homepage = () => {
  let styleSectionOne = "bg-green-50 xl:w-10/12 m-auto";
  let styleSectiontwo = "bg-stone-500";
  return (
    <>
      <section className={styleSectionOne}>
        <HeroHome />
        <section className="bg-green-50 w-full px-8 pb-8">
          <WelcomeForm
            children={
              <>
                <HeroCat
                  linkone={<NavlinkerButton to="/signup" text="Sign up" />}
                  linktwo={<NavlinkerButton to="/contact" text="Contact" />}
                >
                  <Login />
                </HeroCat>
              </>
            }
          />
        </section>
      </section>
      <section className={styleSectiontwo}>
        <h2>section</h2>
      </section>
    </>
  );
};

export default Homepage;
