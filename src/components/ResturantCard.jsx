import React from 'react'
import { CDN_URL } from '../utils/constants';

const ResturantCard = (props) => {
  const { imageId, resName, cuisine, star, duration, address } = props;
  return (
    <div className='res-card' style={{ backgroundColor: '#f0f0f0' }}>
      <img
        className='res-logo'
        src={CDN_URL+imageId} alt="biryani.png" height="200px" />
      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <h5>{star}</h5>
      <h5>{duration}</h5>
      <h5>{address}</h5>
    </div>
  )
}

export default ResturantCard;