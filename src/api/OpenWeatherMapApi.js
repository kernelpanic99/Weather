const API_KEY = "def7c8667a42018923e351364064d95d";

function buildUnitsParam(units) {
  if (!units) {
    return "";
  }

  // if (units != "metric" || units != "imperial") {
  //   throw new Error(
  //     'Illegal units specified. Possible values are: "metric"|"imperial"|undefined.'
  //   );
  // }

  switch (units) {
    case "metric":
      return "&units=metric";
    case "imperial":
      return "&units=imperial";
    default:
      return "";
  }
}

/**
 * @param {*} adapter adpter to adapt api response to iternal weather structure.
 * @param {string} city city for which to fetch weather.
 * @param {"metric"|"imperial"|undefined} units Meausurement units to use.
 * @returns {Promise} fetched weather object.
 */
export default async function fetchWeather(adapter, city, units) {
  if (!city) {
    throw new Error("No location provided");
  }

  if (typeof city != "string") {
    throw new Error("city must be a string");
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}${buildUnitsParam(
    units
  )}`;

  return fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      if (json.cod === "404") {
        throw new Error(`Wrong url format or location (${city})`);
      }
      return adapter(json);
    });
}
