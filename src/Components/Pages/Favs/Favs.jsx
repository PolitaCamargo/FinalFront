import React, { useContext } from "react";
import { ContextGlobal } from "../../../Contexts/GlobalContext";
import { Button } from "@mui/material";
import FavCard from "./FavCard";
import "../Favs/Favs.css";

const Favs = () => {
  const { state } = useContext(ContextGlobal);

  const favsDentists = state.favs;

  return (
    <>
      <h1> Dentists Favs: </h1>
      
      <div className="card-grid">
        {favsDentists.map((dentist) => (
          <FavCard
            key={dentist.id}
            dentist={dentist}
            state={state}
          />
        ))}
      </div>
    </>
  );
};

export default Favs;
