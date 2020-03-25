const getLocation = require("./utils/getlocation");
const forecast = require("./utils/forecast");

getLocation("india", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    forecast(data);
  }
});
