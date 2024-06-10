/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { Link } from 'react-router-dom'
import FooterData from '../../utils/footer'

const Footer = () => {

  const { FOOTER_LINKS, FOOTER_CONTACT_INFO, SOCIALS } = FooterData; 

  return (
    <footer className='flex items-center justify-center pb-8 pt-20'>
      <div className='mx-auto max-w-[1440px] px-6 lg:px-20 flex w-full flex-col gap-11'>
        <div className='flex flex-col items-start justify-center gap-[10%] md:flex-row'>
          <Link to={'/'} className='mb-10 text-[20px] font-[700]'>ShoppingHub</Link>
          <div className='flex flex-wrap gap-8 sm:justify-between md:flex-1'>
            {FOOTER_LINKS.map((col) => (
              <FooterColumn title={col.title} key={col.title}>
                <ul className='flex flex-col gap-4 text-[14px] font-[400] text-[#A2A2A2]'>
                  {col.links.map((link) => (
                    <Link to="/" key={link}>{link}</Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}
            <div className='flex flex-col gap-5'>
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <Link to="/" key={link.label} className='flex gap-4 md:flex-col lg:flex-row'>
                    <p>{link.label}:</p><p className='text-[14px] font-[500]'>{link.value}</p>
                  </Link>
                ))}
              </FooterColumn>
            </div>
            <div className='flex'>
              <FooterColumn>
                <ul className='flex gap-4'>
                  {SOCIALS.links.map((link) => (
                    <Link to="/" key={link}><img src={link} alt="SocialIcon" height={22} width={22} /></Link>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>
        <div className='border bg-[#A2A2A2]'></div>
        <p className='text-center text-[14px] font-[400] text-[#7B7B7B]'>2024 Kasun Umesh | All Rights Reserved</p>
      </div>
    </footer>
  )
};

const FooterColumn = ({title, children}: any) => {
  return (
    <div className='flex flex-col gap-5'>
      <h4 className='text-[18px] font-[700] whitespace-nowrap'>{title}</h4>
      {children}
    </div>
  )
}

export default Footer