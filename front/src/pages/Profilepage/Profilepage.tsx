import { useEffect } from "react";

import { Outlet } from "react-router-dom";

import Castpage from "./Castpage/Castpage";
import Wishlistpage from "./Wishlistpage/Wishlistpage";

const Profilepage = () => {
  const userId = localStorage.getItem("userId"); // Récupérez l'ID de l'utilisateur du local storage
  console.log(userId);

  const fetchuser = async () => {
    try {
      const response = await fetch(`http://localhost:4700/profile/${userId}`, {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const user = await response.json();
        console.log(user);
        for (let key in user) {
          console.log(`${key}: ${user[key]}`);
        }
      } else {
        console.error(`Error: ${response.status}`);
      }
    } catch (error) {
      console.error("Login error:", error);
      if (error.response) {
        console.error("Server Error:", error.response.data);
      }
    }
  };
  useEffect(() => {
    fetchuser();
  }, []);

  return (
    <div>
      <h1>My profile</h1>

      <Outlet />
    </div>
  );
};

export default Profilepage;
