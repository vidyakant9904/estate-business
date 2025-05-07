 import React, {useState, useEffect} from 'react'

//  import assets from '../assets/assets';


 const Navbar = () => {
  const [shwoMoblieMenu, setShowMobileMenu] = useState(false);

  useEffect(()=>{
    if(shwoMoblieMenu){
      document.body.style.overflow = 'hidden'
    }else{
      document.body.style.overflow = 'auto'
    }
    return()=>{
      document.body.style.overflow = 'auto'
    };
  }, [shwoMoblieMenu]) 

   return (
     <div className='absolute top-0 left-0 w-full z-0'>
        <div className='container mx-auto flex justify-between item-center py-4 px-6 md:px-20 lg:px-32 bg-transparent  '>
             <img src="newestate.png" className=' w-16 h-16' alt="" />
            <ul className='hidden md:flex gap-7 text-white'>
                <a href="#Header" className='cursor-pointer hover:text-gray-400'>Home</a>
                <a href="#About" className='cursor-pointer hover:text-gray-400'>About</a>
                <a href="#projects" className='cursor-pointer hover:text-gray-400'>Projects</a>
                <a href="#testimonials" className='cursor-pointer hover:text-gray-400'>Testimonials</a>
            </ul>
            <button className='hidden md:block bg-blue-300 px-8 py-2 rounded-full '> Sign up</button>
            <img  onClick={()=> setShowMobileMenu(true)} src="menu3.png" className='md:hidden w-7 cursor-pointer' alt="" />
        </div>
        {/* for small size screen  menu */}
        <div className={` md:hidden ${shwoMoblieMenu ? 'fixed w-full' : 'h-0 w-0 '} right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
          <div className='flex justify-end p-6 cursor-pointer'>
            <img onClick={()=> setShowMobileMenu(false)} src="cross2.png" className='w-6' alt="" />
          </div> 
          <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium '>
            <a onClick={()=> setShowMobileMenu(true)} href="Header" className='px-4 py-2 rounded-full inline-block '>Home</a>
            <a onClick={()=> setShowMobileMenu(true)} href="About" className='px-4 py-2 rounded-full inline-block '>About</a>
            <a onClick={()=> setShowMobileMenu(true)} href="Projects" className='px-4 py-2 rounded-full inline-block '>Projects</a>
            <a onClick={()=> setShowMobileMenu(true)} href="Testimonails" className='px-4 py-2 rounded-full inline-block '>Testimonails</a>
          </ul>
        </div>
     </div>
   )
 }
 
 export default Navbar