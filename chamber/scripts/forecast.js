    const myKey ="d99d26ebf217dba0e5621d9674e8163b";
    const myLat ="9.10";
    const myLong="7.21";
    const myCityAPIURL=`https://api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLong}&appid=${myKey}`;
    async function apiFetch() {
  try {
    const response = await fetch(myCityAPIURL);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // testing only
      displayForecast(data); // uncomment when ready
    } else {
        throw Error(await response.text());
    }
  } 
  catch (error) {
      console.log(error);
  }
}

const forecast = document.querySelector('#forecast');

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function displayForecast(data){
  
  const forecastList = data.list;
  for(let i = 0; i < 24; i += 8){ 
    const dayData = forecastList[i];
    const date = new Date(dayData.dt_txt);
    const dayName = days[date.getDay()];


    
    forecast.innerHTML += `
        <p>${dayName}:${data.list[0].main.temp}&deg;F
    `;
  }
}


// Start the process
apiFetch();