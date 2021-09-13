import React, { useState, useEffect, useContext } from "react";
import {
  createTheme,
  ThemeProvider,
  makeStyles,
} from "@material-ui/core/styles";
import { filterContext } from "../App";
import { Loading } from "./Loading";

import {
  Typography,
  CssBaseline,
  CardContent,
  Card,
} from "@material-ui/core";

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
    padding: 0,
    margin: 0,
  },
  root: {
    width: 200,
    height: 285,
    borderRadius: 16,
    padding: 16,
    margin: 16,
    background: "linear-gradient(rgb(168, 255, 152), rgb(214, 162, 228))",
  },
  list: {
    listStyle: "none",
  },
  header: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    padding: "12 0",
  },
  image: {
    width: 120,
    height: 120,
    padding: "12 0",
  },
});

export const PokeCard = () => {
  const [pokemonArray, setPokemonArray] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const classes = useStyles();
  const {
   
    regionValue,
   
  } = useContext(filterContext);


  useEffect(() => {
    fetchPokedex();

    async function fetchPokedex() {
      const response = await fetch(`https://pokeapi.co/api/v2/region/${regionValue}`);
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
      fetchPokemon(pokemon_species);
    }

    function fetchPokemon(pokemon_species) {
      setPokemonArray([]);
      pokemon_species.forEach(async (pokemon) => {
        const pokeDetailsUrl = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await pokeDetailsUrl.json();
        setPokemonArray((pokemonArray) => [...pokemonArray, data]);
      });

      setIsLoaded(isLoaded=>(!isLoaded));
    }
  }, [regionValue]);

  if (!isLoaded) {
    return <Loading />;
  } else {
    return (
      <>
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <ul className={classes.wrapper}>
            {pokemonArray.map((pokemon) => {
              return (
                <li className={classes.list} key={pokemon.name}>
                  <Card className={classes.root}>
                    <CardContent>
                      <img
                        className={classes.image}
                        loading="lazy"
                        src={pokemon.sprites.other.dream_world.front_default}
                        alt="pokemon img"
                      />
                      <Typography className={classes.header} variant="h3">
                        {pokemon.name}
                      </Typography>
                    </CardContent>
                  </Card>
                </li>
              );
            })}
          </ul>
        </ThemeProvider>
      </>
    );
  }
};
