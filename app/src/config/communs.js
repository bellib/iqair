const API_KEY = process.env.API_KEY ;
module.exports = {
    IQ_URL: `http://api.airvisual.com/v2/nearest_city?key=${API_KEY}`,
    IQ_URL_PARAMS: (lat,lon) => `http://api.airvisual.com/v2/nearest_city?lat=${lat}&lon=${lon}&key=${API_KEY}`
}