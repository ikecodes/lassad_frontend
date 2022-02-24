import React from 'react';
import { Link } from 'react-router-dom';

const HomePlans = ({ type, min, max, profit, commission, daily }) => {
  return (
    <div className='plans'>
      <h1 className={`plans__head ${type.toLowerCase()}`}>{type.toUpperCase()}</h1>
      <ul className='plans__list'>
        <li className='plans__item'>INVESTMENT</li>
        <li className='plans__item'>MINIMUM: {min}</li>
        <li className='plans__item'>MAXIMUM: {max}</li>
        <li className='plans__item'>MONTHLY PROFIT: {profit}</li>
        <li className='plans__item'>COMMISSION: {commission}</li>
        <li className='plans__item'>DAILY RETURN: {daily}</li>
      </ul>
      <Link to='/' className='btn btn--gold btn--animated  btn--plans'>
        join now
      </Link>
    </div>
  );
};

export default HomePlans;
