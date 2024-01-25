import React from "react";
import { useSelector } from "react-redux";

import { RootState } from "../store/";

import { HeroCat } from "./Hero";
import Login from "./Login";

const WelcomeLogged = () => {
  const user = useSelector((state: RootState) => state.user);

  return (
    <section className="bg-green-50 w-full px-8 pb-8">
      {user ? (
        <article>
          <p>Bonjour, {user.email}!</p>
        </article>
      ) : (
        <HeroCat>
          <Login />
        </HeroCat>
      )}
    </section>
  );
};

export default WelcomeLogged;
