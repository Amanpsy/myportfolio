import React, { useEffect, useState } from 'react'
import Hero from './sections/hero'
import NavBar from './sections/navbar';
import ServiceSummary from './sections/ServiceSummary';
import Services from './sections/services';
import { ReactLenis } from 'lenis/react';
import About from './sections/About';
import Works from './sections/Works';
import ContactSummary from './sections/ContactSummary';
import  { Toaster } from 'react-hot-toast';
import Contact from './sections/Contact';
import { useProgress } from '@react-three/drei';


function App() {

  const {progress} = useProgress()

  const [isRead, setisRead] = useState(false)

  useEffect(() => {
    
if(progress === 100) {  
setisRead(true)
}
  }, [progress])
  

  return (
    <ReactLenis root className='relative w-screen min-h-screen overflow-x-auto'>
      {!isRead && (
        <div className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-black text-white transition-opacity duration-700 font-light">
          <p className="mb-4 text-xl tracking-widest animate-pulse">
            Loading {Math.floor(progress)}%
          </p>
          <div className="relative h-1 overflow-hidden rounded w-60 bg-white/20">
            <div
              className="absolute top-0 left-0 h-full transition-all duration-300 bg-white"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      )}
      <div
        className={`${
          isRead ? "opacity-100" : "opacity-0"
        } transition-opacity duration-1000`}
      >
     <NavBar/> 
    <Hero/>
  <ServiceSummary/>
  <Services/>
  <About/>
  <Works />
<ContactSummary />
<Contact />
      <Toaster />
    
    </div>
   

    </ReactLenis>
  )
}

export default App