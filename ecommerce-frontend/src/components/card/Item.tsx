/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { RiShoppingCart2Line } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const Item = ({id, name, image, old_price, new_price}: any) => {
  return (
    <Link to={''} className='bg-white p-4 rounded-xl relative'>
        <div className='flex items-center justify-center'>
            <img src={image} alt="Popular Product" height={211} width={211} className='rounded-lg drop-shadow-xl absolute bottom-48'/>
        </div>
        <div className='flex flex-col gap-y-3 pt-24'>
            <h4 className='line-clamp-2 text-[16px] font-[500]'>{name}</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis.</p>
            <div className='flex items-center justify-between'>
                <div className='flex gap-x-4 text-[16px] font-[500]'>
                    <span>${new_price}.00</span>
                    <span className='line-through text-[#fe784f]'>${old_price}.00</span>
                </div>
                <RiShoppingCart2Line className='p-2 h-10 w-10 hover:text-[#fe784f]'/>
            </div>
        </div>
    </Link>
  )
}

export default Item