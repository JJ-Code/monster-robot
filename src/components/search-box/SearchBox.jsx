import React from 'react'

const SearchBox = ({ onSearchChange }) => {
console.log('searchbox');

  return (
    <div className='p2'>
      <input className='pa3 ba b--green bg-lightest-blue'
        type='search'
        placeholder='Search Robots'
        onChange={onSearchChange} />
    </div>
  )
}

export default SearchBox
