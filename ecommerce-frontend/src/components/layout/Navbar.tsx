import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = ({containerStyles}) => {

  const activeLink = "text-[#fe784f] relative flex-1 after:w-full after:h-[1px] after:bg-[#fe784f] after:absolute after:-bottom-1 after:right-0";

  return (
    <nav className={`${containerStyles}`}>
      <NavLink to={'/'} className={({isActive}) => isActive ? activeLink : ""}>Home</NavLink>
      <NavLink to={'/clothing'} className={({isActive}) => isActive ? activeLink : ""}>Clothing</NavLink>
      <NavLink to={'/cosmetics'} className={({isActive}) => isActive ? activeLink : ""}>Cosmetics</NavLink>
      <NavLink to={'/electronics'} className={({isActive}) => isActive ? activeLink : ""}>Electronics</NavLink>
    </nav>
  )
}

export default Navbar