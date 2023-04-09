import { createContext, useReducer } from "react";

const getThemeFromStorage = () => {
  const localData = localStorage.getItem("theme");
  return localData ? localData : "light";
};

const getDentistFavFromStorage = () => {
  const localData = localStorage.getItem("listDentist");
  return localData ? JSON.parse(localData) : [];
};

const setDentistInStorage = (dentist) => {
  const array = getDentistFavFromStorage();
  array.push(dentist);
  return localStorage.setItem("listDentist", JSON.stringify(array));
};

export const initialState = {
  theme: getThemeFromStorage(),
  users: [],
  favs: getDentistFavFromStorage(),
  theme: "light",
};


export const ContextGlobal = createContext();

function globalReducer(state, action) {
  switch (action.type) {
    case "GET_USERS":
      return { ...state, users: action.payload };

      case "GET_THEME":
        const newTheme = state.theme === "light" ? "dark" : "light";
        return { ...state, theme: newTheme };

  
      
    default:
      return state;
  }
}

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};
