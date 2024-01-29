import WelcomeForm from "../../components/WelcomeForm";
import Login from "../../components/Login";
import { NavlinkerButton } from "../../components/Buttons";
const Loginpage = () => {
  return (
    <div>
      <h1>Loginpage</h1>
      <WelcomeForm
        link="/shop"
        textlink="Voir les produits"
        childrenarticle={
          <>
            <p>Vous êtes bien connecté</p>{" "}
            <NavlinkerButton to="/shop" text="Voir les produits" />
          </>
        }
        children={<Login />}
      />
    </div>
  );
};

export default Loginpage;
