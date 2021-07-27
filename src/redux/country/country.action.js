import CountryActionTypes from "./country.types";

export const fetchCountryStart = (searchText) => ({
    type: CountryActionTypes.FETCH_COUNTRY_START,
    payload: searchText
});

export const fetchCountrySuccess = (country) => ({
    type: CountryActionTypes.FETCH_COUNTRY_SUCCESS,
    payload: country
});

export const fetchCountryFailure = (errorMessage) => ({
    type: CountryActionTypes.FETCH_COUNTRY_FAILURE,
    payload: errorMessage
});

export const fetchWeatherStart = () => ({
    type: CountryActionTypes.FETCH_WEATHER_START
});

export const fetchWeatherSuccess = (weather) => ({
    type: CountryActionTypes.FETCH_WEATHER_SUCCESS,
    payload: weather
});

export const fetchWeatherFailure = (errorMessage) => ({
    type: CountryActionTypes.FETCH_WEATHER_FAILURE,
    payload: errorMessage
});

