const express = require('express');
const { getAllBy, getOne, randomChoice, getAll } = require('./helper');
const { PORT } = require('./config');

let port = PORT || 9000;
const app = express();

app.use(express.static('public/build'));

app.get('/', async(req, res) => res.sendFile('./index.html'))

app.get('/api/films/:genreId', async(req, res) => {
    const { genreId } = req.params;
    const { pages, minRating } = adjustPagesAndRating(genreId);
    let allMovies;
    if(genreId > 0) {
        allMovies = await getAllBy(genreId, pages, minRating);
    } else {
        allMovies = await getAll(pages);
    }
    console.log(allMovies)
    const randomMovie = randomChoice(allMovies.films);
    const randomMovieFull = await getOne(randomMovie.filmId);
    randomMovieFull.rating = randomMovie.rating;
    res.json(randomMovieFull);
})

function adjustPagesAndRating(genreId) {
    let minRating = 7;
    let maxPages = 5;
    if(genreId === 0) maxPages = 12;
    let pages = Math.round(Math.random() * (maxPages-1) + 1);
    if(genreId == 20) {
        pages = 1;
        minRating = 1;
    }
    return {minRating, pages}
}

app.listen(port, () => {
    console.log(`listening on port ${port}`)
});