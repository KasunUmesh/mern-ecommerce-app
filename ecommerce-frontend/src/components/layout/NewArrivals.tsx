import React from 'react'
import LATEST from '../../utils/latest'
import Item from '../card/Item'

const NewArrivals = () => {
  return (
    <section className='bg-[#f8f7f4] mx-auto max-w-[1440px] px-6 lg:px-20 p-12 xl:py-28'>
      {/* title */}
      <div className='text-center max-w-xl mx-auto'>
        <h3 className='text-[29px] leading-tight md:text-[36px] md:leading-[1.3] mb-4 font-semibold'>New Arrivals</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus odit incidunt consectetur consequuntur? Porro saepe aut, totam dicta corporis ad rerum eum architecto enim accusamus quaerat vero debitis id dolores.</p>
      </div>

      {/* container */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 gap-y-28 mt-32'>
        {LATEST.map((item) => (
          <Item key={item.id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        ))}
      </div>
    </section>
  )
}

export default NewArrivals