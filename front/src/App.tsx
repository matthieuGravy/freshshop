import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { RootState } from "./store/";
import Login from "./components/Login";
import { logout } from "./store/actions/actionConnection";

const App = () => {
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
    <div>
      {user ? (
        <div>
          <p>Bonjour, {user.name}!</p>
          <button onClick={handleLogout}>Déconnexion</button>
        </div>
      ) : (
        <Login /> // Utilisez le composant Login ici
      )}
    </div>
  );
};

export default App;
