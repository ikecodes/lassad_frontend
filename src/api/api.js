import axios from 'axios';

const url = 'http://localhost:5000';

const API = axios.create({ baseURL: url });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('token')) {
    req.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  }
  return req;
});

////AUTH
export const login = (formdata) => API.post('/login', formdata);
export const getMe = () => API.get('/me');
export const signup = (formdata) => API.post('/signup', formdata);
export const addHotel = (formdata) => API.post('/addHotel', formdata);
export const addBooking = (formdata) => API.post('/addBooking', formdata);
