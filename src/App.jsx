import React from 'react'
import Hero from './sections/hero'
import NavBar from './sections/navbar';
import ServiceSummary from './sections/ServiceSummary';
import Services from './sections/services';
import { ReactLenis } from 'lenis/react';
import About from './sections/About';
import Works from './sections/Works';

function App() {
  return (
    <ReactLenis root className='relative w-screen min-h-screen overflow-x-auto'>
    <NavBar/> 
    <Hero/>
  <ServiceSummary/>
  <Services/>
  <About/>
  <Works />

    </ReactLenis>
  )
}

export default App