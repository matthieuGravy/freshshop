import React from "react";
import { useSelector } from "react-redux";

import { RootState } from "../store/";
import Logout from "./Logout";
import Login from "./Login";

const Modal = () => {
  const user = useSelector((state: RootState) => state.user);

  return (
    <header className="h-10 bg-pink-200 z-50 w-full">
      test
      {user ? (
        <section>
          <p>Bonjour, {user.email}!</p>
          <Logout />
        </section>
      ) : (
        <Login />
      )}
    </header>
  );
};

export default Modal;
