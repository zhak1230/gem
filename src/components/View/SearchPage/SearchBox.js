import React, { useState } from 'react';

import { FiSearch, FiX } from 'react-icons/fi';
import SearchResults from './SearchResults';

import './SearchBox.css';

const SearchBox = (props) => {
  const sendUserInput = (e) => {
    props.getUserInput(e);
  };

  return (
    <section className='SearchBox'>
      <div className='SearchBox__Container'>
        <FiSearch style={{ fontSize: '1.5rem', strokeWidth: '2.75px' }} />
        <input
          className='inputBox'
          type='search'
          name='search'
          placeholder='가게이름 또는 메뉴를 검색해보세요!'
          onChange={sendUserInput}
        />
      </div>
    </section>
  );
};

export default SearchBox;
