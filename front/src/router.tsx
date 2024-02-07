import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Homepage from "./pages/Homepage/Homepage";
import Aboutpage from "./pages/Aboutpage/Aboutpage";
import Shoppage from "./pages/Shoppage/Shoppage";
import Registerpage from "./pages/Registerpage/Registerpage";
import Profilepage from "./pages/Profilepage/Profilepage";
import Loginpage from "./pages/Loginpage/Loginpage";
import Castpage from "./pages/Profilepage/Castpage/Castpage";
import Wishlistpage from "./pages/Profilepage/Wishlistpage/Wishlistpage";
import Infopage from "./pages/Profilepage/Infopage/Infopage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "about", element: <Aboutpage /> },
      { path: "shop", element: <Shoppage /> },
      { path: "signup", element: <Registerpage /> },
      {
        path: "/my-account",
        element: <Profilepage />,
        children: [
          { path: "cast", element: <Castpage /> },
          { path: "wishlist", element: <Wishlistpage /> },
          { path: "info", element: <Infopage /> },
        ],
      },
      { path: "login", element: <Loginpage /> },
    ],
  },
]);
