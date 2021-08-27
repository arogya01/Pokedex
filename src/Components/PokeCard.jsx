import React, { useState, useEffect } from "react";
import {
  createTheme,
  ThemeProvider,
  makeStyles,
} from "@material-ui/core/styles";

import {
  Typography,
  CssBaseline,
  Box,
  Card,
  CardAction,
  CardContent,
  Button,
  Container
} from "@material-ui/core";



const theme = createTheme({
  typography: {
    fontFamily: ['Noto Sans JP' ,'sans-serif'].join(","),
  },
  palette: {
    primary: {
      main: "#a8ff98",
    },
    secondary: {
      main: "#d6a2e4",
    },
  },
});

const useStyles = makeStyles({
  wrapper: {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "center",
  },
  root: {
    width: 200,
    height: 285,
    borderRadius: 16,
    background: "linear-gradient(rgb(168, 255, 152), rgb(214, 162, 228))",
  },
  header: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign:"center",
    // textTransform:'uppercase'
  },
  image:{
    width:120,
    height:120,
  }
});

export const PokeCard = () => {
  const [pokemonName, setPokemonName] = useState(null);
  const [pokemonImg,setPokemonImg]= useState(null);

  const classes = useStyles();

  useEffect(() => {
    console.log('rendered');
    getData();
    async function getData() {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon/bulbasaur"
      );
      const data = await response.json();
      setPokemonName(data.name);
      setPokemonImg(data.sprites.other.dream_world.front_default);
    }
  }, []);

  return (
    <>
      {/* {CssBaseline provides a lot of default styling for your app} */}
      <CssBaseline />
      <ThemeProvider theme={theme}>

        <Container className={classes.wrapper}>
          <Card className={classes.root}>
            <CardContent>
               <img className={classes.image} src={pokemonImg} alt={'pokemon_img'} />  
              <Typography component="h1" className={classes.header}>
                {pokemonName}
              </Typography>
            </CardContent>
          </Card>
        </Container>
      </ThemeProvider>
    </>
  );
};

