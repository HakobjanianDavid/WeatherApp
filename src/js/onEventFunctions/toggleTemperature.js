import { template } from "../htmlTemplate";
import { currentlyTemperature, dailyDates } from "../templateCreating";

export function toggleTemperature() {
    if (template.temperatureControll.textContent === 'F°') {
        template.temperatureControll.textContent = 'C°';
        template.temperatureDegree.textContent = ((currentlyTemperature.toFixed(1) * 9 / 5) + 32).toFixed(1) +  '°';

        for (let i = 0; i < template.averagetemperatureOfForecast.length; i++) {
            let averagetemperature = ((dailyDates[i].temperatureHigh + dailyDates[i].temperatureLow) / 2).toFixed(1);
            template.averagetemperatureOfForecast[i].textContent = (-(-averagetemperature * 9 / 5) + 32).toFixed(1) + '°';
        }
    } else {
        template.temperatureControll.textContent = 'F°';

        template.temperatureDegree.textContent = currentlyTemperature.toFixed(1) + '°';


        for (let i = 0; i < template.averagetemperatureOfForecast.length; i++) {
            let averagetemperature = ((dailyDates[i].temperatureHigh + dailyDates[i].temperatureLow) / 2).toFixed(1);
            template.averagetemperatureOfForecast[i].textContent = averagetemperature + '°';
        }
    }
}