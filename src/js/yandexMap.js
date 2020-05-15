import {positionLatitude, positionLongitude} from "./logic";

let myMap; 

function init(positionLatitude, positionLongitude) {
    myMap = new ymaps.Map('map', {
        center: [positionLatitude, positionLongitude],
        zoom: 12
    }, {
        searchControlProvider: 'yandex#search'
    });
}

function redrawMap() {
    myMap.destroy();
    ymaps.ready(init(positionLatitude, positionLongitude));
}

export {myMap, init, redrawMap};
