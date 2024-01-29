import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Homepage from "./pages/Homepage/Homepage";
import Contactpage from "./pages/Contactpage/Contactpage";
import Gallerypage from "./pages/Gallerypage/Gallerypage";
import Aboutpage from "./pages/Aboutpage/Aboutpage";
import Shoppage from "./pages/Shoppage/Shoppage";
import Registerpage from "./pages/Registerpage/Registerpage";
import Profilepage from "./pages/Profilepage/Profilepage";
import Loginpage from "./pages/Loginpage/Loginpage";
import Castpage from "./pages/Profilepage/Castpage/Castpage";
import Wishlistpage from "./pages/Profilepage/Wishlistpage/Wishlistpage";
import Account from "./pages/Profilepage/Account/Account";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "contact", element: <Contactpage /> },
      { path: "gallery", element: <Gallerypage /> },
      { path: "about", element: <Aboutpage /> },
      { path: "shop", element: <Shoppage /> },
      { path: "signup", element: <Registerpage /> },
      {
        path: "/my-account",
        element: <Profilepage />,
        children: [
          { path: "account", element: <Account /> },
          { path: "cast", element: <Castpage /> },
          { path: "wishlist", element: <Wishlistpage /> },
        ],
      },
      { path: "login", element: <Loginpage /> },
    ],
  },
]);
