import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these Services!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/aerobics.jpg'
              text='AEROBICS CLASSES'
              label='Exercise'
              path='/services'
            />
            <CardItem
              src='images/functional.jpg'
              text='FUNCTIONAL TRAINING AREA AND PLYOMETRIC BOXES'
              label='WORKOUT'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/spinning.jpg'
              text='SPINNING STUDIO'
              label='Workout'
              path='/services'
            />
            <CardItem
              src='images/yoga.jpg'
              text='YOGA CLASSES'
              label='Meditation'
              path='/products'
            />
            <CardItem
              src='images/zumba.jpg'
              text='ZUMBA CLASSES'
              label='Workout'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
