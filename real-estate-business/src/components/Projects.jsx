
import React ,{useState} from 'react'
import { projectsData } from '/src/assets/assets.js';

//  import {assets, projectData} from '../assets/assets'
 
 const Projects = () => {

     const [currentIndex, setCurrentIndex] = useState(0);
     const [cardsToShow, setCardsToShow]= useState(1);
     const [activeIndex, setActiveIndex]= useState(null);

     const nextProject = ()=>{
         setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length )
     }
     const prevProject = ()=>{
         setCurrentIndex((prevIndex) => prevIndex === 0 ?  projectsData.length - 1 : prevIndex - 1 )
     }
    
    

  return (
    <div className='container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden'  id='projects' >
     <h1 className='text=2xl sm:text-4xl font-bold mb-2 text-center'>
       Projects<span className='underline underline-offset-4 decoration-1 under font-light'>completed</span></h1>
    <p className='text-center text-gray-500 mb-8 max-w-80 mx-auto '>future home legacy</p>

  {/* project slider button */}

     <div className='flex justify-end items-center mb-8 '>
        <button onClick={prevProject} className='p-3 bg-gray-200 rounded mr-2 w-16 h-15' arial-label='previous Projects'>
            <img src="pre.png"  alt="Previous" />
        </button>
        <button onClick={nextProject} className='p-3 bg-gray-200 rounded mr-2 w-16 h-15' arial-label='Next Projects'>
            <img src="next.png"  alt="Next" />
        </button>
    </div>
  
{/* project slider container */}
<div className='overflow-hidden'>
    <div className='flex gap-8 transition-transform duration-1000 ease-in-out'
    style={{transform: `translateX(-${(currentIndex*100)/cardsToShow}%)`}}
    >
        {projectsData.map((project, index)=>(
            <div key={index} onClick={()=> setActiveIndex(index)} className={`relative flex-shrink-0 w-full sm:w-1/4 transform transition-transform duration-300 ${
                activeIndex === index ? 'scale-105 z-10' : 'scale-1.15'}`}>
                <img src={project.image} alt={project.title}   />
               <div className='absolute left-0 righ-0 bottom-5 flex justify-center'>
                 <div className='inline-block "absolute bottom-0 left-0 w-full bg-white/70  px-4 py-2 shadow-md '>
                  <h2 className='text-xl font-semibold text-gray-800 '>
                  {project.title}
                  </h2>
                  <p className='text-gray-500 text-sm'> 
                    {project.price} <span>|</span> {project.location}
                  </p>
                  </div>
                 </div>
            </div>
        ))}
    </div>
</div>
</div> 
  )
}

export default Projects 