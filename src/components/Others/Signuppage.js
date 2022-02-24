import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Toast from '../../utils/Toast';
import { signup } from '../../store/actions/auth';

const Signuppage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formdata, setFormdata] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    passwordConfirm: '',
    phone: '',
  });
  const handleChange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formdata.password !== formdata.passwordConfirm)
      return Toast('Passwords do not match', 'error');
    if (
      formdata.name === '' ||
      formdata.email === '' ||
      formdata.password === '' ||
      formdata.country === '' ||
      formdata.phone === ''
    )
      return Toast('All fields must be filled', 'error');
    dispatch(signup(formdata, navigate));
  };
  return (
    <div className='book-register'>
      <form className='form' autoComplete='off'>
        <h1 className='top-heading mb-md'>create account</h1>

        <div className='form__group'>
          <input
            type='text'
            className='form__input'
            placeholder='First name'
            name='name'
            required
            minLength='10'
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor='name' className='form__label'>
            First Name
          </label>
        </div>
        <div className='form__group'>
          <input
            type='text'
            className='form__input'
            placeholder='Last name'
            name='name'
            required
            minLength='10'
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor='name' className='form__label'>
            Last Name
          </label>
        </div>

        <div className='form__group'>
          <input
            type='email'
            className='form__input'
            placeholder='Email address'
            name='email'
            required
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor='email' className='form__label'>
            Email address
          </label>
        </div>

        <div className='form__group'>
          <input
            type='password'
            className='form__input'
            placeholder='••••••••'
            required
            minLength='8'
            name='password'
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor='password' className='form__label'>
            Password
          </label>
        </div>

        <div className='form__group'>
          <input
            type='password'
            className='form__input'
            placeholder='••••••••'
            required
            minLength='8'
            name='passwordConfirm'
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor='passwordConfirm' className='form__label'>
            Password Confirm
          </label>
        </div>

        <div className='form__group'>
          <input
            type='number'
            className='form__input'
            placeholder='Telephone Number'
            required
            minLength='8'
            name='phone'
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor='phone' className='form__label'>
            Telephone Number
          </label>
        </div>

        <div className='form__group'>
          <button className='btn btn--gold' onClick={handleSubmit}>
            create account
          </button>
        </div>

        <div className='form__button-box'>
          <Link to='/login' className='btn--form'>
            login
          </Link>
          <span className='form__divider'>&nbsp;</span>
          <Link to='/forgotPass' className='btn--form'>
            forgot your password?
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signuppage;
