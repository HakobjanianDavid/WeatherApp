import { weekDay } from '../constants';
import { template } from '../htmlTemplate';

export function setCurrentDay(currenDay) {
    Object.keys(weekDay).forEach(element => {
        if (element == currenDay) {
            template.todaysValue[0].textContent = weekDay[element];
        }
    });
}