import React from 'react';
import Search from './components/search.js'
import Grid from './components/grid.js'
import './css/search.css';

//main App component
const App = () => {
  return (
    <div className="App">
      <h1 className="title">FILM BROWSE</h1>
      <Search></Search>
      <Grid></Grid>
    </div>
  );
}

export default App;
