const STORAGE_KEY = "CURRENT_WEATHER";
const LOCATION_KEY = "LAST_STORED_LOCATION";
const TIME_KEY = "LAST_STORED_TIME";
const UNITS_KEY = "LAST_STORED_UNITS";
const TIME_GAP = 600000;
const DATE_FORMAT = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/;

let lastParsed;

function dateReviewer(key, value) {
  if (typeof value === "string" && DATE_FORMAT.test(value)) {
    return new Date(value);
  }

  return value;
}

export function fetch() {
  if (isFresh() && lastParsed) {
    return lastParsed;
  }

  let weatherData = sessionStorage.getItem(STORAGE_KEY);
  lastParsed = JSON.parse(weatherData, dateReviewer);
  return lastParsed;
}

function getLastLocation() {
  return sessionStorage.getItem(LOCATION_KEY);
}

function getLastUnits() {
  return sessionStorage.getItem(UNITS_KEY);
}

function getLastTime() {
  return new Date(sessionStorage.getItem(TIME_KEY));
}

export function isFresh() {
  return new Date() - getLastTime() < TIME_GAP;
}

export function isDifferentUnits(units) {
  return getLastUnits() !== units;
}

export function isDifferentLocation(location) {
  return location !== getLastLocation();
}

export function store(weatherData, units) {
  sessionStorage.setItem(TIME_KEY, weatherData.location.localDate);
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(weatherData));
  sessionStorage.setItem(LOCATION_KEY, weatherData.location.city);
  sessionStorage.setItem(UNITS_KEY, units);
}
