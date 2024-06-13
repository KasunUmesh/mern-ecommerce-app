/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext } from 'react'
import { VscSettings  } from "react-icons/vsc";
import Item from '../components/card/Item';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

interface CategoryProps {
  banner: string;
  category: string;
}

const Category: React.FC<CategoryProps> = ({banner, category}) => {

  const context = useContext(ShopContext);

  if (!context) {
    return null;
  }

  const { all_products } = context;

  return (
    <section className='mx-auto max-w-full px-6 lg:px-20 bg-[#f8f7f4]'>
      <div>
        <div className='pt-6'>
          <img src={banner} alt="" className='block mb-7 mx-auto'/>
        </div>
        <div className='flex items-center justify-between my-10 mx-2'>
          <h5><span className='font-bold'>Showing 1-12</span> out of 36 products</h5>
          <Link to={'/'}><VscSettings  className='text-3xl bg-[#222222] rounded-md h-10 w-10 p-2 text-white'/></Link>
        </div>
        {/* container */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 gap-y-28 mt-32'>
          {all_products.map((item) => {
            if (category === item.category) {
            return <Item key={item.id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            }
          })}      
        </div>
        <div className='py-16 text-center'>
          <button className='ring-1 ring-[#222222] text-[15px] font-[500] bg-[#222222] px-7 py-[10px] text-white transition-all hover:bg-[#222222]/90 rounded-xl'>Load more</button>
        </div>
      </div>
    </section>
  )
}

export default Category