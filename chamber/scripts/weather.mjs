import{displayMembers} from"./home.js";
import { displayResults, displayForecast } from "./display-weather.mjs";
const myKey = "d99d26ebf217dba0e5621d9674e8163b";
const myLat = "9.10";
const myLong = "7.21";

const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLong}&appid=${myKey}`;
const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`;

async function fetchForecast() {
  try {
    const response = await fetch(forecastUrl);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // testing only
      displayForecast(data); // uncomment when ready
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

 async function fetchCurrentWeather() {
  try {
     const response = await fetch(currentWeatherUrl);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // testing only
      displayResults(data); // uncomment when ready
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

// fetching data from json and using it to populate the html
const filePath = 'data/members.json';

async function getMembersData() {
  
    const response = await fetch(filePath);
    const data = await response.json();

    
    displayMembers(data.companies);
 
}

getMembersData();
fetchForecast();
fetchCurrentWeather();
