import { template } from "../htmlTemplate";
import { dailyDates } from "../templateCreating";

export function addForecastIcons() {
    for (let i = 0; i < template.threeDayForecastIcons.length; i++) {
        template.threeDayForecastIcons[i].className = `littleIcon ${dailyDates[i].icon}`;
    }
}