import { LOGIN_USER } from '../_actions/types';

// eslint-disable-next-line func-names
export default function (state = {}, action) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loginSuccess: action.payload };

    default:
      return state;
  }
}
