import React, { useState, useEffect, useContext } from "react";
import {
  createTheme,
  ThemeProvider,
  makeStyles,
} from "@material-ui/core/styles";
import { filterContext } from "../App";

import { Typography, CssBaseline, Grid, CardContent,Card } from "@material-ui/core";

const theme = createTheme({
  typography: {
    fontFamily: ["Noto Sans JP", "sans-serif"].join(","),
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
    flexFlow: "row wrap",
    justifyContent: "center",
  },
  root: {
    width: 200,
    height: 285,
    borderRadius: 16,
    padding:16,
    margin:16,
    listStyle:'none',
    background: "linear-gradient(rgb(168, 255, 152), rgb(214, 162, 228))",
  },
  header: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  image: {
    width: 120,
    height: 120,
  },
});

export const PokeCard = () => {
  const [pokemonDetail, setPokemonDetail] = useState([]);
  const [pokemonArray, setPokemonArray] = useState([]);
  const classes = useStyles();
  const { regions, value } = useContext(filterContext);

  useEffect(() => {
    fetchPokedex();

    async function fetchPokedex() {
      const response = await fetch(`https://pokeapi.co/api/v2/region/${value}`);
      const data = await response.json();
      fetchPokemonDetails(data.id);
    }

    async function fetchPokemonDetails(pokedexId) {
      console.log(pokedexId);
      const regionDetails = await fetch(
        `https://pokeapi.co/api/v2/generation/${pokedexId}`
      );
      const regionData = await regionDetails.json();
      const pokemon_species = regionData.pokemon_species;
      console.log(pokemon_species);
      setPokemonDetail(pokemon_species);
      fetchPokemon(pokemon_species);
    }

    function fetchPokemon(pokemonDetail) {
      console.log(pokemonDetail);
      pokemonDetail.forEach(async (pokemon) => {
        const pokeDetailsUrl = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
        const data = await pokeDetailsUrl.json();
        setPokemonArray((pokemonArray) => [...pokemonArray, data]);
      });
    }
  }, [value]);

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        
          <ul className={classes.wrapper}>
          {pokemonArray.map((pokemon) => {
            return (
              <li className={classes.root} key={pokemon.name}>
                <Card variant='outlined'>
              <CardContent>
                <img className={classes.image} src={pokemon.sprites.other.dream_world.front_default} alt="pokemon img" />
                <Typography  className={classes.header} variant="h3">{pokemon.name}</Typography>
                
              </CardContent> 
              </Card>
              </li>
            );
          })}
          </ul>

      </ThemeProvider>
    </>
  );
};
