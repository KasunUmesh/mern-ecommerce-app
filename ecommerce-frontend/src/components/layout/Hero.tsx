import React from 'react'
import { Link } from 'react-router-dom'
import RelatedProducts from './RelatedProducts'

const Hero = () => {
  return (
    <section>
      <div className='mx-auto max-w-full px-6 lg:px-20 bg-hero bg-cover bg-center bg-no-repeat h-[744px] w-full '>
        <div className='relative top-24 xl:top-32'>
          <h4 className='uppercase text-[18px] font-[600] tracking-wider'>TRENDY TREASURES</h4>
          <h2 className='text-[41px] leading-tight md:text-[48px] md:leading-[1.3] mb-4 font-bold capitalize max-w-[40rem]'>Elevate Your Look <span className='text-[#fe784f]'>With Every Click.</span> Shop Today!</h2>
          <p className='my-5 max-w-[33rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel reiciendis praesentium officiis, mollitia at soluta!</p>

          {/* Button */}
          <div className='inline-flex items-center justify-center gap-4 p-2 bg-white rounded-xl'>
            <div className='text-center text-[14px] font-[400] leading-tight pl-5'>
              <h5 className='uppercase font-bold'>30% off</h5>
              <p className='text-[14px] font-[400]'>On All Items</p>
            </div>
            <Link to={''} className='ring-1 ring-[#222222] text-[15px] font-[500] bg-[#222222] px-7 py-[10px] text-white transition-all hover:bg-[#222222]/90 rounded-xl flex items-center justify-center !py-5'>Shop now</Link>
          </div>

          {/* NewCollections */}
          <div className='mt-16'>
            {/* <RelatedProducts/> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero