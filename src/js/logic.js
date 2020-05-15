import { template } from './htmlTemplate';
import { redrawMap, init } from './yandexMap';
import { templateCreating } from './templateCreating';
import { toggleTemperature } from './onEventFunctions/toggleTemperature';
import { redrawBackground } from './onEventFunctions/redrawBackground';

let positionLongitude;
let positionLatitude;

if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition 
        ((position) => { // look description of Anton
            positionLatitude = position.coords.latitude;
            positionLongitude = position.coords.longitude;

            templateCreating(positionLatitude, positionLongitude);
        });
}

window.addEventListener('load', () => {
    
    // Change the inscriptions and map on enter click
    template.sityBtn.onclick = function() {
        const cityName = template.sityName.value;
        redrawLocation(cityName);
        redrawBackground(cityName);
        return false;
    };

    // Change the inscriptions and map on button key down
    template.sityName.onkeydown = function(e){
        if(e.keyCode == 13){
            let cityName = template.sityName.value;
            redrawLocation(cityName);
            redrawBackground(cityName);
            
            return false;
        }
     };

     // Change background of page according to city
     template.updateBackground.onclick = function() {
        const cityName = template.sityName.value;
        redrawBackground(cityName);
    };

    // Change temperature scale (from C to F and back)
    template.temperatureControll.onclick = toggleTemperature;

    ymaps.ready(init(positionLatitude, positionLongitude));
});
    
function redrawLocation(city) {
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    const api = `${proxy}https://api.opencagedata.com/geocode/v1/json?q=${city}&key={someKey}&pretty=1&no_annotations=1`;
    
    fetch(api)
    .then(response => {
        return response.json();
    })
    .then(data => {
        const {lat, lng} = data.results[0].geometry;
        positionLatitude = lat;
        positionLongitude = lng;
        
        templateCreating(lat, lng);
        ymaps.ready(redrawMap());
    })
    .catch(
        function() {
            console.log('oh no');
        }
    );
}

export { positionLatitude, positionLongitude };
