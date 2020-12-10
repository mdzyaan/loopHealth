/*
 *
 * App reducer
 *
 */
import produce from 'immer';
import { APP_START, APP_SUCCESS, APP_ERROR } from './constants';

export const initialState = {
  loading: false,
  error: false,
  data: {}
};

const appReducer = (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
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