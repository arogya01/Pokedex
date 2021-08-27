import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import React, { useState } from "react";
import { Header } from "./Components/Header";
import { PokeCard } from "./Components/PokeCard";

function App() {
  const [darkMode, setdarkMode] = useState(false);
  const paletteType=darkMode ? 'dark':'light';

  const darkTheme = createTheme({
    palette: {
      type: paletteType,
    },
  });

const handleThemeChange = () => {
    setdarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <div>
        <Header handleThemeChange={handleThemeChange} darkMode={darkMode}/>
        <PokeCard />
      </div>
    </ThemeProvider>
  );
}

export default App;
