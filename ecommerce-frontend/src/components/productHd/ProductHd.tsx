/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { TbArrowRight } from 'react-icons/tb'

const ProductHd = (props: any) => {

    const {product} = props; 

  return (
    <div className='mx-auto max-w-full px-6 lg:px-20 flex items-center flex-wrap gap-x-2 text-[16px] font-[500] py-4 capitalize bg-[#f8f7f4]'>Home <TbArrowRight/> Shop <TbArrowRight/> {product.category} <TbArrowRight/> {product.name}</div>
  )
}

export default ProductHd