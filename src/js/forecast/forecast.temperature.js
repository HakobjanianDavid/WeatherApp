import { dailyDates } from '../templateCreating';
import { template } from '../htmlTemplate';
import { weekDay } from '../constants';

export function addThreeDayForecast(today) {
    for (let i = 0; i < template.weekDaysOfForecast.length; i++) {
        let averagetemperature = ((dailyDates[i].temperatureHigh + dailyDates[i].temperatureLow) / 2).toFixed(1);
        template.averagetemperatureOfForecast[i].textContent = averagetemperature + '°';

        if (today < 7) {
            template.weekDaysOfForecast[i].textContent = weekDay[++today];
        }
        if (today === 7) {
            template.weekDaysOfForecast[i].textContent = weekDay[0];
        }
    }
}