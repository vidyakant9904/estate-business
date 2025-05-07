import React from 'react'

const Footer = () => {
  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden ' id='Footer'>
        <div className='container mx-auto flex flex-col md:flex-row mg:flex-row justify-between items-start'>
            <div className='w-full md:w-1/3 mb-8 md:mb-0  '>
                <img className='w-20 h-15' src="realicon1.png" alt="" />
                <p className='text-gray-400 mt-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem itaque 
                    dolorem at aperiam modi ad adipisci ex veniam facere deserunt!</p>
            </div>
            <div className='w-full md:w-1/5 mb-8 md:mb-0'>
                <h3 className='text-white text-lg font-bold mb-4'>Company </h3>
                <ul className=' flex flex-col gap-2 text-gray-400'>
                    <a href="#Header" className='hover:text-white'>Home</a>
                    <a href="#About" className='hover:text-white'>About us</a>
                    <a href="#Contact" className='hover:text-white'>Contact us</a>
                    <a href="#" className='hover:text-white'>Privacy ploicy</a>
                </ul>
            </div>
            <div className='w-full md:w-1/3'>
            <h3 className='text-white text-lg font-bold mb-4'>Subscribe to our newsletter </h3>
            <p className='text-gray-400 mb-4 max-w-80 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum est autem, id tempora quibusdam quo!</p>
             <div className='flex gap-2'>
                <input className='p-2 rounded bg-gray-800 text-gray-400 mb-2 border  border-gray-700 focus:outline-none w-full md:w-auto' type="email"  placeholder='Enter your email'/>
                <button className='py-3 px-4 rounded bg-blue-500 mb-2 text-white'>Subscribe</button>
             </div>
          </div>
        </div>
        <div className=' border border-gray-700 py-4 mt-10 text-center text-gray-500'>
          Copyright 2025 vidyakant@. All Rights Reseverd
        </div>
    </div>
  )
}

export default Footer