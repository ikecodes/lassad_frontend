import React from 'react';
import { Link } from 'react-router-dom';
import hotelImg from '../../assets/images/contact.jpg';

const Hotels = () => {
  return (
    <div className='top-section'>
      <h1 className='top-heading mb-md'>Top Hotels</h1>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-4'>
            <div className='top_box'>
              <Link to='/hotel-detail'>
                <img src={hotelImg} alt='' className='top_image' />
              </Link>
              <div className='p-4'>
                <h2 className='top_name'>Africana hotel</h2>
                <p className='top_location'>Ikeja, Lagos</p>
              </div>
            </div>
          </div>
          <div className='col-lg-4'>
            <div className='top_box'>
              <img src={hotelImg} alt='' className='top_image' />
              <div className='p-4'>
                <h2 className='top_name'>Africana hotel</h2>
                <p className='top_location'>Ikeja, Lagos</p>
              </div>
            </div>
          </div>
          <div className='col-lg-4'>
            <div className='top_box'>
              <img src={hotelImg} alt='' className='top_image' />
              <div className='p-4'>
                <h2 className='top_name'>Africana hotel</h2>
                <p className='top_location'>Ikeja, Lagos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotels;
