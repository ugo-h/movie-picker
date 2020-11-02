const process = require('process');
require('dotenv').config();
module.exports = {
    API_KEY: process.env.API_KEY,
    PORT: process.env.PORT
};