import React, { useState } from 'react';
import { HiLocationMarker } from 'react-icons/hi';
import {
  FaFantasyFlightGames,
  FaHospitalAlt,
  FaSwimmingPool,
  FaUtensils,
} from 'react-icons/fa';
import CarouselImg from '../../assets/images/contact.jpg';
import Searchbar from '../Searchbar/Searchbar';
const HotelDetailpage = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState('');
  const [room, setRoom] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');

  const checkAvailability = () => {
    console.log(startDate, endDate, room, firstname, lastname, email);
  };
  return (
    <div className='hoteldetail-section'>
      <div className='hoteldetail_search-box'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <Searchbar placeholder='Find another hotel' />
            </div>
          </div>
        </div>
      </div>
      <div className='px-5 pt-5'>
        <h1 className='top-heading'>Swiss International Beland Hotel</h1>
        <div className='d-flex align-items-center'>
          <HiLocationMarker size={20} />
          <span className='hoteldetail_location'>
            Plot P/14 Public Building Layout Imo Specialist Hospital Umuguma
            Road New Owerri, New Owerri, Imo
          </span>
        </div>
      </div>
      <div className='hoteldetail_carousel'>
        <div className='hoteldetail_image-box'>
          <img src={CarouselImg} alt='' className='hoteldetail_image' />
        </div>
        <div className='hoteldetail_image-box'>
          <img src={CarouselImg} alt='' className='hoteldetail_image' />
        </div>
        <div className='hoteldetail_image-box'>
          <img src={CarouselImg} alt='' className='hoteldetail_image' />
        </div>
        <div className='hoteldetail_image-box'>
          <img src={CarouselImg} alt='' className='hoteldetail_image' />
        </div>
      </div>
      <div className='hoteldetail_detail'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-6'>
              <h1>Information about Swiss International Beland Hotel</h1>
              <ul>
                <li>
                  <FaSwimmingPool color='blue' />
                  <span>swimming</span>
                </li>
                <li>
                  <FaUtensils color='red' />
                  <span>restuarant</span>
                </li>
                <li>
                  <FaFantasyFlightGames color='green' />
                  <span>fitness facility</span>
                </li>
                <li>
                  <FaHospitalAlt color='orange' />
                  <span>event hall</span>
                </li>
              </ul>
              <div>
                <p>
                  Located in a serene environment in the heart of Owerri Capital
                  City, Swiss International Beland is the tallest hotel in Imo
                  State. As the tallest hotel, Swiss International Beland offers
                  incredible panoramic views of Owerri City and is known by some
                  as the ‘Beland Tower’.
                </p>
                <p>
                  Located in a serene environment in the heart of Owerri Capital
                  City, Swiss International Beland is the tallest hotel in Imo
                  State. As the tallest hotel, Swiss International Beland offers
                  incredible panoramic views of Owerri City and is known by some
                  as the ‘Beland Tower’.
                </p>
              </div>
            </div>
            <div className='col-lg-6'>
              <h1>Book rooms in Swiss International Beland Hotel online</h1>

              <div className='d-flex align-items-center gap-3'>
                <div className='d-flex align-items-center'>
                  <h3 className='me-3'>Check In</h3>
                  <input
                    type='date'
                    onChange={(e) => setStartDate(e.target.value)}
                  />
                </div>
                <div className='d-flex align-items-center'>
                  <h3 className='me-3'>Check Out</h3>
                  <input
                    type='date'
                    onChange={(e) => setEndDate(e.target.value)}
                  />
                </div>
              </div>
              <div className='py-4'>
                <input
                  type='text'
                  placeholder='First name'
                  onChange={(e) => setFirstname(e.target.value)}
                />
                <input
                  type='text'
                  placeholder='Last name'
                  onChange={(e) => setLastname(e.target.value)}
                />
                <input
                  type='email'
                  placeholder='Email address'
                  onChange={(e) => setEmail(e.target.value)}
                />

                <button className='btn btn-primary my-4'>Pay Now</button>
                <div className='pt-5'>
                  <div className='d-flex mb-5 align-items-center justify-content-between'>
                    <img src={CarouselImg} alt='' />
                    <div>
                      <h1>Superior single</h1>
                      <h2>₦35,500</h2>
                    </div>
                    <button className='btn  btn--gold btn-sm'>
                      select room
                    </button>
                  </div>
                  <div className='d-flex mb-5 align-items-center justify-content-between'>
                    <img src={CarouselImg} alt='' />
                    <div>
                      <h1>Superior single</h1>
                      <h2>₦35,500</h2>
                    </div>
                    <button className='btn  btn--gold btn-sm'>
                      select room
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelDetailpage;
