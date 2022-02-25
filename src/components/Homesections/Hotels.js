import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getHotels } from '../../store/actions/auth';

const Hotels = () => {
  const dispatch = useDispatch();
  const hotels = useSelector((state) => state.auth.hotels);
  useEffect(() => {
    dispatch(getHotels());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className='top-section'>
      <h1 className='top-heading mb-md'>Top Hotels</h1>
      <div className='container'>
        <div className='row'>
          {hotels.length > 0 &&
            hotels.map((hotel) => (
              <div className='col-lg-4' key={hotel._id}>
                <div className='top_box'>
                  <Link to={`/hotel-detail?${hotel._id}`}>
                    <img src={hotel.photo} alt='' className='top_image' />
                  </Link>
                  <div className='p-4'>
                    <h2 className='top_name'>{hotel.name}</h2>
                    <p className='top_location'>{hotel.location}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Hotels;
