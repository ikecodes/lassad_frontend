import React from 'react';
import Searchbar from '../Searchbar/Searchbar';

const HeaderCarousel = () => {
  return (
    <div className='wrapper-wrapper'>
      <div className='wrapper-carousel'>
        <div>
          <h1>Find and Book Hotels in Nigeria</h1>
          <p>Search through over 10,000 hotels in Nigeria</p>
          <Searchbar placeholder='Search for particular hotel' />
        </div>
      </div>
    </div>
  );
};

export default HeaderCarousel;
