import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import React, { useState,createContext } from "react";
import { Header } from "./Components/Header";
import { PokeCard } from "./Components/PokeCard";
import { Filter } from "./Components/Filter";


const regions = [
  {
    name: "kanto",
    url: "https://pokeapi.co/api/v2/region/1/",
  },
  {
    name: "johto",
    url: "https://pokeapi.co/api/v2/region/2/",
  },
  {
    name: "hoenn",
    url: "https://pokeapi.co/api/v2/region/3/",
  },
  {
    name: "sinnoh",
    url: "https://pokeapi.co/api/v2/region/4/",
  },
  {
    name: "unova",
    url: "https://pokeapi.co/api/v2/region/5/",
  },
  {
    name: "kalos",
    url: "https://pokeapi.co/api/v2/region/6/",
  },
  {
    name: "alola",
    url: "https://pokeapi.co/api/v2/region/7/",
  },
  {
    name: "galar",
    url: "https://pokeapi.co/api/v2/region/8/",
  },
];

const types = [
  "all types",
  "grass",
  "bug",
  "dark",
  "dragon",
  "electric",
  "fairy",
  "fighting",
  "fire",
  "flying",
  "ghost",
  "ground",
  "ice",
  "normal",
  "poison",
  "psychic",
  "rock",
  "steel",
  "water",
];

const sortBy = ["id", "name"];
export const filterContext = createContext();



function App() {
  const [darkMode, setdarkMode] = useState(false);
  const paletteType=darkMode ? 'dark':'light';

  const [regionValue, setRegionValue] = useState(regions[0].name);
  const [typeValue,setTypeValue]=useState(null);
  const [sortbyValue,setsortbyValue]=useState(null);

  const val = {
    regions,
    types,
    sortBy,
    regionValue,
    setRegionValue,
    typeValue,
    setTypeValue,
    sortbyValue,
    setsortbyValue
  };


  const darkTheme = createTheme({
    palette: {
      type: paletteType,
    },
  });

const handleThemeChange = () => {
    setdarkMode(!darkMode);
  };

  return (
    <filterContext.Provider value={val}>
    <ThemeProvider theme={darkTheme}>
      <div >
        <Header handleThemeChange={handleThemeChange} darkMode={darkMode}/>
        <Filter />
        <PokeCard />
      </div>
    </ThemeProvider>
   </filterContext.Provider>

  );
}

export default App;
