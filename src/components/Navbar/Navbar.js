import React, { useState, useEffect } from 'react';
// import decode from 'jwt-decode';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { getMe } from '../../store/actions/auth';

const Navbar = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const [shownav, setShownav] = useState(false);
  useEffect(() => {
    // if (localStorage.getItem('token')) {
    //   const decodedToken = decode(localStorage.getItem('token'));
    //   if (decodedToken.exp * 1000 < new Date().getTime())
    //     return dispatch(logout(navigate));
    //   }
    dispatch(getMe());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location, navigate]);
  return (
    <div className='navigation'>
      <div
        className={`navigation__button ${shownav ? 'clicked' : null}`}
        onClick={() => setShownav((prev) => !prev)}
      >
        <div className='navigation__icon'>&nbsp;</div>
      </div>
      <div className={`navigation__nav ${shownav ? 'clicked' : null}`}>
        <ul className={`navigation__list ${shownav ? 'clicked' : null}`}>
          <li className='navigation__item'>
            <Link to='/' className='navigation__link'>
              home
            </Link>
          </li>
          <div>
            <li className='navigation__item'>
              <Link to='/login' className='navigation__link'>
                login
              </Link>
            </li>
            <li className='navigation__item'>
              <Link to='/signup' className='navigation__link'>
                Signup
              </Link>
            </li>
          </div>

          <li className='navigation__item'>
            <Link to='/faq' className='navigation__link'>
              faq
            </Link>
          </li>
          <li className='navigation__item'>
            <Link to='/terms' className='navigation__link'>
              terms & policy
            </Link>
          </li>
          <li className='navigation__item'>
            <Link to='/about' className='navigation__link'>
              about
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
