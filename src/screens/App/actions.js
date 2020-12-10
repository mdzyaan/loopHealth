/*
 *
 * App actions
 *
 */

import { APP_START, APP_SUCCESS, APP_ERROR } from './constants';

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
