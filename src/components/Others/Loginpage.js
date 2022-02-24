import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../store/actions/auth';
import Toast from '../../utils/Toast';

const Loginpage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formdata, setFormdata] = useState({
    email: '',
    password: '',
  });
  const handleChange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formdata.email === '' || formdata.password === '') return Toast('Fill all fields', 'info');
    dispatch(login(formdata, navigate));
  };
  return (
    <div className='book'>
      <form className='form' autoComplete='off'>
        <h1 className='top-heading mb-md'>login</h1>

        <div className='form__group'>
          <input type='email' className='form__input' placeholder='Email address' name='email' required onChange={(e) => handleChange(e)} />
          <label htmlFor='email' className='form__label'>
            Email address
          </label>
        </div>

        <div className='form__group'>
          <input type='password' className='form__input' placeholder='••••••••' required minLength='8' name='password' onChange={(e) => handleChange(e)} />
          <label htmlFor='password' className='form__label'>
            password
          </label>
        </div>

        <div className='form__group'>
          <button className='btn btn--gold' onClick={handleSubmit}>
            login
          </button>
        </div>

        <div className='form__button-box'>
          <Link to='/forgotPass' className='btn--form'>
            forgot password
          </Link>
          <span className='form__divider'>&nbsp;</span>
          <Link to='/signup' className='btn--form'>
            create account
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Loginpage;
