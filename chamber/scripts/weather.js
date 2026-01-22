const currentWeather = document.querySelector('#current-weather');


// Create Required Variables For The URL
const myKey ="d99d26ebf217dba0e5621d9674e8163b";
const myLat ="9.10";
const myLong="7.21";

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`;

// Try to Grab the Current weather Data
async function apiFetch() {
  try {
    const response = await fetch(url);
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

// Display my json data to my webpage
function displayResults(data){
    console.log('hello')

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
    const image=document.createElement('img');

    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;


    image.setAttribute('SRC', iconsrc);
    image.setAttribute('alt', data.weather[0].description );
    image.setAttribute('loading', 'lazy');
    image.setAttribute('width', '200');
    image.setAttribute('height', '200');


    iconImageBox.appendChild(image);
    infoBox.appendChild(temp);
    infoBox.appendChild(description)
    infoBox.appendChild(high);
    infoBox.appendChild(low);
    infoBox.appendChild(humidity);
    infoBox.appendChild(sunrise);


    currentWeather.appendChild(infoBox);
    currentWeather.appendChild(iconImageBox);

}



// Start the process
apiFetch();

