let temperatureDescription = document.querySelectorAll(".temperature_description_title span");
let mainIcon = document.querySelector('.icon');
let weekDaysOfForecast = document.querySelectorAll('.threeDayForecast > div h3');
let averagetemperatureOfForecast = document.querySelectorAll('.threeDayForecast > div h4');
let threeDayForecastIcons = document.querySelectorAll('.threeDayForecast div div');
let todaysValue = document.querySelectorAll('.todayWeatherTitle__todaysValue div');
let temperatureDegree = document.querySelector(".temperature_degree");
let location = document.querySelector(".todayWeatherTitle__location");

const sityName = document.getElementById('sityName');
const positionOfInputCity = document.querySelector('.positionOfInputCity');
const sityBtn = document.querySelector('.sityBtn');

const temperatureControll = document.querySelector('.units .temprature');
temperatureControll.textContent = 'F°';

const updateBackground = document.querySelector('.update');
const mainWrap = document.getElementById('mainWrap');

export let template = {
    temperatureDescription: temperatureDescription,
    mainIcon: mainIcon,
    weekDaysOfForecast: weekDaysOfForecast,
    averagetemperatureOfForecast: averagetemperatureOfForecast,
    threeDayForecastIcons: threeDayForecastIcons,
    todaysValue: todaysValue,
    temperatureDegree: temperatureDegree,
    location: location,
    sityName: sityName,
    positionOfInputCity: positionOfInputCity,
    sityBtn: sityBtn,
    temperatureControll: temperatureControll,
    updateBackground: updateBackground,
    mainWrap: mainWrap
};
