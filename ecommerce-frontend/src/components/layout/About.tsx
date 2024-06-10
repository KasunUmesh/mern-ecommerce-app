import React from 'react'
import { TbTruckReturn } from 'react-icons/tb'
import about from '../../assets/about.png'
import { GrSecure } from "react-icons/gr";
import { MdSupportAgent } from "react-icons/md";

const About = () => {
  return (
    <section className='mx-auto max-w-full px-6 lg:px-20 py-12 xl:py-32'>
      {/* container */}
      <div className='flex flex-col gap-8 xl:flex-row'>
        {/* left */}
        <div className='flex-1'>
          <h3 className='text-[29px] leading-tight md:text-[36px] md:leading-[1.3] mb-4 font-semibold capitalize'>Unveiling Our Product's Key Features!</h3>
          <p className='py-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui officiis fugit est consequatur!</p>
          <div className='flex flex-col items-start gap-y-4'>
            <div className='flex items-center justify-center gap-x-4'>
              <div className='h-16 min-w-16 bg-[#fe784f] flex items-center justify-center rounded-md'>
                <TbTruckReturn className='text-white text-2xl'/>
              </div>
              <div>
                <h4 className='text-[18px] font-[600]'>Easy Returns Process</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex porro aliquid nostrum delectus?</p>
              </div>
            </div>
            <div className='flex items-center justify-center gap-x-4'>
              <div className='h-16 min-w-16 bg-[#fe784f] flex items-center justify-center rounded-md'>
                <GrSecure  className='text-white text-2xl'/>
              </div>
              <div>
                <h4 className='text-[18px] font-[600]'>Secure Payment Options</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex porro aliquid nostrum delectus?</p>
              </div>
            </div>
            <div className='flex items-center justify-center gap-x-4'>
              <div className='h-16 min-w-16 bg-[#fe784f] flex items-center justify-center rounded-md'>
                <MdSupportAgent  className='text-white text-2xl'/>
              </div>
              <div>
                <h4 className='text-[18px] font-[600]'>Live Customer Support</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex porro aliquid nostrum delectus?</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className='flex-1 flex items-center justify-center'>
          <div>
            <img src={about} alt="About" height={488} width={488}/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About