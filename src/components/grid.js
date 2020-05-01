import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Row from './row.js';
import Grid from '@material-ui/core/Grid';
import '../css/search.css';
import {useSelector, useDispatch} from 'react-redux';


const MoviesGrid = () => {
    const movieList = useSelector(state => state.movieList);
    const parts = 3;
    console.log(movieList);


    const divide = (arr) => {
            console.log(arr);
          let rows = Math.floor(arr.length/parts);
          let leftover = arr.length % parts;
          let start = 0;
          let output = [];
          for (let i = 0; i < rows; i++) {
              let temp = arr.slice(start, start + parts)
              output.push(temp);
              start+=parts;
          }
          let temp = [];
          for (let i = 0; i < leftover; i++) {
            temp.push(arr[arr.length - 1 - i]);
          }

          if (temp.length > 0) {
              output.push(temp.reverse());
          }

          if (arr.length < parts) {
              output[0] = output[0].reverse();
          }
          return output;
        }

      

   
      return (
          movieList.length > 0 ?  
          (
              <div className="grid">
              <Grid container spacing={1}>
              {divide(movieList).map((r, i) => 
                <Grid container item xs={12} spacing={0}>
                    <Row rows= {r}/>
                </Grid>
              )}
              </Grid>
          </div>)
          : (
              <div>
              </div>
          )
          
      );
        
}

export default MoviesGrid;