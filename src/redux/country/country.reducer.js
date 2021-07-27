import CountryActionTypes from './country.types';

const INITIAL_STATE = {
    countryInfo: {},
    isFetching: false,
    errorMessage: ''
}

const countryReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case CountryActionTypes.FETCH_COUNTRY_START:
            return {
                ...state,
                isFetching: true
            }
        case CountryActionTypes.FETCH_COUNTRY_SUCCESS:
            return {
                ...state,
                countryInfo: action.payload,
                isFetching: false,
                errorMessage: ''
            }
        case CountryActionTypes.FETCH_COUNTRY_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }
        default:
            return state;
    }
};

export default countryReducer;