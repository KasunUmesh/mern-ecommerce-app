import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png'
import user from '../../assets/user.svg'
import Navbar from './Navbar'
import { MdClose, MdMenu } from 'react-icons/md'
import { HiOutlineShoppingCart } from 'react-icons/hi'

const Header = () => {

  const [menuOpened, setMenuOpened] = useState(false);
  const toggleMenu = () => setMenuOpened(!menuOpened);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        // Close them menu if open when scrolling occurs
        if (menuOpened) {
          setMenuOpened(false);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [menuOpened])

  return (
    <header className='w-full z-50 mx-auto max-w-[1440px] px-6 lg:px-20'>
      <div className='flex items-center justify-between py-3'>
        {/* logo */}
        <Link to={'/'} className='flex items-center gap-x-2'>
          <img src={logo} alt="logoImg" height={31} width={31} />
          <span className='text-[24px] font-[700] leading-[120%] hidden sm:flex'>ShoppingHub</span>
        </Link>
        {/* Navbar and Button */}
        <div className='flex items-center justify-center gap-x-4'>
          {/* Desktop Navbar */}
          <div>
            <Navbar containerStyles={"hidden xl:flex gap-x-5 xl:gap-x-10 text-[15px] font-[500] rounded-full px-2 py-1"}/>
          </div>

           {/* Mobile Navbar */}
           <div>
            <Navbar containerStyles={`${menuOpened ? "flex items-start flex-col gap-y-12 fixed top-20 right-8 p-12 bg-white rounded-3xl shadow-md w-64 text-[16px] font-[500] ring-1 ring-slate-900/5 transition-all duration-300 z-50" : "flex items-start flex-col gap-y-12 fixed top-20 p-12 bg-white rounded-3xl shadow-md w-64 text-[16px] font-[500] ring-1 ring-slate-900/5 transition-all duration-300 z-50 -right-[100%]"}`}/>
          </div>

          {/* Button */}
          <div className='flex items-center justify-between gap-x-3 sm:gap-x-4 text-[16px] font-[700]'>
            <div className='flex items-center justify-between sm:gap-x-5'>
              <NavLink to={'/cart-page'} className={'flex'}>
                <HiOutlineShoppingCart className='p-2 h-10 w-10 hover:text-[#fe784f]'/>
                <span className='relative flex items-center justify-center w-5 h-5 rounded-full bg-[#fe784f] text-[#f8f7f4] text-[14px] font-[500] -top-2 right-3'>{0}</span>
              </NavLink>
              <NavLink to={'/'} className={'ring-1 ring-[#fe784f]  bg-[#fe784f] px-7 py-[10px] text-white transition-all hover:bg-[#222222] hover:ring-[#222222] flex items-center justify-center gap-x-2 text-[16px] font-[500] rounded-xl'}>
                <img src={user} alt="loginImg" height={19} width={19}/>
                Login
              </NavLink>
            </div>
            {!menuOpened ? (
              <MdMenu className='xl:hidden cursor-pointer text-3xl hover:text-[#fe784f]' onClick={toggleMenu}/>
            ) : (
              <MdClose className='xl:hidden cursor-pointer text-3xl hover:text-[#fe784f]' onClick={toggleMenu}/>
            )}
            
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header