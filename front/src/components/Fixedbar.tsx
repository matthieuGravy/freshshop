import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../store/";
import { logout } from "../store/actions/actionConnection";
import Login from "./Login";

const Fixedbar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);

  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:4700/logout", {
        method: "POST",
        credentials: "include",
      });
      if (!response.ok) {
        throw new Error("Logout failed");
      }
      dispatch(logout());
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <header>
      {user ? (
        <section>
          <p>Bonjour, {user.name}!</p>
          <button onClick={handleLogout}>Déconnexion</button>
        </section>
      ) : (
        <Login />
      )}
    </header>
  );
};

export default Fixedbar;
