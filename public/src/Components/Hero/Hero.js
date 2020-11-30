import React from 'react';
import './Hero.css';

const hero = ({isLoading, searchMovieHandler, toggleModalHandler}) => {
    return(
        <div className="hero">
            <h1 className="hero__title">Never waste hours to find the perfect movie again!</h1>
            {isLoading?
                'LOADING....':    
                <button onClick={searchMovieHandler} className="btn--call-to-action">Pick a Movie</button>
            }
            <button onClick={toggleModalHandler} className="btn--configuration btn-open-filters" >Configure Filters</button>
        </div>
    )
}

export default hero;