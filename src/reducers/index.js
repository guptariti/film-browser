import movieListReducer from './movieList';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    movieList: movieListReducer
});

export default allReducers;