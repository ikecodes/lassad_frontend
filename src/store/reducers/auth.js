import { AUTH, GET_USER, UPDATE_USER, LOGOUT } from '../../constants/actionTypes';
const auth = (
  state = {
    token: null,
    user: null,
  },
  action
) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem('token', action.data);
      return {
        ...state,
        token: action.data,
      };
    case GET_USER:
      return {
        ...state,
        user: action.data,
      };
    case UPDATE_USER:
      return {
        ...state,
        user: action.data,
      };
    case LOGOUT:
      localStorage.clear();
      return {
        ...state,
        token: null,
        user: null,
      };
    default:
      return state;
  }
};

export default auth;
