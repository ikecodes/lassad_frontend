import React from 'react';
import { Link } from 'react-router-dom';

const TradePlans = ({ type, min, max, profit, commission, daily }) => {
  return (
    <div className='trading__box'>
      <h1 className={`trading__head ${type.toLowerCase()}`}>
        {type.toUpperCase()}
      </h1>
      <ul className='trading__list'>
        <li className='trading__item'>INVESTMENT</li>
        <li className='trading__item'>MINIMUM: {min}</li>
        <li className='trading__item'>MAXIMUM: {max}</li>
        <li className='trading__item'>MONTHLY PROFIT: {profit}</li>
        <li className='trading__item'>COMMISSION: {commission}</li>
        <li className='trading__item'>DAILY RETURN: {daily}</li>
      </ul>
      <Link to={`/trading/${type}`} className='btn-trade'>
        invest
      </Link>
    </div>
  );
};

export default TradePlans;
