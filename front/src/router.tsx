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

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "/contact", element: <Contactpage /> },
      { path: "/gallery", element: <Gallerypage /> },
      { path: "/about", element: <Aboutpage /> },
      { path: "/shop", element: <Shoppage /> },
      { path: "/register", element: <Registerpage /> },
      { path: "my-account", element: <Profilepage /> },
      { path: "/login", element: <Loginpage /> },
    ],
  },
]);
