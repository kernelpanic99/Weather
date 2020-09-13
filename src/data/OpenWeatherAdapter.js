export default function createWeatherData(rawData) {
  if (!rawData) {
    throw new Error("Empty data given");
  }

  function dateFromUnix(unixSeconds, timezone = rawData.timezone) {
    return new Date(unixSeconds * 1000 + timezone * 1000);
  }

  try {
    return {
      location: {
        localDate: dateFromUnix(rawData.dt),
        lon: rawData.coord.lon,
        lat: rawData.coord.lat,
        city: rawData.name,
        country: rawData.sys.country,
        sunrise: dateFromUnix(rawData.sys.sunrise),
        sunset: dateFromUnix(rawData.sys.sunset),
      },
      condition: rawData.weather.map((cond) => {
        return {
          name: rawData.weather[0].main,
          description: rawData.weather[0].description,
        };
      }),
      wind: {
        speed: rawData.wind.speed,
        direction: rawData.wind.deg,
      },
      temp: rawData.main.temp,
      feelsLike: rawData.main.feels_like,
      pressure: rawData.main.pressure,
      humidity: rawData.main.humidity,
      cloudiness: rawData.clouds.all,
      visibility: rawData.visibility / 1000,
    };
  } catch (e) {
    throw new Error("Illegal data format.");
  }
}
