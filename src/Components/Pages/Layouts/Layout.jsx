import React, { useContext } from "react";
import { ContextGlobal } from "../../../Contexts/GlobalContext";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "../../../index.css";

const Layout = () => {
  const { state } = useContext(ContextGlobal);

  return (
    <div className={`${state.theme} App`}>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
