import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../../component/Navigation/Navigation";

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      <main>
        {children}
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
