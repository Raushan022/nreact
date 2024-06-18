import './App.css'

/* 
-Header
 -Logo
 -Nav Items
-Body
  -Search
  -ResturantContainer
    -ResturantCard
      -Img
      -Name of res, Star rating, cuisine, delevry time
-Footer
  -Copyright
  -Links
  -Address
  -Contact
*/

const Header = () => {
  return (
    <div className='header'>
      <div className='logo-container'>
        <img
          className='logo'
          src="https://png.pngtree.com/template/20191014/ourmid/pngtree-pin-food-delivery-map-location-delivery-logo-concept-image_318151.jpg" alt="" />
      </div>
      <div className='nav-items'>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>

    </div>
  )
}

const ResturantCard = () => {
  return (
    <div className='res-card' style={{backgroundColor: '#f0f0f0'}}>
      <img
      className='res-logo'
       src="https://media.istockphoto.com/id/1345624336/photo/chicken-biriyani.jpg?s=612x612&w=is&k=20&c=vesw-6_mJPUsfkYtxjbW3vAxUGD7kf6E-0IpU05UrJ8=" alt="biryani.png" />
      <h3>Meghna Foods</h3>
      <h4>Biryani, North Indian, Asian</h4>
      <h4>Biryani, North Indian, Asian</h4>
      <h4>4.4 stars</h4>
      <h4>38 minutes</h4>
    </div>
  )
}

const Body = () => {
  return (
    <div className='body'>
      <div className='search'>Search</div>
      <div className='res-container'>
        <ResturantCard />
        <ResturantCard />
      </div>
    </div>
  )
}

function App() {

  return (
    <>
      <div className='app'>
        <Header />
        <Body />
      </div>
    </>
  )
}

export default App
