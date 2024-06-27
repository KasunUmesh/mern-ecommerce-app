import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";

const CartItems = () => {

    const context = useContext(ShopContext);

    if (!context) {
        return null;
    }

    const {all_products, cartItems, addToCart, removeFromCart, getTotalCartAmount} = context;

  return (
    <section className='mx-auto max-w-full px-6 lg:px-20 bg-[#f8f7f4] rounded-3xl'>
        <div className='py-10'>
            <table className='w-full mx-auto'>
                <thead>
                    <tr className='border border-[#222222]/90 bg-[#222222]/90 text-white text-[16px] font-[400] sm:text-[18px] text-start py-12'>
                        <th className='p-1 py-2'>Products</th>
                        <th className='p-1 py-2'>Title</th>
                        <th className='p-1 py-2'>Price</th>
                        <th className='p-1 py-2'>Quantity</th>
                        <th className='p-1 py-2'>Total</th>
                    </tr>
                </thead>
                <tbody className='border border-slate-900/20'>
                    {all_products.map((e) => {
                        if (cartItems[e.id] > 0) {
                            return <tr key={e.id} className='border-b border-gray-900/20 text-[#7B7B7B] p-6 text-[14px] font-[500] text-center'>
                                <td className='flex items-end justify-center'>
                                    <img src={e.image} alt="productImg" height={55} width={55} className='rounded-lg ring-1 ring-slate-900/5 m-3 p-1'/>
                                </td>
                                <td><div className='line-clamp-3'>{e.name}</div></td>
                                <td>${e.new_price}</td>
                                <td><div className='flex justify-center items-center gap-3'><AiFillMinusCircle className='text-red-600 hover:text-red-800' size={20} onClick={() => {removeFromCart(e.id)}}/><div className='bg-white px-3 py-2  rounded-full'>{cartItems[e.id]}</div><AiFillPlusCircle className='text-green-600 hover:text-green-800' size={20} onClick={() => {addToCart(e.id)}}/></div></td>
                                <td>${e.new_price * cartItems[e.id]}</td>
                            </tr>
                        }
                        return null;
                    })}
                </tbody>
            </table>

            {/* Cart Details */}
            <div className='flex flex-col justify-between gap-y-16 mt-10 p-8 md:flex-row rounded-md w-full max-w-[777px]'>
                <div className='flex flex-col gap-8'>
                    <h4 className='text-[22px] font-[700]'>Summary</h4>
                    <div>
                        <div className='flex items-center justify-between py-4'>
                            <h4 className='text-[16px] font-[500]'>Subtotal:</h4>
                            <h4 className='text-[#7B7B7B] font-semibold'>${getTotalCartAmount()}</h4>
                        </div>
                        <hr />
                        <div className='flex items-center justify-between py-4'>
                            <h4 className='text-[16px] font-[500]'>Shipping Fee:</h4>
                            <h4 className='text-[#7B7B7B] font-semibold'>Free</h4>
                        </div>
                        <hr />
                        <div className='flex items-center justify-between py-4'>
                            <h4 className='text-[18px] font-[600]'>Total:</h4>
                            <h4 className='text-[18px] font-[700]'>${getTotalCartAmount()}</h4>
                        </div>
                    </div>
                    <button className='ring-1 ring-[#222222] text-[15px] font-[500] bg-[#222222] px-7 py-[10px] text-white transition-all hover:bg-[#222222]/90 w-44 rounded-xl'>Checkout</button>
                </div>
                <div className='flex flex-col gap-10'>
                    <h4 className='text-[20px] font-[700] capitalize'>Your coupon code enter here:</h4>
                    <div className='flex items-center justify-between pl-5 h-[3.3rem] bg-white ring-1 ring-slate-900/10 w-full max-w-[366px] rounded-xl'>
                        <input type="text" placeholder='Coupon code' className='bg-transparent border-none outline-none'/>
                        <button className='ring-1 ring-[#222222] text-[15px] font-[500] bg-[#222222] px-7 py-[10px] text-white transition-all hover:bg-[#222222]/90 rounded-lg relative right-[0.33rem]'>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CartItems