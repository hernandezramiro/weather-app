const request = require("request");

var getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/ce68834c5b373620b53ea8a15f4e1e4f/${lat},${lat}`,
        json: true
    }, (error, response, body) => {
        if(!error && response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature,
            });
        } else {
            callback("Unable to fetch weather");
        }
    });
};

module.exports = {
    getWeather
};

