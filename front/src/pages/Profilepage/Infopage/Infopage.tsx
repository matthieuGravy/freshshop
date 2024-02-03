import FetchProfile from "../../../components/Data/FetchProfile";
import Heading from "../../../components/JSXML/Heading";

const Infopage = () => {
  const userId = localStorage.getItem("userId"); // Récupérez l'ID de l'utilisateur du local storage
  console.log(userId);
  const styleHeading = "text-center text-3xl font-medium mt-4 mb-4";
  const classNameUl = "grid grid-cols-2 gap-4 bg-red-200 p-4";
  return (
    <>
      <FetchProfile
        id={userId}
        classNameUl={classNameUl}
        children={
          <Heading
            level="h2"
            titre="Your profile informations"
            className={styleHeading}
          />
        }
      />
    </>
  );
};

export default Infopage;
