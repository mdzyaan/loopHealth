import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the productList state domain
 */

const selectProductListDomain = state => state.productList || initialState;

const makeSelectProductListState = () => createSelector( selectProductListDomain, subState => subState);

/**
 * Other specific selectors
 */

const makeSelectLoading = () =>
  createSelector(
    selectProductListDomain,
    subState => subState.loading,
  );

const makeSelectError = () =>
  createSelector(
    selectProductListDomain,
    subState => subState.error,
  );



export { makeSelectProductListState, makeSelectLoading, makeSelectError };