import { call, put, all, takeLatest, select } from 'redux-saga/effects';

import { fetchCountrySuccess,fetchCountryFailure,fetchWeatherSuccess,fetchWeatherFailure } from './country.action';

import CountryActionTypes from './country.types';
import { selectCountryValues } from './country.selector';

if(process.env.NODE_ENV !== 'production') require('dotenv').config();
const apiKey = process.env.WEATHERSTACK_API_KEY;

export function* fetchCountryAsync(action) {
   yield console.log('In fetchCountryAsync, searching -',action.payload)
   try {
       const countryData = yield fetch(`http://restcountries.eu/rest/v2/name/${action.payload}`)
       .then(response => response.json());
    yield console.log(countryData.length);

    let countryInfo;
    if(countryData.length === 1) {
        countryInfo = yield {
            CountryName: countryData[0].name,
            Capital: countryData[0].capital, 
            Population: countryData[0].population,
            LatLong: countryData[0].latlng,
            CountryFlag: countryData[0].flag
        }     
    } else if (countryData.length > 1) {
        countryInfo = yield {
            CountryName: countryData[1].name,
            Capital: countryData[1].capital, 
            Population: countryData[1].population,
            LatLong: countryData[1].latlng,
            CountryFlag: countryData[1].flag
        }  
    }
          
    yield put(fetchCountrySuccess(countryInfo));
   } catch(error) {
       yield put(fetchCountryFailure(error.message));
   }
}

export function* fetchWeatherAsync() {
    yield console.log('In fetchWeatherAsync - ',apiKey)
    // yield console.log(country.CountryName);
    try {
        const tempApiKey = '0fa642cd1eb503e292950eae74246c2d';
        let country = yield select(selectCountryValues);
        const weatherData = yield fetch(`http://api.weatherstack.com/current?access_key=${tempApiKey}&query=${country.CountryName}`)
        .then(response => response.json());

        // yield console.log(weatherData.current);

        const weather = {
            Temperature: weatherData.current.temperature,
            WeatherIcons: weatherData.current.weather_icons,
            WindSpeed: weatherData.current.wind_speed,
            Precip: weatherData.current.precip
        }

        // yield console.log(weather);

        yield put(fetchWeatherSuccess(weather));
    } catch(error) {
        yield put(fetchWeatherFailure(error.message));
    }
 }

export function* onFetchCountryStart() {
    yield takeLatest(
        CountryActionTypes.FETCH_COUNTRY_START,
        fetchCountryAsync
    )
}

export function* onFetchWeatherStart() {
    yield takeLatest(
        CountryActionTypes.FETCH_WEATHER_START,
        fetchWeatherAsync
    )
}

export function* countrySagas() {
    yield all([
        call(onFetchCountryStart),
        call(onFetchWeatherStart)
    ]);
}