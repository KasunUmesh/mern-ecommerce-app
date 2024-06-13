/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext } from 'react'
import { FaHeart, FaStar } from 'react-icons/fa6';
import { ShopContext } from '../../context/ShopContext';

const ProductDisplay = (props: any) => {

    const {product} = props;
    const context = useContext(ShopContext);

    if (!context) {
        return null;
    }

    const {addToCart} = context;

  return (
    <section className='mx-auto max-w-full px-6 lg:px-20 flex flex-col gap-8 xl:flex-row bg-[#f8f7f4] py-4'>
        {/* left side */}
        <div className='flex gap-x-2 xl:flex-1 py-5'>
            <div className='flex flex-col gap-[7px] flex-wrap'>
                <img src={product.image} alt="ProductImg" className='max-h-[84px] rounded-lg bg-[#EEEEEE]' />
                <img src={product.image} alt="ProductImg" className='max-h-[84px] rounded-lg bg-[#EEEEEE]' />
                <img src={product.image} alt="ProductImg" className='max-h-[84px] rounded-lg bg-[#EEEEEE]' />
                <img src={product.image} alt="ProductImg" className='max-h-[84px] rounded-lg bg-[#EEEEEE]' />
            </div>
            <div className='max-h-[355px] w-auto flex'>
                <img src={product.image} alt="BigImg" className='rounded-xl bg-[#EEEEEE]' />
            </div>
        </div>

        {/* right side */}
        <div className='flex-col flex xl:flex-[1.5] bg-white px-6 py-2 rounded-xl'>
            <h3 className='text-[29px] leading-tight md:text-[36px] md:leading-[1.3] mb-4 font-semibold sm:line-clamp-1'>{product.name}</h3>
            <div className='flex items-start gap-x-2 text-[16px] font-[500]'>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <p>(223)</p>
            </div>
            <div className='flex items-baseline gap-x-6 text-[28px] font-[700] leading-[120%] sm:text-[32px] sm:font-[700] sm:leading-[120%]'>
                <div>${product.new_price}.00</div>
                <div className='text-[20px] font-[700] sm:text-[28px] sm:font-[700] sm:leading-[120%] line-through text-[#fe784f]'>${product.old_price}.00</div>
            </div>
            <div>
                {/* product colors , icons buttons */}
                <div className='flex flex-col sm:flex-row gap-x-10 gap-y-3 my-6'>
                    <div>
                        <h4 className='text-[16px] font-[700]'>Select Color:</h4>
                        <div className='flex gap-3 my-3'>
                            <div className='ring-2 ring-slate-900 h-10 w-10 flex items-center justify-center cursor-pointer rounded-full bg-[#f42c37]'></div>
                            <div className='ring-2 ring-slate-900 h-10 w-10 flex items-center justify-center cursor-pointer rounded-full bg-[#fdc62e]'></div>
                            <div className='ring-2 ring-slate-900 h-10 w-10 flex items-center justify-center cursor-pointer rounded-full bg-[#1376f4]'></div>
                            <div className='ring-2 ring-slate-900 h-10 w-10 flex items-center justify-center cursor-pointer rounded-full bg-[#2dcc6f]'></div>
                        </div>
                    </div>
                    <div>
                        <h4 className='text-[16px] font-[700]'>Select Size:</h4>
                        <div className='flex gap-3 my-3'>
                            <div className='ring-2 ring-slate-900 h-10 w-10 flex items-center justify-center cursor-pointer rounded-md'>S</div>
                            <div className='ring-2 ring-slate-900 h-10 w-10 flex items-center justify-center cursor-pointer rounded-md'>M</div>
                            <div className='ring-2 ring-slate-900 h-10 w-10 flex items-center justify-center cursor-pointer rounded-md'>L</div>
                            <div className='ring-2 ring-slate-900 h-10 w-10 flex items-center justify-center cursor-pointer rounded-md'>XL</div>
                        </div>
                    </div>
                </div>
                <div className='flex gap-3 mb-8 max-w-[555px]'>
                    <button onClick={() => {addToCart(product.id)}} className='ring-1 ring-[#222222] text-[15px] font-[500] bg-[#222222] px-7 py-[10px] text-white transition-all hover:bg-[#222222]/90 rounded-md'>Add to cart</button>
                    <button className='ring-1 ring-[#fe784f] text-[15px] font-[500] bg-[#fe784f] py-[10px] text-white transition-all hover:bg-[#222222] hover:ring-[#222222] rounded-md !px-4'><FaHeart/></button>
                </div>
                <p><span className='text-[16px] font-[500] text-[#222222]'>Category :</span> Women | Jacket | Winter</p>
                <p><span className='text-[16px] font-[500] text-[#222222]'>Tags :</span> Modern | New Arrivals</p>
            </div>
        </div>
    </section>
  )
}

export default ProductDisplay;