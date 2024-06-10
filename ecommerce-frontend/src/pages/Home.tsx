import React from 'react'
import Hero from '../components/layout/Hero'
import About from '../components/layout/About'
import PopularProducts from '../components/layout/PopularProducts'
import Offer from '../components/layout/Offer'
import NewArrivals from '../components/layout/NewArrivals'

const Home = () => {
  return (
    <>
      <Hero/>
      <About/>
      <PopularProducts/>
      <Offer/>
      <NewArrivals/>
    </>
  )
}

export default Home