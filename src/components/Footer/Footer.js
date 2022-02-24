import React from 'react';
import { FaTwitter, FaWhatsapp, FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__link-box'>
        <ul className='nav'>
          <li className='nav__item'>
            <Link to='/faq' className='nav__link'>
              FAQ
            </Link>
          </li>
          <li className='nav__item'>
            <Link to='/terms' className='nav__link'>
              terms & policy
            </Link>
          </li>
          <li className='nav__item'>
            <Link to='/about' className='nav__link'>
              about
            </Link>
          </li>
        </ul>
        <div className='footer__social'>
          <a href='http://localhost:3000/' rel='noreferrer' target='_blank'>
            <FaFacebook className='footer__social__svg footer__social__svg-1' />
          </a>
          <a href='http://localhost:3000/' rel='noreferrer' target='_blank'>
            <FaTwitter className='footer__social__svg footer__social__svg-2' />
          </a>
          <a href='http://localhost:3000/' rel='noreferrer' target='_blank'>
            <FaWhatsapp className='footer__social__svg footer__social__svg-3' />
          </a>
        </div>
      </div>

      <p className='copyright'>
        Copyright <span className='copyright__copy'>&copy;</span> 2022 Hotel
        connect inc. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
