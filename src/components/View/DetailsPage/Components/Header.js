import React from 'react';
import { HiBadgeCheck } from 'react-icons/hi';
import { FiInstagram } from 'react-icons/fi';
import './Header.css';

const Header = (props) => {
  return (
    <div className='details__Header'>
      <div className='details__shorDesc'>
        <h4>{props.shortDescription}</h4>
      </div>
      <div className='details__name'>
        <h1>{props.name}</h1>
        <HiBadgeCheck />
      </div>
      <div className='details__instagram'>
        <FiInstagram
          style={{ strokeWidth: '1px' }}
          className='details__instagram icon'
        />
        <p>{props.instagramAcc}</p>
      </div>
    </div>
  );
};

export default Header;