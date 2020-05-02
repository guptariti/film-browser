import React from 'react';
import Grid from '@material-ui/core/Grid';
import Movie from './movie.js';

//maps the elemements in each row into a Movie component
const Row = ({rows}) => {
    return (
        <React.Fragment>
            {rows.map((element, i) => 
                <Grid item xs={4}>
                    <Movie mov={element}/>
                </Grid>
            )}
        </React.Fragment>
    )
    
}

export default Row;