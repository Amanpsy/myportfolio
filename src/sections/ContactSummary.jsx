import React from 'react'
import Marque from '../components/Marque';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';



function ContactSummary() {


    const containerRef = React.useRef(null);
const items2= ['start a project', 'start a project', 'start a project', 'start a project', 'start a project', 'start a project'];


  useGSAP(() => {
    gsap.to(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
        markers: false,
      },
    });
  }, []);

const items = ['Innovation', 'Precision', 'Excellence', 'Collaboration', 'Integrity', 'Creativity', 'Quality', 'Passion'];
  return (
    <section className='flex flex-col items-center justify-between min-h-screen gap-12 mt-16' ref={containerRef}>
    <Marque items={items} />
    <div className='overflow-hidden font-light text-center contact-text-responsive '>
    <p>
    Let&apos;s build a <br/>
    <span className='font-normal'>memorable</span> & {""} 
    <span className='italic'> inspiring</span> <br/>
    digital product <span className='text-gold'>together</span>
    </p>
    </div>
    
    
    <Marque items={items2} className='text-black bg-transparent border-y-2' iconClassName='stroke-gold stroke-2 text-primary' icon='material-symbols-light:square'/>
    
    </section>
  )
}

export default ContactSummary
