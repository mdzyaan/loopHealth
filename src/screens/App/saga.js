// Imports: Dependencies
import { delay, takeEvery, takeLatest, put } from 'redux-saga/effects';

import { APP_START, APP_SUCCESS, APP_ERROR } from './constants';
import { AppAction } from './actions';

function* fetchappData() {
    try {
        let data = {};

        yield put(AppAction.success(data.data));
    }
    catch (error) {
        console.log(error);
    }
};
// Watcher: Increase Counter Async
export function* appSaga() {
    // Take Last Action Only
    yield takeLatest(APP_START, fetchappData);
};