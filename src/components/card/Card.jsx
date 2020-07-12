import React from 'react';


const Card = ({ id, name, username, email }) => {
  console.log("I there");


  return (
    <div className='bg-light-green dib br3 pa3 ma2 grow bw-2 shadow-5'>
      <img alt="monster" src={`https://robohash.org/${id}?size=200x200`} />
      <h2>{name}</h2>
      {/* <p>{username}</p> */}
      <p>{email}</p>

    </div>
  )
}

export default Card;