import React from 'react'
import Products from '../../Products/Products'
// import Product from '../../Product/Product'
// import Products from '../../Products/Services'
import Banner from '../Banner/Banner'
import Footer from '../Footer/Footer'
import Reviews from '../Reviews/Reviews'

const Home = () => {
 return (
  <div>
   <Banner></Banner>
   <Products home={true}></Products>
   <Reviews></Reviews>
   <Footer></Footer>

   <h1>This is Home</h1>
  </div>
 )
}

export default Home
