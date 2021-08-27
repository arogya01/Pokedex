import React from 'react';
import {CssBaseline,Box,Switch} from '@material-ui/core';
import logo from '../Assets/Pokedex-logo.png';
import githubLogo from '../Assets/github.png';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    wrapper: {
      display: "flex",
      flexFlow: "row nowrap",
      justifyContent: "space-between",
    },
    image:{
        maxWidth:200,
        maxHeight:100
    }
})

export const Header = (props) => {
   const {handleThemeChange,darkMode} = props;

    const classes=useStyles();
    return (
        <Box className={classes.wrapper} p={5}>
        <CssBaseline /> 
        <div>
        <Switch onChange={handleThemeChange} checked={darkMode} />
        </div>
        <div>
        <img src={logo} alt='Pokedex-logo'className={classes.image}/>        
        </div>
        <div>
        <img src={githubLogo} alt='github-logo' />
        </div>
        </Box>
    )
}


