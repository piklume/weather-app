import { createSelector } from 'reselect';

const selectCountry = state => state.country;

export const selectCountryValues = createSelector(
    [selectCountry],
    country => country.countryInfo
);

