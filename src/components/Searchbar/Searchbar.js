import React from 'react';

const Searchbar = ({ placeholder }) => {
  return (
    <input
      type='text'
      name='search'
      placeholder={placeholder}
      className='search_bar'
    />
  );
};

export default Searchbar;
