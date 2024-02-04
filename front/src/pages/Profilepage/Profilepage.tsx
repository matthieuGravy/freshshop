import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import { RootState } from "../store/";
import FetchFirstname from "../../components/Data/FetchFirstname";
import Heading from "../../components/JSXML/Heading";
import Notconnected from "../../components/Notconnected";

const Profilepage = () => {
  const userId = localStorage.getItem("userId"); // Récupérez l'ID de l'utilisateur du local storage
  console.log(userId);
  const user = useSelector((state: RootState) => state.user);

  let title = (
    <>
      Hi <FetchFirstname id={userId} />
    </>
  );
  let styleTitle = "text-3xl py-10 xl:ps-48 px-10";

  return (
    <>
      {user ? (
        <>
          <Heading level="h2" titre={title} className={styleTitle} />
          <Outlet />
        </>
      ) : (
        <Notconnected />
      )}
    </>
  );
};

export default Profilepage;
