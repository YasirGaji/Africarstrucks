import * as t from '../types';

export main = (state = {
  userInfo: {
    name: 'guest'
}, action) => {
  switch (action.type) {
    case t.SET_NAME:
      return {
        ...state,
        userInfo: {
          name: action.payload
        }
      }
    default:
      return state;
  }
}