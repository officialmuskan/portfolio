import React, { useState, useEffect } from 'react'
import Typewriter from 'typewriter-effect'

import PropTypes from 'prop-types'



export default function Home(props){
  const[phone, setPhone] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setPhone(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
    
  const fileUrl = 'https://drive.google.com/file/d/1MhLUZXpAIgac451qABZWBr4OZN4l7VR8/view?usp=sharing';

  
    return(
      
      
        <>
        
          <main style={{marginTop: "45px", backgroundColor: props.mode === 'dark'? '#111' : '#fbfbfb', color: props.mode === 'dark'? '#fbfbfb' : '#212529'}}>
            <div className={`d-flex flex-row justify-content-between
             ${phone?'flex-wrap':""}`}
             style={{backgroundColor: props.mode === 'dark'? '#111' : '#fbfbfb', color: props.mode === 'dark'? '#fbfbfb' : '#212529'}}>
              <div className="container d-flex flex-column" style={{marginTop: "9vw", paddingRight:'0px', paddingLeft:'17px' }} >
                <h3>Hello, </h3>
                <h1 style={{fontSize: 'calc(2.5rem + 3vw)'}}>I'm Muskan</h1>
                
                <h1 style={{fontSize: 'calc(1.8rem + 3vw)' , color:"#00dcd0"}}>
                <Typewriter
                    onInit={(typewriter) => {
                      typewriter.typeString('Web Developer ')
                        .changeDelay(100)
                        .pauseFor(2500)
                        .deleteAll()
                        .start().typeString("C++ Programmer");
                      }}
                      options={{
                    // strings: ['Hello', 'World'],
                        autoStart: true,
                        loop: true,
                        delay: 100
                        }}
                  /> 
                </h1>
                <a  href={fileUrl} download="2021218926MuskanSPHY.pdf">
                  <button className="resume-load" >Download Resume</button>
                </a>
            
              </div>
            
              <div className="d-flex" style={{marginLeft:'17px'}}>
                <img className='svg' src='/assets/profile-pic.png'/>
                </div>
            </div>
            
          </main>
        </>
    )
}