import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import "../../../index.css";
import { ContextGlobal } from "../../../Contexts/GlobalContext";
import "./Navbar.css";

const Navbar = () => {
  const { state, dispatch } = useContext(ContextGlobal);

  const changeTheme = () => {
    dispatch({ type: "GET_THEME" });
  };



  return (
    <nav className={state.theme === "dark" ? "dark" : "light"}>
      <span className="navLogo">
        <Link to="/home">DH Odonto </Link>
      </span>

      <div>
        <span>
          <Link to="/home">Home</Link>
        </span>
        <span>
          <Link to="/contact">Contact</Link>
        </span>
        <span>
          <Link to="/favs">Favs</Link>
        </span>
        <button className="chaNav" onClick={changeTheme}> {state.theme === "dark" ? "☀️" : "🌙"}</button>
      </div>
    </nav>
  );
};

export default Navbar;
