import { all, fork } from 'redux-saga/effects';


import { appSaga } from '../screens/App/saga';
import { productListSaga } from '../screens/ProductList/saga';

export function* rootSaga() {
    yield all([
        fork(appSaga),
        // fork(productListSaga),
    ]);
};