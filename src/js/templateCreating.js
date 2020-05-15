import { template } from './htmlTemplate';
import { setCurrentDay } from './currentDay/DayOfWeek';
import { setCurrentMonth } from './currentDay/currentMonth';
import { setWeatherIcon } from './currentDay/currentWeatherIcon';
import { addThreeDayForecast } from './forecast/forecast.temperature';
import { addForecastIcons } from './forecast/forecast.icons';
import { addCurrentlyDayDescription } from './currentDay/currentlyDay.description';
import { clock } from './currentDay/clock';

let pIcon;
let dailyDates;
let weatherDescription;
let currentlyTemperature;


function templateCreating(funcLatitude, funcLongitude) {
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    const api = `${proxy}https://api.darksky.net/forecast/{someToken}/${funcLatitude},${funcLongitude}`;

    fetch(api)
        .then(response => {
            return response.json();
        })
        .then(data => {
            const time = data.currently.time;

            dailyDates = data.daily.data;
            pIcon = data.currently.icon;
            currentlyTemperature = data.currently.temperature;
            
            weatherDescription = {
                summary: data.currently.summary,
                apparentTemperature: data.currently.apparentTemperature,
                windSpeed: data.currently.windSpeed,
                humidity: data.currently.humidity,
                temperature: data.currently.temperature,
                timezone: data.timezone,
            };

            let timimg = new Date();
            let currentlyDayTime = timimg.getDay(time);

            let currentlyMounthName = timimg.getUTCMonth(time);

            // Day of the week
            setCurrentDay(currentlyDayTime);

            // Current mounth
            setCurrentMonth(currentlyMounthName);

            // Day number
            template.todaysValue[1].textContent = timimg.getDate();

            // Current time
            clock();
            setInterval(clock, 10000);
            setWeatherIcon();

            // Create html template of location and currently day forecast with description
            addCurrentlyDayDescription();


            // Rigth sideBar with 3 days weather forecast
            addForecastIcons();
            addThreeDayForecast(currentlyDayTime);
        })
        .catch(
            function () {
                console.log('oh no');
            }
        );

    // rewrite global variables of longitude and latitude
    // so that every event redraw page with new dates
    // lat = funcLatitude;
    // long = funcLongitude;
}

// function clock() {
//     var date = new Date(),
//         hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours(),
//         minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes(),
//         seconds = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();
//     template.todaysValue[3].textContent = hours + ' : ' + minutes + ' : ' + seconds;
// }

export { templateCreating, pIcon, dailyDates, weatherDescription, currentlyTemperature };