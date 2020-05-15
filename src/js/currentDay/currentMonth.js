import { mounths } from '../constants';
import { template } from '../htmlTemplate';

export function setCurrentMonth(currentMounth) {
    Object.keys(mounths).forEach(element => {
        if (element == currentMounth) {
            template.todaysValue[2].textContent = mounths[element];
        }
    });
}
