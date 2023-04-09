import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import "../../../index.css";
import { ContextGlobal } from "../../../Contexts/GlobalContext";
import "./Navbar.css";

const Navbar = () => {
    const { state, dispatch } = useContext(ContextGlobal);
  
    function ChageTheme() {

      if (state.theme === "light") {
        dispatch({ type: "MOD_DARK" });
      } else if (state.theme === "dark") {
        dispatch({ type: "MOD_LIGHT" });
      }
    }
  
    useEffect(() => {}, [state.theme]);
  
    return (
      <nav id="navbar" >
          
        <ul className="options">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/favs">Favs</Link>
          </li>
          <li>

            <Button variant="outlined" onClick={ChageTheme}>
               🌙
            </Button>
          </li>
        </ul>
      </nav>
    );
  };
  
  export default Navbar;
  