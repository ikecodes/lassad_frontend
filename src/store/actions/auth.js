import { AUTH, GET_USER, LOGOUT } from '../../constants/actionTypes';
import Toast from '../../utils/Toast';

import * as api from '../../api/api';

export const getMe = () => async (dispatch) => {
  try {
    const { data } = await api.getMe();
    dispatch({ type: GET_USER, data: data.doc });
  } catch (error) {
    console.log(error?.response?.data?.message);
  }
};
export const login = (formdata, navigate) => async (dispatch) => {
  try {
    const {
      data: { token },
    } = await api.login(formdata);
    dispatch({ type: AUTH, data: token });
    Toast('Successful login', 'success');
    setTimeout(() => {
      navigate('/dashboard');
    }, 3000);
  } catch (error) {
    Toast(error?.response?.data?.message, 'error');
  }
};
export const signup = (formdata, navigate) => async (dispatch) => {
  try {
    await api.signup(formdata);
    Toast('Successfully created account, proceed to login', 'success');
    setTimeout(() => {
      navigate('/login');
    }, 3000);
  } catch (error) {
    Toast(error?.response?.data?.message, 'error');
  }
};
export const logout = (navigate) => async (dispatch) => {
  try {
    dispatch({ type: LOGOUT });
    Toast('logging you out', 'info');
    navigate('/');
  } catch (error) {
    Toast(error?.response?.data?.message, 'error');
  }
};
