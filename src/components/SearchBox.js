import React from 'react';

const SearchBox = ({ searchChange }) => {
  return (
    <div className='pa2'>
      <div className='flex items-center flex-column'>
        <label className="w-25 pa3 washed-blue" for='searchBox'>Search for robots</label>    
        <input
          id='searchBox'
          className='w-third pa3 ba b--green bg-lightest-blue'
          type='search'
          placeholder='name'
          onChange={searchChange}
        />
      </div>
    </div>
  );
}

export default SearchBox;