const fetch = require('node-fetch');
const Math = require('mathjs');
const url = 'https://kinopoiskapiunofficial.tech';
const { API_KEY } = require('./config');

async function getAllBy(genreId, page, minRating) {
    const response = await fetch(`${url}/api/v2.1/films/search-by-filters?genre=${genreId}&ratingFrom=${minRating}&type=FILM&page=${page}`, {
        headers:{
            'X-API-KEY': API_KEY
          }
    });
    const data = await response.json();
    return data;
}

async function getAll(page) {
    const response = await fetch(`${url}/api/v2.1/films/top?page=${page}`, {
        headers:{
            'X-API-KEY': API_KEY
          }
    });
    const data = await response.json();
    return data;
}

async function getOne(filmId) {
    const response = await fetch(`${url}/api/v2.1/films/${filmId}`, {
        headers:{
            'X-API-KEY': API_KEY
          }
    });
    const data = await response.json();
    return data;
}

function randomChoice(arr) {
    const randomVal = Math.round(Math.random() * arr.length);
    return arr[randomVal];
}

module.exports = {
    getAllBy,
    getOne,
    randomChoice,
    getAll
}