const rp = require("request-promise");
const chalk = require("chalk");

//getting location weather report using ordinates

const forecast = coordinates => {
  const darkSkyAPI = {
    uri: `https://api.darksky.net/forecast/faaafe83368acb8b62172e9a9bf87202/${coordinates.longitude},${coordinates.latitude}?units=si`,
    headers: {
      "User-Agent": "Request-Promise"
    },
    json: true
  };

  rp(darkSkyAPI)
    .then(function(repos) {
      console.log(
        chalk.inverse(
          `It is currently ${repos.currently.temperature} degree c out. There is a ${repos.currently.precipProbability}% chance of rain.${repos.timezone}`
        )
      );
    })
    .catch(function(err) {
      if (err.name == "RequestError") {
        console.log("unable to connect to weather service");
      } else {
        console.log(err.message);
      }
    });
};

module.exports = forecast;
