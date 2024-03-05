import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'

const Navbar = () => {

   
  return (
  
    <nav className='bg-blue-300' >
       <div className='flex justify-start p-5  pl-16'>
        <img className='h-20' src="https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/logo-white.svg" alt="eee" />
        <div className='flex  justify-start p-10 gap-10'>
        <h1>TOPTRACER RANGE</h1>
        <h1>GOLF LESSONS</h1>
        <h1>ADVENTURE GOLF</h1>
        <h1 >CAFÉ</h1>
        <h1>EVENTS</h1>
        </div>
       
       </div>
    </nav>
    
  )
}

export default Navbar
