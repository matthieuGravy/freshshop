import WelcomeForm from "../../components/WelcomeForm";
import { HeroHome } from "../../components/Hero";
import Signup from "../../components/Signup";
import { HeroCat } from "../../components/Hero";
import Login from "../../components/Login";
import { NavlinkerButton } from "../../components/Buttons";
import Heading from "../../components/JSXML/Heading";
const Homepage = () => {
  let styleSectionOne = "bg-stone-50 xl:w-10/12 m-auto pt-12";
  let styleSectiontwo = "bg-stone-500";
  const title =
    "Embark on a Fresh Journey: Cultivate Well-being with Our Premium Selection of Fruits and Vegetables!";
  const styleTitle = "text-7xl py-10 xl:ps-48 px-10";
  return (
    <>
      <section className={styleSectionOne}>
        <HeroHome titre={<Heading titre={title} className={styleTitle} />} />
        <section className="w-full px-8 pb-8">
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
