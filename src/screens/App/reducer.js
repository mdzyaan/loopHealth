/*
 *
 * App reducer
 *
 */
import produce from 'immer';

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

export const initialState = {
  loading: false,
  error: false,
  product: {
    loading: false,
    error: false,
    data: [],
  },
  categories: [],
  selectedCategory: [],
};

const appReducer = (state = initialState, action) => {

  return produce(state, draft => {
    switch (action.type) {
      case SET_CATEGORIES:
        draft.categories = action.payload.data;
        break;
      case SET_SELECTED_CATEGORIES:
        draft.selectedCategory = action.payload.data;
        break;

      case FETCH_PRODUCT_LIST_START:
        draft.product.loading = true;
        draft.product.error = false;
        break;

      case FETCH_PRODUCT_LIST_SUCCESS:
        draft.product.loading = false;
        draft.product.error = false;
        draft.product.data = action.payload.data
        break;
        
      case FETCH_PRODUCT_LIST_ERROR:
        draft.product.loading = false;
        draft.product.error = action.error;
        break;
      case APP_START:
        draft.loading = true;
        draft.error = false;
        break;

      case APP_SUCCESS:
        draft.loading = false;
        draft.error = false;
        draft.data = action.payload.data
        break;
        
      case APP_ERROR:
        draft.loading = false;
        draft.error = action.error;
        break;
    }
  });
}


export default appReducer;