import Signup from "../../components/Signup";

import WelcomeForm from "../../components/WelcomeForm";
import { NavlinkerButton } from "../../components/Buttons";
const Registerpage = () => {
  return (
    <section>
      <WelcomeForm
        link="/shop"
        textlink="Voir les produits"
        childrenarticle={
          <>
            <p>Vous êtes bien connecté</p>
            <NavlinkerButton to="/shop" text="Voir les produits" />
          </>
        }
        children={<Signup />}
      />
    </section>
  );
};
export default Registerpage;
