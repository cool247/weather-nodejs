const rp = require("request-promise");
const chalk = require("chalk");

const darkSkyAPI = {
  uri: `https://api.darksky.net/forecast/faaafe83368acb8b62172e9a9bf87202/34.0544,-118.2439?units=si`,
  headers: {
    "User-Agent": "Request-Promise"
  },

  json: true // Automatically parses the JSON string in the response
};

const mapBoxAPI = {
  uri: "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json",
  qs: {
    access_token:
      "pk.eyJ1IjoiY29vbDI0NyIsImEiOiJjazg1anZvYWUwMmx3M2htbXFxNWNjNmlwIn0.yiHpp-fXNb4W3CCm9l8VhQ", // -> uri + '?access_token=xxxxx%20xxxxx'
    limit: 1
  },

  headers: {
    "User-Agent": "Request-Promise"
  },

  json: true
};

rp(darkSkyAPI)
  .then(function(repos) {
    console.log(
      chalk.inverse(
        `It is currently ${repos.currently.temperature} degree out. There is a ${repos.currently.precipProbability}% chance of rain.`
      )
    );
  })
  .catch(function(err) {
    console.log(err);
  });

rp(mapBoxAPI)
  .then(function(repos) {
    console.log("latitude->" + repos.features[0].center[0]);
    console.log("longitude->" + repos.features[0].center[1]);
    console.log(repos);
  })
  .catch(function(err) {
    console.log(err);
  });
