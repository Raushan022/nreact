import React, { useEffect, useState } from 'react';
import resCards from '../utils/mockData';
import ResturantCard from './ResturantCard';
import Shimmer from './Shimmer';

const Body = () => {

  const [listOfResturants, setListOfReaturants] = useState([]);
  const [filteredResturants, setFilteredResturants] = useState([])
  const [searchText, setSearchText] = useState("")

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=24.7913957&lng=85.0002336&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json();
    console.log(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
    setListOfReaturants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredResturants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

  if (listOfResturants.length === 0) {
    return <Shimmer />
  }

  return (
    <div className='body'>
      <div className='filter'>
        <div className='search'>
          <input
            type="text"
            className='search-box'
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button onClick={() => {
            //filter the restraunt cards and update the UI
            //search text
            const filteredSearch = listOfResturants.filter((restaurants) => {
              console.log("resturants is", restaurants);
              return restaurants.info.name.toLowerCase().includes(searchText.toLowerCase())
            })

            setFilteredResturants(filteredSearch)


            console.log(searchText)
          }}>Search</button>
        </div>
        <button
          className='filter-btn'
          onClick={() => {
            const filteredResturants = listOfResturants.filter(
              (res) => res.info.avgRatingString > 4
            )
            setFilteredResturants(filteredResturants)
            console.log("sorted",filteredResturants)
          }}>
          Top Rated Resturants
        </button>
      </div>
      <div className='res-container'>

        {filteredResturants.map((resturant) => {
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