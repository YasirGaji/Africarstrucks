import * as t from '../types';

export const setInfo = (name, payload) => {
  type: t.SET_NAME,
  payload: name
}