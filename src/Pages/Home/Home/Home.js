import React, { useEffect, useState } from 'react'
import Products from '../../Products/Products'
import Banner from '../Banner/Banner'
import Footer from '../Footer/Footer'
import Reviews from '../Reviews/Reviews'

const Home = () => {
 const [spinner, setSpinner] = useState(true);
  useEffect(() => {
    setTimeout(() => setSpinner(false), 1000);
  }, []);
 return (
  <>
   {spinner ? (
     <button variant="primary" disabled>
          <spinner
            as="span"
            animation="grow"
            size="sm"
            role="status"
            aria-hidden="true"
          />
          Loading...
        </button>
   ) : (
    <div>
     <Banner></Banner>
     <Products home={true}></Products>
     <Reviews></Reviews>
     <Footer></Footer>
    </div>
   )}
   </>
 )
}

export default Home
