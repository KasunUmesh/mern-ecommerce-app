import React from 'react'
import Hero from '../components/layout/Hero'
import About from '../components/layout/About'
import PopularProducts from '../components/layout/PopularProducts'

const Home = () => {
  return (
    <>
      <Hero/>
      <About/>
      <PopularProducts/>
    </>
  )
}

export default Home