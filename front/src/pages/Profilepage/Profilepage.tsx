import { useEffect } from "react";

import { Outlet } from "react-router-dom";

import Castpage from "./Castpage/Castpage";
import Wishlistpage from "./Wishlistpage/Wishlistpage";

import FetchProfile from "../../components/Data/FetchProfile";

const Profilepage = () => {
  const userId = localStorage.getItem("userId"); // Récupérez l'ID de l'utilisateur du local storage
  console.log(userId);

  return (
    <div>
      <h1>My profile</h1>
      <FetchProfile id={userId} />
      <Outlet />
    </div>
  );
};

export default Profilepage;
