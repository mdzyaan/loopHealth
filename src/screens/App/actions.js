/*
 *
 * App actions
 *
 */

import { 
  APP_START, 
  APP_SUCCESS, 
  APP_ERROR,
  FETCH_PRODUCT_LIST_START, 
  FETCH_PRODUCT_LIST_SUCCESS, 
  FETCH_PRODUCT_LIST_ERROR,
  SET_CATEGORIES,
  SET_SELECTED_CATEGORIES
} from './constants';

export const fetchProductListAction = {
  start: () => {
    return {
      type: FETCH_PRODUCT_LIST_START, 
    }
  },
  success: (data) => {
    return {
      type: FETCH_PRODUCT_LIST_SUCCESS,
      payload: {data},
    }
  },
  error: ({ error }) => {
    return {
      type: FETCH_PRODUCT_LIST_ERROR,
      payload,
      metadata
    }
  }
};

export const AppAction = {
  start: ({ payload, metadata }) => {
    return {
      type: APP_START, 
      payload, 
      metadata
    }
  },
  success: ({ payload, metadata }) => {
    return {
      type: APP_SUCCESS,
      payload,
      metadata
    }
  },
  error: ({ error }) => {
    return {
      type: APP_ERROR,
      payload,
      metadata
    }
  }
};

export const setCategoriesList = (data) => {
  return {
    type: SET_CATEGORIES,
    payload: {data}
  }
}

export const setSelectedCategoriesList = (data) => {
  return {
    type: SET_SELECTED_CATEGORIES,
    payload: {data}
  }
}