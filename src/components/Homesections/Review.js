import React from 'react';
import { Carousel } from 'react-bootstrap';
import user1logo from '../../assets/images/user-1.jpg';
import user2logo from '../../assets/images/user-2.jpg';
import user3logo from '../../assets/images/user-3.jpg';
const Review = () => {
  return (
    <div className='review-section'>
      <h1 className='top-heading mb-md'>what our customers have to say</h1>

      <div className='reviews'>
        <Carousel style={{ maxWidth: '100%', width: '100%' }}>
          <Carousel.Item interval={1000}>
            <figure className='review'>
              <blockquote className='review__text'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
                cupiditate delectus odit consectetur perferendis, atque alias
                ratione distinctio qui dolore! Magni, accusantium similique
                exercitationem nobis culpa sit dolor atque facilis?
              </blockquote>
              <figcaption className='review__user'>
                <img src={user1logo} alt='User 1' className='review__photo' />
                <div className='review__user-box'>
                  <p className='review__user-name'>John Williams </p>
                  <p className='review__user-date'>Dec 23rd, 2021</p>
                </div>
              </figcaption>
            </figure>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <figure className='review'>
              <blockquote className='review__text'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error,
                cupiditate distinctio. At doloribus ab fugiat libero voluptas
                veniam earum architecto tempora vel nulla. Reiciendis cumque
                magnam non amet accusantium possimus!
              </blockquote>
              <figcaption className='review__user'>
                <img src={user2logo} alt='User 1' className='review__photo' />
                <div className='review__user-box'>
                  <p className='review__user-name'>Stephen Williams </p>
                  <p className='review__user-date'>Feb 24th, 2022</p>
                </div>
              </figcaption>
            </figure>
          </Carousel.Item>
          <Carousel.Item>
            <figure className='review'>
              <blockquote className='review__text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, tenetur laboriosam. Aliquam assumenda quaerat omnis
                perspiciatis consequatur eius rem veniam, fugit dolor non
                cupiditate adipisci. Est placeat temporibus quisquam illum!
              </blockquote>
              <figcaption className='review__user'>
                <img src={user3logo} alt='User 1' className='review__photo' />
                <div className='review__user-box'>
                  <p className='review__user-name'>Isabella Robbie </p>
                  <p className='review__user-date'>Jan 1st, 2022</p>
                </div>
              </figcaption>
            </figure>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Review;
