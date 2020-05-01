import React, { useState } from 'react';
import Search from './components/search.js'
import Grid from './components/grid.js'
import './css/search.css';


function App({store}) {
  return (
    <div className="App">
      <h1 className="title">FILM BROWSE</h1>
      <Search store={store}></Search>
      <Grid></Grid>
    </div>
  );
}

export default App;
