import React, { useState } from 'react'
import Typewriter from 'typewriter-effect'

import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

// import img from '/assets/7083598-removebg-preview.png'

export default function About(props){
    const [activeItem, setActiveItem] = useState(null);
    const handleClick = (item)=>{
        setActiveItem(item);
        props.setProgress(100)
        setTimeout(() =>{
            props.setProgress(0);
        }, 1000);
    }
  
    return(
      
        <>
            <main style={{marginTop: "50px", backgroundColor: props.mode === 'dark'? '#111' : '#fbfbfb', color: props.mode === 'dark'? '#fbfbfb' : '#212529'}}>
                <div className="d-flex flex-row justify-content-center flex-wrap" style={{backgroundColor: props.mode === 'dark'? '#111' : '#fbfbfb', color: props.mode === 'dark'? '#fbfbfb' : '#212529'}}>

                    <div className='container-fluid d-flex flex-row justify-content-evenly flex-wrap' style={{marginTop: "70px" ,marginRight: "1vw"}}> 
                        <div className='mid d-flex flex-column'>
                            <h1 className=''  style={{fontSize: 'calc(2rem + 3vw)' , color:"#00dcd0", marginBottom: "40px"}}>
                            
                            <Typewriter
                                    options={{
                                    strings: ["About Me"],
                                    autoStart: true,
                                    loop: true,
                                    }}
                                /> 
                            </h1>
                            <p>
                                Hi there! I'm Muskan, a passionate Web Developer and C++
                                Programmer. With a strong foundation in web development and a love for
                                solving complex problems with C++, I bring a diverse skill set to the
                                table.
                                <br />
                                I specialize in creating responsive and user-friendly websites using
                                technologies like HTML, CSS, JavaScript, and React. Whether it's
                                building interactive web applications or optimizing website
                                performance, I'm always up for a challenge.
                                </p>
                        </div>
                        {/* <img src="/src/assets/7083598-removebg-preview.png" alt="" /> */}
                        <img width="400px" height="380px" src="/assets/7083598-removebg-preview.png" alt="" style={{borderRadius: "50%"}}/>   
                    </div>
                    <div className='container-fluid d-flex flex-column justify-content-center flex-wrap' style={{ margin: "1vw 4.9vw"}}>
                    
                        <p>
                        Feel free to explore my portfolio to see some of my work, and don't
                        hesitate to reach out if you'd like to collaborate or discuss a
                        project. I'm always excited to work on new and exciting endeavors.
                        </p>
                        <Link to="/contact" onClick={() => handleClick('/contact')}>
                        <button className="resume-load"  ><span style={{color: activeItem === '/contact' ? '#00dcd0' : '' }}>Contact Me</span></button>
                        </Link>
                    </div>
                    
                    

                </div>
            
            </main>
    
        </>
    )
}