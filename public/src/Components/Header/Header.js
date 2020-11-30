import React from 'react';
import './Header.css';

const header = props => (
    <header className="header">
        <h2 onClick={props.resetMovieHandler} className="logo">Movie Picker</h2>
    </header>
)

export default header;