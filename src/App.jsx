import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeContainer from "./Components/Pages/Home/HomeContainer";
import { useState } from "react";
import { ContextProvider } from "./Contexts/GlobalContext";
import Layout from "./Components/Pages/Layouts/Layout";
import DetailContainer from "./Components/Pages/Details/DetailContainer";
import Contact from "./Components/Pages/Contact/Contact";
import FavCard from "./Components/Pages/Favs/FavCard";
import Favs from "./Components/Pages/Favs/Favs";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <ContextProvider>
        <Routes>
          {/* <Route path="/" element={<HomeContainer />} /> */}
          <Route element={<Layout />}>
            <Route path="/" element={<HomeContainer />} />
            <Route path="/home" element={<HomeContainer />} />
            <Route path="/dentist/:id" element={<DetailContainer />} />
            <Route path="/contact" element={<Contact />} />*/
            <Route path="/favs" element={<Favs/>} />*/
          </Route>
        </Routes>
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;
