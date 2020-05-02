import React from 'react';
import '../css/search.css';
import {useDispatch} from 'react-redux';
import {remove} from '../actions';
import logo from '../images/replace-image.png';

const Movie = ({mov}) => {
    const dispatch = useDispatch();

    //embedded styles to fix Heroku CSS not upadting
    const styles = {
        "display":"flex",
        "justify-content": "space-evenly",
        "flex-direction": "column",
        "text-align": "center",
        "align-items": "center",
        "margin": "20px",
        "font-family":"Futura,Trebuchet MS,Arial,sans-serif",
        "-moz-box-shadow": "2px 2px 6px 1px #000000",
        "-webkit-box-shadow": "2px 2px 6px 1px #000000",
        "box-shadow": "2px 2px 6px 1px #000000",
        "border-radius": "25px",
        "padding":"10px",
        "height": "400px",
        "cursor": "pointer"
    }

    //dispatching the remove movie action 
    const removeMovie = () => {
        dispatch(remove(mov));
    }

    //renders a particular Movie onto the screen
    return (
        <div style={styles}>
            <h3>{mov.Title} ({mov.Year})</h3>
            <img
            width="40%"
            height="50%"
            alt="none"
            src={mov.Poster === 'N/A' ? logo: mov.Poster}
          />
          <div className="btm-tag">
            <button onClick={removeMovie} className="sbmt">
                <svg className="svg-icon" viewBox="0 0 20 20">
					<path d="M17.114,3.923h-4.589V2.427c0-0.252-0.207-0.459-0.46-0.459H7.935c-0.252,0-0.459,0.207-0.459,0.459v1.496h-4.59c-0.252,0-0.459,0.205-0.459,0.459c0,0.252,0.207,0.459,0.459,0.459h1.51v12.732c0,0.252,0.207,0.459,0.459,0.459h10.29c0.254,0,0.459-0.207,0.459-0.459V4.841h1.511c0.252,0,0.459-0.207,0.459-0.459C17.573,4.127,17.366,3.923,17.114,3.923M8.394,2.886h3.214v0.918H8.394V2.886z M14.686,17.114H5.314V4.841h9.372V17.114z M12.525,7.306v7.344c0,0.252-0.207,0.459-0.46,0.459s-0.458-0.207-0.458-0.459V7.306c0-0.254,0.205-0.459,0.458-0.459S12.525,7.051,12.525,7.306M8.394,7.306v7.344c0,0.252-0.207,0.459-0.459,0.459s-0.459-0.207-0.459-0.459V7.306c0-0.254,0.207-0.459,0.459-0.459S8.394,7.051,8.394,7.306"></path>
                </svg>
            </button>
          </div>

        </div>
    )
}

export default Movie;