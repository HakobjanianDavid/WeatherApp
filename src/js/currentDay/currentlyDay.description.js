import { positionLatitude, positionLongitude } from "../logic";
import { template } from "../htmlTemplate";
import { weatherDescription } from "../templateCreating";


export function addCurrentlyDayDescription() {
    // console.log(typeof lat, typeof long);
    template.temperatureDegree.textContent = weatherDescription.temperature.toFixed(1) + '°';

    template.temperatureDescription[0].textContent = weatherDescription.summary;
    template.temperatureDescription[1].textContent = `Feels like: ${weatherDescription.apparentTemperature.toFixed(1)}°`;
    template.temperatureDescription[2].textContent = `Wind: ${weatherDescription.windSpeed.toFixed(1)}`;
    template.temperatureDescription[3].textContent = `Humidity: ${Math.round(weatherDescription.humidity)}`;
    template.location.textContent = weatherDescription.timezone;

    template.positionOfInputCity.innerHTML = `<p class = "latAndLong">Latitude: <span>${positionLatitude.toFixed(2)}</span> <br> Longitude: <span>${positionLongitude.toFixed(2)}</span></p>`;
}