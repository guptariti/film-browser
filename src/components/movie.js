import React, { useState } from 'react';
import '../css/search.css';
import {useSelector, useDispatch} from 'react-redux';
import {remove} from '../actions';

const Movie = ({mov}) => {
    const dispatch = useDispatch();

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
        "box-shadow":         "2px 2px 6px 1px #000000",
        "border-radius": "25px",
        "padding":"10px",
        "height": "400px",
        "cursor": "pointer"
    }

    const removeMovie = () => {
        dispatch(remove(mov));
    }

    return (
        <div style={styles}>
            <h3>{mov.Title} ({mov.Year})</h3>
            <img
            width="40%"
            height="50%"
            alt="none"
            src={mov.Poster == 'N/A' ? "https://lh3.googleusercontent.com/proxy/oKwV_4ns4QCNKZ1-AginvPoDZK9_QP8JLLNcE4jpn8TmVpx4_B7lsZbsXMRDEl14Ye0AaCDPZIvUurgKSc6bDJFPfKfgwSOFpQ": mov.Poster}
          />
          <div className="btm-tag">
            <button onClick={removeMovie} className="sbmt">DELETE</button>
          </div>

        </div>
    )
}

export default Movie;