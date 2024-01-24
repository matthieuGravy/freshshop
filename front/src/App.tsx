import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, ScrollRestoration } from "react-router-dom";

import { RootState } from "./store/";
import Topbar from "./components/Topbar";

const App = () => {
  return (
    <>
      <Topbar />
      <main className="">
        <Outlet />
      </main>
    </>
  );
};

export default App;
