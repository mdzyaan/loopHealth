// Imports: Dependencies
import { takeLatest, put } from 'redux-saga/effects';

import { PRODUCTLIST_START } from './constants';
import { ProductListAction } from './actions';

function* fetchproductListData() {
    try {
        let data = {};


        yield put(ProductListAction.success(data.data));
    }
    catch (error) {
        console.log(error);
    }
};

export function* productListSaga() {
    yield takeLatest(PRODUCTLIST_START, fetchproductListData);
};