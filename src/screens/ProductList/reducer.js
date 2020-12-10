/*
 *
 * ProductList reducer
 *
 */
import produce from 'immer';
import { PRODUCTLIST_START, PRODUCTLIST_SUCCESS, PRODUCTLIST_ERROR } from './constants';

export const initialState = {
  loading: false,
  error: false,
  data: {}
};

const productListReducer = (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case PRODUCTLIST_START:
        draft.loading = true;
        draft.error = false;
        break;

      case PRODUCTLIST_SUCCESS:
        draft.loading = false;
        draft.error = false;
        draft.data = action.payload.data
        break;
        
      case PRODUCTLIST_ERROR:
        draft.loading = false;
        draft.error = action.error;
        break;
    }
  });
}


export default productListReducer;