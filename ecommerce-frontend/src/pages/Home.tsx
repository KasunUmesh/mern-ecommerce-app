import React from 'react'
import Hero from '../components/layout/Hero'
import About from '../components/layout/About'
import PopularProducts from '../components/layout/PopularProducts'
import Offer from '../components/layout/Offer'

const Home = () => {
  return (
    <>
      <Hero/>
      <About/>
      <PopularProducts/>
      <Offer/>
    </>
  )
}

export default Home