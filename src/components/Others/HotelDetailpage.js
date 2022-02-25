import React, { useState } from 'react';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { HiLocationMarker } from 'react-icons/hi';
import {
  FaFantasyFlightGames,
  FaHospitalAlt,
  FaSwimmingPool,
  FaUtensils,
} from 'react-icons/fa';
import { makeReservation } from '../../store/actions/auth';
import CarouselImg from '../../assets/images/contact.jpg';
import Searchbar from '../Searchbar/Searchbar';
const HotelDetailpage = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const id = location.search.split('?')[1];
  const hotel = useSelector((state) =>
    state.auth.hotels.find((hotel) => hotel._id === id)
  );
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState('');
  const [room, setRoom] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('');
  const [days, setDays] = useState('');
  const [roomname, setRoomname] = useState('');
  const [fulldate, setFulldate] = useState('');

  const checkAvailability = () => {
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const firstDate = new Date(startDate);
    const secondDate = new Date(endDate);
    const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
    setFulldate(`${startDate}-${endDate}`);
    return diffDays;
  };
  const handleRoomSelect = (id) => {
    const totalDays = checkAvailability();
    const { name, price } = hotel.rooms.find((room) => room._id === id);
    setRoom(room);
    setDisabled(true);
    const totalAmountToBePaid = totalDays * price;
    setAmount(totalAmountToBePaid);
    setDays(totalDays);
    setRoomname(name);
  };
  const config = {
    public_key: 'FLWPUBK_TEST-cc295b6365f505f510da6be586b28618-X',
    tx_ref: Date.now(),
    amount: amount,
    currency: 'NGN',
    payment_options: 'card',
    customer: {
      email: email,
      name: `${firstname} ${lastname}`,
    },
    customizations: {
      title: 'Room reservations',
      description: 'Payment for room reservation',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };

  const handleFlutterPayment = useFlutterwave(config);
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
        <h1 className='top-heading'>{hotel.name}</h1>
        <div className='d-flex align-items-center'>
          <HiLocationMarker size={20} />
          <span className='hoteldetail_location'>{hotel.location}</span>
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
                <p>{hotel.description}</p>
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
                {amount && (
                  <div className='d-flex align-items-center justify-content-between bg-light'>
                    <p className='m-0' style={{ fontSize: '2rem' }}>
                      To pay total of ₦{amount} for {days} night
                    </p>
                    <button
                      className='btn btn-primary my-4'
                      onClick={() => {
                        handleFlutterPayment({
                          callback: (response) => {
                            if (response.status === 'successful') {
                              dispatch(
                                makeReservation(
                                  {
                                    firstname,
                                    lastname,
                                    email,
                                    hotel: hotel._id,
                                    roomname,
                                    days,
                                    amount,
                                    fulldate,
                                  },
                                  navigate
                                )
                              );
                            }
                            closePaymentModal(); // this will close the modal programmatically
                          },
                          onClose: () => {},
                        });
                      }}
                    >
                      Pay Now
                    </button>
                  </div>
                )}

                <div className='pt-5'>
                  {hotel.rooms.map((room) => (
                    <div
                      className='d-flex mb-5 align-items-center justify-content-between'
                      key={room._id}
                    >
                      <img src={room.image} alt='' />
                      <div>
                        <h1>{room.name}</h1>
                        <h2>₦{room.price}</h2>
                      </div>
                      <button
                        className='btn  btn--gold btn-sm'
                        disabled={disabled}
                        onClick={() => handleRoomSelect(room._id)}
                      >
                        select room
                      </button>
                    </div>
                  ))}
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
