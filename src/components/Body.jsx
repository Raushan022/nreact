import React, { useState } from 'react';
import resCards from '../utils/mockData';
import ResturantCard from './ResturantCard';

const Body = () => {

  const [listOfResturants, setListOfReaturants] = useState(resCards);

  return (
    <div className='body'>
      <div className='filter'>
        <button
          className='filter-btn'
          onClick={() => {
            const filteredResturants = listOfResturants.filter(
              (res) => res.info.avgRatingString > 4
            )
            setListOfReaturants(filteredResturants)
          }}>
          Top Rated Resturants
        </button>
      </div>
      <div className='res-container'>

        {listOfResturants.map((resturant) => {
          return (
            <ResturantCard
              key={resturant.info.id}
              imageId={resturant.info.cloudinaryImageId}
              resName={resturant.info.name}
              cuisine={resturant.info.cuisines.join(', ')}
              star={resturant.info.avgRatingString}
              duration={resturant.info.name}
              address={resturant.info.sla.slaString}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Body