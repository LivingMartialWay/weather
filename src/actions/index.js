import axios from 'axios';

const API_KEY = 'eb73451848d0c0566152f4f90279c45a';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city}`;
  try {
    const request = axios.get(url);
    return {
      type: FETCH_WEATHER,
      payload: request,
    };
  } catch (err) {
    console.log(err);
  }
}
