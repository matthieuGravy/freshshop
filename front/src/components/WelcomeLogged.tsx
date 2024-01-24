import React from "react";
import { useSelector } from "react-redux";

import { RootState } from "../store/";
import Logout from "./Logout";
import Login from "./Login";

const WelcomeLogged = () => {
  const user = useSelector((state: RootState) => state.user);

  return (
    <section className="bg-pink-200 z-50 w-full">
      <h2>Welcome</h2>
      {user ? (
        <article>
          <p>Bonjour, {user.email}!</p>
          <Logout />
        </article>
      ) : (
        <Login />
      )}
    </section>
  );
};

export default WelcomeLogged;
