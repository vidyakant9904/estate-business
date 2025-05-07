import React from 'react'
import { testmonialsData } from '../assets/assets'

const Testimonials = () => {
  return (
    <div className='container mx-auto py-10 lg:px-32 w-full overflow-hidden' id='testimonials'>
       <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Customer <span className='underline underline-offset-4 decoration-1 under font-light'>Testimonials</span></h1>
       <p className='text-center text-gray-500 mb:12 max-w-80 mx-auto'> Real stories from those who found home with us</p>
      <div className='flex flex-wrap justify-center gap-8'>
        {testmonialsData.map((testimonials, index)=> (
        <div key={index} className='max-w-[340px] border shadow-lg rounded px-8 py-12 test-center'>
        <img className='w-26 h-27 rounded-full mx-auto mb-4' src={testimonials.image} alt={testimonials.alt} />
        <h2>{testimonials.name}</h2>
        <p>{testimonials.title}</p>
        {/* <div>
          {Array.from({length:testimonials.rating},(items, index)=>(
            <img key={index} src={assets.star.icon} alt="" />
          ))} 
        </div> */}  
        </div>
        ))}
      </div>

    </div>
  )
}

export default Testimonials