// Imports: Dependencies
import { call, takeEvery, takeLatest, put } from 'redux-saga/effects';

import { APP_START, FETCH_PRODUCT_LIST_START } from './constants';
import { AppAction , fetchProductListAction, setCategoriesList} from './actions';
import request from '../../utils/request';
import getCategoriesList from '../../utils/getCategoriesList';

function* fetchappData() {
    try {
        let data = {};

        yield put(AppAction.success(data.data));
    }
    catch (error) {
        console.log(error);
    }
};


function* fetchProductListData() {
    try {
        const response = yield call(request, {
            method: 'get',
            url: `https://demo7242716.mockable.io/products`,
          });
        yield put(setCategoriesList(getCategoriesList(response.data.products)))
        yield put(fetchProductListAction.success([...response.data.products]));
    }
    catch (error) {
        console.log(error);
    }
};

export function* appSaga() {
    yield takeLatest(APP_START, fetchappData);
    yield takeLatest(FETCH_PRODUCT_LIST_START, fetchProductListData);
};