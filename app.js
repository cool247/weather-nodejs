const getLocation = require("./utils/getlocation");
const forecast = require("./utils/forecast");

if (process.argv[2]) {
  getLocation(process.argv[2], (err, data) => {
    if (err) {
      console.log(err);
    } else {
      forecast(data, (err, forecastData) => {
        if (err) {
          console.log(err);
        } else {
          console.log(forecastData);
        }
      });
    }
  });
} else {
  console.log("provide the name of the country);
}
