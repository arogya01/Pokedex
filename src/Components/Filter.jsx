import React, { useState, useEffect, useContext } from "react";
import { CssBaseline, Grid } from "@material-ui/core";
import { filterContext } from "../App";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    padding: 32,
    [theme.breakpoints.down("sm")]: {
      padding: 24,
    },
  },
}));
export const Filter = () => {

  const classes = useStyles();
  const {value,setValue,regions,types,sort} = useContext(filterContext);
  
  return (
      
      <div className={classes.wrapper}>
        <Grid
          container
          spacing={5}
          justifyContent="space-between"
          alignItems="center"
        >
          <CssBaseline />

          <Grid item xs={12} sm={3} md={3} lg={3}>
            <Grid container justifyContent="center" alignItems="center">
              <label htmlFor="region-filer">
                Region:
                <select onChange={(event)=>{
                  setValue(event.target.value);
                  console.log(value);
                  } }>
                  {regions.map((region) => {
                    return <option value={region.name} key={region.name}>{region.name}</option>;
                  })}
                </select>
              </label>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={3} md={3} lg={3}>
            <Grid container justifyContent="center" alignItems="center">
              <label htmlFor="types-filer">
                Types:
                <select>
                  {types.map((type) => {
                    return <option value={type} key={type}>{type}</option>;
                  })}
                </select>
              </label>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={3} md={3} lg={3}>
            <Grid container justifyContent="center" alignItems="center">
              <label htmlFor="soryby-filer">
                SortBy:
                <select>
                  {types.map((sort) => {
                    return <option value={sort} key={sort}>{sort}</option>;
                  })}
                </select>
              </label>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={3} md={3} lg={3}>
            <Grid container justifyContent="center" alignItems="center">
              <label htmlFor="region-filer">
                <input
                  type="text"
                  placeholder="Region"
                  className="region-input"
                ></input>
              </label>
            </Grid>
          </Grid>
        </Grid>
      </div>
  );
};
