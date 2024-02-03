import AccountForm from "../../../components/Form/AccountForm";
import Heading from "../../../components/JSXML/Heading";
const accountpage = () => {
  const userId = localStorage.getItem("userId"); // Récupérez l'ID de l'utilisateur du local storage
  console.log(userId); // <console>
  const styleHeading = "text-center text-3xl font-medium mt-4 mb-4";

  return (
    <div>
      <h1>Accountpage</h1>

      <AccountForm
        id={userId}
        children={
          <Heading
            level="h2"
            titre="Change your profile informations"
            className={styleHeading}
          />
        }
      />
    </div>
  );
};

export default accountpage;
