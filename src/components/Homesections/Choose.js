import React from 'react';
import { FaPaperPlane, FaLock, FaComment } from 'react-icons/fa';
const Choose = () => {
  return (
    <div className='choose-section'>
      <h1 className='top-heading mb-md'>why Choose Us</h1>
      <div className='choose'>
        <div className='choose__box'>
          <FaPaperPlane className='choose__box__svg' />

          <h1 className='choose__box__head'>Fast Booking</h1>
          <p className='choose__box__text'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
            maxime nesciunt, velit dolor minus illo, fugiat adipisci inventore
            similique excepturi ipsam nostrum commodi tempore? Sint officiis
            fugit optio nobis beatae.
          </p>
        </div>
        <div className='choose__box'>
          <FaLock className='choose__box__svg' />

          <h1 className='choose__box__head'>Secured Payment</h1>
          <p className='choose__box__text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
            repellendus! Assumenda, amet perferendis veniam delectus ullam
            reprehenderit minus, doloremque est excepturi reiciendis cupiditate,
            nulla maxime. Rem inventore ratione quod dolore.
          </p>
        </div>
        <div className='choose__box'>
          <FaComment className='choose__box__svg' />

          <h1 className='choose__box__head'>24/7 Support</h1>
          <p className='choose__box__text'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique
            officiis soluta dolores accusamus obcaecati, eveniet doloremque
            tempore doloribus earum quis sapiente! Pariatur quam optio
            reiciendis fugit libero fuga quae? At.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Choose;
