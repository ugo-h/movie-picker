import React from 'react';
import './Movie.css';

const movie = ({movie}) => {
    return(
    <div className="Movie">
        <img className="Movie__poster" src={movie.posterUrl? movie.posterUrl: 'https://vignette.wikia.nocookie.net/houseki-no-kuni/images/3/3b/Missingimage.png/revision/latest?cb=20190328111547&path-prefix=ru'} alt="Poster"></img> 
        <div className="Movie__content">
            <h2 className="Movie__content__title">{movie.nameRu} ({movie.year})</h2>
            <ul className="Movie__content__header">
                <li className="Movie__rating Movie__content__header__el">Рейтинг: {movie.rating}</li>
                {/* <li className="Movie__content__header__el">By {movie.Director}</li> */}
                <li className="Movie__content__header__el">Хронометраж: {movie.filmLength}</li>
                <li className="Movie__content__header__el">Жанры: {movie.genres.map(genre => `${genre.genre}, `)}</li>
            </ul>
            <p className="Movie__content__description">{movie.description}</p>
            <a className="Movie__btn btn--call-to-action" href={movie.webUrl}>Подробнее на Кинопоиске</a>
        </div>


        
    </div>
)}

export default movie;