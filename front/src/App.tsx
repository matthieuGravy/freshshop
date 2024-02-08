import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, ScrollRestoration } from "react-router-dom";

import { RootState } from "./store/";
import Topbar from "./components/Topbar";

const App = () => {
  let styeMain = "bg-stone-50 pt-14 lg:pt-24";
  return (
    <>
      <Topbar />
      <main className={styeMain}>
        <Outlet />
      </main>
    </>
  );
};

export default App;
