import React from 'react';
import {makeStyles }  from '@material-ui/core/'
import zIndex from '@material-ui/core/styles/zIndex';

const useStyles = makeStyles({
    loading: {
      position: 'fixed',
      width:100,
      height:100,
      background:" '#fff' url('https://example.gif') no-repeat center",
      zIndex:6


    }
});

const Loading = () => {
    return (
        <div className="loading">
            
        </div>
    )
}

export default Loading
