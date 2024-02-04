import FetchProfile from "../../../components/Data/FetchProfile";
import Heading from "../../../components/JSXML/Heading";
import { ButtonAction } from "../../../components/Buttons";
import AccountForm from "../../../components/Form/AccountForm";
import { useState } from "react";

const Infopage = () => {
  const userId = localStorage.getItem("userId"); // Récupérez l'ID de l'utilisateur du local storage
  console.log(userId);
  const [isFormVisible, setFormVisible] = useState(false);

  const toggleForm = () => {
    setFormVisible(!isFormVisible);
  };

  return (
    <>
      <FetchProfile
        id={userId}
        classNameSection="p-4 bg-stone-100 m-auto rounded-lg place-items-center w-10/12 xl:w-1/2  mt-8"
        classNameSectionUl="grid grid-cols-2 gap-4 place-items-center	"
        classNameUlName=""
        classNameUlValue="text-right"
        classNameLi="py-2"
        fields={[
          { name: "Gender", getValue: (profile) => profile.genre },
          { name: "Firstname", getValue: (profile) => profile.firstname },
          { name: "Lastname", getValue: (profile) => profile.lastname },
          { name: "steet", getValue: (profile) => profile.street },
          { name: "houseNumber", getValue: (profile) => profile.houseNumber },
          { name: "city", getValue: (profile) => profile.city },
          { name: "country", getValue: (profile) => profile.country },
        ]}
      />
      <article className="text-center">
        <>
          <p className="pt-8 pb-4 text-stone-500">
            Do you want to change your information?
          </p>
          <ButtonAction text="Update" func={toggleForm}>
            Update My Information
          </ButtonAction>

          <section className="pt-12">
            {isFormVisible && (
              <AccountForm
                id={userId}
                children={
                  <Heading
                    level="h2"
                    titre="Complete the form to update your information"
                    className="text-center text-3xl font-medium mt-4 mb-6 w-8/12 m-auto"
                  />
                }
              />
            )}
          </section>
        </>
      </article>
    </>
  );
};

export default Infopage;
