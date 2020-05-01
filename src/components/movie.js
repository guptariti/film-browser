import React, { useState } from 'react';
import './search.css';
import {useSelector, useDispatch} from 'react-redux';
import {remove} from '../actions';

const Movie = ({mov}) => {
    const dispatch = useDispatch();

    const removeMovie = () => {
        dispatch(remove(mov));
    }

    return (
        <div className="mvie">
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