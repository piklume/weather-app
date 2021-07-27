import { all, call } from 'redux-saga/effects';

import { countrySagas } from './country/country.saga';

export default function* rootSaga() {
    yield all([
        call(countrySagas)
    ]);
}