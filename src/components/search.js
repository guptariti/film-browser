import React, { useState } from 'react';
import './search.css';
import {useSelector, useDispatch} from 'react-redux';
import {fetch} from '../actions';
import axios from 'axios';

const Search = ({store}) => {
    const[userSearch, setSearch] = useState('');
    const dispatch = useDispatch();
    const API_KEY = "2d3e6cc6";

    const submitSearch = () => {
        axios.get('http://www.omdbapi.com/?s=' + userSearch + "&apikey=" + API_KEY)
            .then(res => {
                if (res.data.Response ==="False") {
                    alert("No matches found!");
                } else {
                    dispatch(fetch(res.data.Search));
                }
            })
    }

    return (
        <div className="srch">
            <input 
            onChange={(e) => {
                e.preventDefault();
                setSearch(e.target.value.trim());
                }}
            type="text" 
            placeholder="Search for a movie..."
            className="input"
            onKeyPress={(e) => e.key === "Enter" ? submitSearch(e.target.value): null}
            >
            </input>
            <button className="sbmt" onClick={submitSearch}>
                <svg id="search-icon" class="search-icon" viewBox="0 0 24 24">
                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                     <path d="M0 0h24v24H0z" fill="none"/>
                </svg>
            </button>
        </div>
    )
}

export default Search;