import { Outlet } from "react-router-dom";

import Castpage from "./Castpage/Castpage";
import Wishlistpage from "./Wishlistpage/Wishlistpage";

const Profilepage = () => {
  return (
    <div>
      <h1>My profile</h1>
      <Outlet />
    </div>
  );
};

export default Profilepage;
