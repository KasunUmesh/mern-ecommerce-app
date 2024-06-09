import LATEST from '../../utils/latest'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Link } from 'react-router-dom'
import { RiShoppingCart2Line } from 'react-icons/ri'


const RelatedProducts = () => {

    
  return (
    <div>
      <h4 className="border-l-4 pl-2 border-[#fe784f] text-[20px] font-[700]">
        Related Products
      </h4>

      {/* Container */}
      <div className="mx-auto max-w-full border border-red-500">
        <Swiper
          breakpoints={{
            600: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
            1200: { slidesPerView: 4, spaceBetween: 30 },
          }}
          className="h-[422px] sm:h-[477px] mt-5"
          direction='horizontal'
        >
          {LATEST.map((item, i) => (
            <SwiperSlide key={i}>
              <Link to={""} className='flex items-center justify-center gap-x-5 bg-white p-4 rounded-xl'>
                <img src={item.image} alt="" height={77} width={77} className='rounded-lg drop-shadow-xl'/>
                <div className='flex flex-col gap-y-1'>
                  <h4 className='line-clamp-1 text-[16px] font-[500]'>{item.name}</h4>
                  <p className='line-clamp-1'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ad?
                  </p>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center justify-between gap-x-2 text-[16px] font-[500]'>
                      <span>${item.new_price}.00</span>
                      <span className='line-through text-[#fe784f]'>${item.old_price}.00</span>
                    </div>
                    <RiShoppingCart2Line className='text-xl hover:text-[#fe784f]'/>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default RelatedProducts