import React, { useState, useEffect } from "react";
import { CssBaseline, Switch, Link, Grid } from "@material-ui/core";
import logo from "../Assets/Pokedex-logo.png";
import darkgithubLogo from "../Assets/github.png";
import lightgithubLogo from "../Assets/githublg.png";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    padding: 32,
    [theme.breakpoints.down("sm")]: {
      padding: 24,
    },
  },
  image: {
    maxWidth: 200,
    width: "auto",
    maxHeight: 100,
  },
}));

export const Header = (props) => {
  const { handleThemeChange, darkMode } = props;
  const [githubLogoColor, setgithubLogoColor] = useState(darkgithubLogo);

  useEffect(() => {
    setgithubLogoColor(darkMode ? lightgithubLogo : darkgithubLogo);
  }, [darkMode]);

  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        
      >
        <CssBaseline />

        <Grid item xs={2} sm={4} md={4} lg={4}>
        <Grid
        container
        justifyContent="center"
        alignItems="center">
          <Switch onChange={handleThemeChange} checked={darkMode} />
        </Grid>
        </Grid>
        <Grid item xs={2} sm={4} md={4} lg={4}>
        <Grid
        container
        justifyContent="center"
        alignItems="center">
          <img src={logo} alt="Pokedex-logo" className={classes.image} />
        </Grid>
        </Grid>
        <Grid item xs={2} sm={4} md={4} lg={4}>
        <Grid
        container
        justifyContent="center"
        alignItems="center">
          <Link href="https://github.com/arogya01/Pokedex">
            <img src={githubLogoColor} alt="github-logo" />
          </Link>
        </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
