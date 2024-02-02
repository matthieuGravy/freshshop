import AccountForm from "../../../components/Form/AccountForm";
import Heading from "../../../components/JSXML/Heading";
const accountpage = () => {
  const userId = localStorage.getItem("userId"); // Récupérez l'ID de l'utilisateur du local storage
  console.log(userId); // <console>

  return (
    <div>
      <h1>Accountpage</h1>

      <AccountForm id={userId} />
    </div>
  );
};

export default accountpage;
