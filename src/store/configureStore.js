import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import appReducer from '../screens/App/reducer';
import productListReducer from '../screens/ProductList/reducer';
import { rootSaga } from './rootSaga';
import createSagaMiddleware from 'redux-saga';

const composeEnhansers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export default () => {

    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(
        combineReducers({
            app: appReducer,
            // products: productListReducer,
        }),
        composeEnhansers(applyMiddleware(sagaMiddleware))
    );

    sagaMiddleware.run(rootSaga);

    return store;
}


