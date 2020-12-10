import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the app state domain
 */

const selectAppDomain = state => state.app || initialState;

const makeSelectAppState = () => createSelector( selectAppDomain, subState => subState);

/**
 * Other specific selectors
 */

const makeSelectLoading = () =>
  createSelector(
    selectAppDomain,
    subState => subState.loading,
  );

const makeSelectError = () =>
  createSelector(
    selectAppDomain,
    subState => subState.error,
  );

const makeSelectProductError = () =>
  createSelector(
    selectAppDomain,
    subState => subState.product,
  );

const makeSelectCategoriesError = () =>
  createSelector(
    selectAppDomain,
    subState => subState.categories,
  );

const makeSelectSelectedCategoriesError = () =>
  createSelector(
    selectAppDomain,
    subState => subState.selectedCategory,
  );



export { makeSelectAppState, makeSelectLoading, makeSelectError ,makeSelectProductError,makeSelectCategoriesError, makeSelectSelectedCategoriesError};