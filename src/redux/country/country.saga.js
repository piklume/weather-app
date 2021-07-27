import { call, put, all, takeLatest } from 'redux-saga/effects';

import { fetchCountrySuccess,fetchCountryFailure } from './country.action';

import CountryActionTypes from './country.types';

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

export function* onFetchCountryStart() {
    yield takeLatest(
        CountryActionTypes.FETCH_COUNTRY_START,
        fetchCountryAsync
    )
}

export function* countrySagas() {
    yield all([
        call(onFetchCountryStart)
    ]);
}