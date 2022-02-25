import axios from 'axios';

// const url = 'http://localhost:5000';
const remote_url = 'https://lassod.herokuapp.com/api/v2';

const API = axios.create({ baseURL: remote_url });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('token')) {
    req.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  }
  return req;
});

////AUTH
export const login = (formdata) => API.post('/users/login', formdata);
export const getMe = () => API.get('/users/me');
export const signup = (formdata) => API.post('/users/signup', formdata);
export const getHotels = () => API.get('/hotels');
export const addBooking = (formdata) => API.post('/bookings', formdata);
