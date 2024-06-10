import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRightLong } from "react-icons/fa6";

const Offer = () => {
  return (
    <section className='mx-auto max-w-[1440px] px-6 lg:px-20 bg-banneroffer bg-center bg-cover w-full'>
      <div className='px-4 py-16 md:py-24 lg:py-44'>
        <h2 className='text-[33px] leading-tight md:text-[46px] md:leading-[1.3] mb-4 font-bold'>Spring Sale 50% off!</h2>
        <h3 className='text-[32px] font-[500] capitalize '>Grab <span className='text-[#fe784f]'>Your Favorites</span> Before They're Gone!</h3>
        <Link to={'/'} className='text-white bg-[#222222] rounded-full flex items-center justify-between gap-x-2 text-[16px] font-[500] w-44 mt-10 group pl-6'>
          Go to shop
          <FaArrowRightLong className='text-xl bg-[#fe784f] text-[#f8f7f4] rounded-full h-12 w-12 p-4 group-hover:-rotate-45 transition-all duration-500 border-2 border-white'/>
        </Link>
      </div>
    </section>
  )
}

export default Offer