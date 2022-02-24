import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { resetPass } from '../../store/actions/auth';
import Toast from '../../utils/Toast';

const Resetpasspage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const [formdata, setFormdata] = useState({
    passwordResetToken: location.search.split('=')[1],
    password: '',
    passwordConfirm: '',
  });
  const handleForm = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formdata.password !== formdata.passwordConfirm) return Toast('Passwords fo not match', 'error');
    if (formdata.password === '' || formdata.passwordConfirm === '') return Toast('Fill all fields', 'error');
    dispatch(resetPass(formdata, navigate));
  };
  return (
    <div className='book'>
      <form className='form password-reset-form' autoComplete='off'>
        <h1 className='top-heading mb-md'>RESET PASSWORD</h1>

        <div className='form__group'>
          <input type='password' className='form__input' placeholder='New Password (minimum of 8 characters)' required minLength='8' name='password' onChange={(e) => handleForm(e)} />
          <label htmlFor='password' className='form__label'>
            Password
          </label>
        </div>

        <div className='form__group'>
          <input type='password' className='form__input' placeholder='Confirm New Password (minimum of 8 characters)' required minLength='8' name='passwordConfirm' onChange={(e) => handleForm(e)} />
          <label htmlFor='passwordConfirm' className='form__label'>
            Password Confirm
          </label>
        </div>

        <div className='form__group'>
          <button className='btn btn--gold' onClick={handleSubmit}>
            Reset Password
          </button>
        </div>

        <div className='form__button-box'>
          <Link to='/login' className='btn--form'>
            login
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

export default Resetpasspage;
