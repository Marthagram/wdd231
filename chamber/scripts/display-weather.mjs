

const forecast = document.querySelector('#forecast');
const currentWeather = document.querySelector('#current-weather');
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export function displayForecast(data) {
  
  for(let i = 0; i < 24; i += 8){ 
    
    const date = new Date(data.list[i].dt_txt);
    const dayName = days[date.getDay()];

    forecast.innerHTML += `
        <p>${dayName}:${data.list[0].main.temp}&deg;F
    `;
  }
}



export function displayResults(data) {
  // populate the currentWeather
    const description=document.createElement('p');
    const temp=document.createElement('p');
    const high=document.createElement('p');
    const low=document.createElement('p');
    const humidity=document.createElement('p');
    const sunrise=document.createElement('p');
    const sunset=document.createElement('p');

    temp.innerHTML=`${data.main.temp}&deg;`;
    description.innerHTML=`${data.weather[0].description}`
    high.innerHTML=`High: ${data.main.temp_max}&deg;`;
    low.innerHTML=`Low:${data.main.temp_min}%`;
    humidity.innerHTML=`Humidity: ${data.main.humidity}`;
    sunrise.innerHTML=`Sunrise: ${data.sys.sunrise}`;
    sunset.innerHTML=`Sunset: ${data.sys.sunset}`;
    

    // creating nested divs to accomodate the p and img element for layout purpose
    const iconImageBox=document.createElement('div');
    const infoBox=document.createElement('div');
    const bigBox =document.createElement('div')
    bigBox.className="bigbox"
    infoBox.className="infobox"
    iconImageBox.className="iconbox"
    const image=document.createElement('img');

    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;


    image.setAttribute('SRC', iconsrc);
    image.setAttribute('alt', data.weather[0].description );
    image.setAttribute('loading', 'lazy');
   

   

    iconImageBox.appendChild(image);
    infoBox.appendChild(temp);
    infoBox.appendChild(description)
    infoBox.appendChild(high);
    infoBox.appendChild(low);
    infoBox.appendChild(humidity);
    infoBox.appendChild(sunrise);


    bigBox.appendChild(iconImageBox)
    bigBox.appendChild(infoBox)

    currentWeather.appendChild(bigBox);
    
}





