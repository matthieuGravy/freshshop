import { useEffect } from "react";

import { Outlet } from "react-router-dom";

import Castpage from "./Castpage/Castpage";
import Wishlistpage from "./Wishlistpage/Wishlistpage";

import FetchFirstname from "../../components/Data/FetchFirstname";
import Heading from "../../components/JSXML/Heading";

const Profilepage = () => {
  const userId = localStorage.getItem("userId"); // Récupérez l'ID de l'utilisateur du local storage
  console.log(userId);
  let title = (
    <>
      Hi <FetchFirstname id={userId} />
    </>
  );
  let styleTitle = "text-3xl py-10 xl:ps-48 px-10";

  return (
    <div>
      <Heading level="h2" titre={title} className={styleTitle} />
      <Outlet />
    </div>
  );
};

export default Profilepage;
