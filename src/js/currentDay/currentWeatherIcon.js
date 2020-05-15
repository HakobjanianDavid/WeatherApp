import { weatherIcon } from '../constants';
import { template } from '../htmlTemplate';
import { pIcon } from '../templateCreating';

export function setWeatherIcon() {
    for (let i = 0; i < weatherIcon.length; i++) {
        if (weatherIcon[i] == pIcon) {
            template.mainIcon.classList.add(pIcon);
        }
    }
}