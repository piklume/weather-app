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