import movieListReducer from './movieList';
import {combineReducers} from 'redux';

//combining all reducers (only had 1 but good practice)
const allReducers = combineReducers({
    movieList: movieListReducer
});

export default allReducers;