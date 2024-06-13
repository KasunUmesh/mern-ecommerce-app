import React from 'react'

const ProductDescription = () => {
  return (
    <div className='mx-auto max-w-full px-6 lg:px-20 mt-20'>
        <div className='flex gap-3 mb-4'>
            <button className='ring-1 ring-[#222222] text-[15px] font-[500] bg-[#222222] px-7 text-white transition-all hover:bg-[#222222]/90 rounded-sm !text-xs !py-[6px] w-36'>Description</button>
            <button className='ring-1 ring-[#222222] text-[15px] font-[500] bg-transparent px-7 text-[#222222] transition-all hover:bg-[#222222] hover:text-white !py-[6px] w-36'>Care Guide</button>
            <button className='ring-1 ring-[#222222] text-[15px] font-[500] bg-transparent px-7 text-[#222222] transition-all hover:bg-[#222222] hover:text-white !py-[6px] w-36'>Size Guide</button>
        </div>
        <div className='flex flex-col pb-16'>
            <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat maxime magni consectetur iste, magnam at, similique perferendis deleniti alias nesciunt soluta, repudiandae odio culpa obcaecati laborum. Facilis cum vero quos! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat maxime magni consectetur iste, magnam at, similique perferendis deleniti alias nesciunt soluta, repudiandae odio culpa obcaecati laborum. Facilis cum vero quos! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat maxime magni consectetur iste, magnam at, similique perferendis deleniti alias nesciunt soluta, repudiandae odio culpa obcaecati laborum. Facilis cum vero quos! </p>
            <p className='text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam non minus, inventore earum distinctio aspernatur? Temporibus nobis voluptatibus dolorum facere ipsam dolorem modi enim! Quod aperiam ducimus dolor explicabo praesentium.</p>
        </div>
    </div>
  )
}

export default ProductDescription;