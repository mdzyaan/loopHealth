/*
 *
 * ProductList actions
 *
 */

import { PRODUCTLIST_START, PRODUCTLIST_SUCCESS, PRODUCTLIST_ERROR } from './constants';

export const ProductListAction = {
  start: ({ payload, metadata }) => {
    return {
      type: PRODUCTLIST_START, 
      payload, 
      metadata
    }
  },
  success: ({ payload, metadata }) => {
    return {
      type: PRODUCTLIST_SUCCESS,
      payload,
      metadata
    }
  },
  error: ({ error }) => {
    return {
      type: PRODUCTLIST_ERROR,
      payload,
      metadata
    }
  }
};
