import React, { useContext, useEffect } from "react";
import HomeCard from "../Home/HomeCard";
import { getDentists } from "../../../Services/OdontologoServices";
import { ContextGlobal } from "../../../Contexts/GlobalContext";

const HomeContainer = () => {
  const { state, dispatch } = useContext(ContextGlobal);

  useEffect(() => {
    const data = getDentists();
    data
      .then((res) => dispatch({ type: "GET_USERS", payload: res.data }))
      .catch((err) => console.log("error", err));
  }, []);

  const addFav = (obj) => {
    dispatch({ type: "ADD_FAV", payload: obj });
  };

  return (
    <main>
      <h1>Home</h1>
      <div className="card-grid">
        {state.users.map((dentist) => (
          <HomeCard
            key={dentist.id}
            dentist={dentist}
            addFav={addFav}
            favs={state.favs}
            theme={state.theme}
          />
        ))}
      </div>
    </main>
  );
};

export default HomeContainer;
