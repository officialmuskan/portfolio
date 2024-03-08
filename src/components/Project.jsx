import React, { useState } from 'react'
import Typewriter from 'typewriter-effect'

import PropTypes from 'prop-types'

export default function Projects(props){
    const Mystyle={color: props.mode === 'dark'? '#fbfbfb' : '#222'}
  
    return(
      <>
        <main style={{marginTop: "40px", backgroundColor: props.mode === 'dark'? '#111' : '#fbfbfb', color: props.mode === 'dark'? '#fbfbfb' : '#222'}}>
            <div className="d-flex flex-column justify-content-center flex-wrap" style={{backgroundColor: props.mode === 'dark'? '#111' : '#fbfbfb', color: props.mode === 'dark'? '#fbfbfb' : '#212529', marginTop: "100px" ,marginLeft: "6vw",marginRight: "4vw"}}>
                <div className="row">
                    <div className="row mb-3">
                    <p style={{fontSize: 'calc(2rem)' , color:"#00dcd0", textAlign:'center', fontWeight:'bold'}}>My Projects</p>
            
                    </div>
                    <div className="col-md-4 col-12 mb-3 d-flex justify-content-evenly">
                        <div className="flip-card card-project mb-2" style={{width:"20rem", height:"26rem", backgroundColor: props.mode === 'dark'? '#222' : '#fbfbfb', color: props.mode === 'dark'? '#fbfbfb' : '#222'}}>            
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                            <img src="/assets/Untitled design (11).png" class="card-img-top" alt="..." />
                                    <div className="card-body p-3 d-flex flex-column" style={{height: "5rem"}}>               
                                        <div className='d-flex flex-column'>
                                            <h5 class="card-title">Quiz App</h5>
                                            <h6 class={` mb-2 ${props.mode === 'dark' ? '' : 'text-muted'}`} style={Mystyle}>HTML, CSS, JS</h6>
                                            <p class="card-text">Engage your mind with a fun and educational quiz experience and compete for top scores.Increase your IQ.</p>
                                        </div>
                                    </div>
                            </div>
                            <div class="flip-card-back">
                                <div className="card-body p-3 d-flex flex-column mt-5">
                                    <div class="links mt-5">
                                        <h5 style={{fontSize: '1rem' , color:"#00dcd0", margin: "40px 5px"}}>Click button to download source code</h5>
                                        <a href="#" class="btn mx-3" style={Mystyle}><i class="fas fa-link"></i> Visit Site</a>
                                        <a href="#" class="btn " style={Mystyle}><i class="fab fa-github"></i> Github</a>
                                    </div>
                                </div>
                            
                            </div>
                        </div>        
                        </div>
                    </div>
                    <div className="col-md-4 col-12 mb-3 d-flex justify-content-center">
                        <div className="flip-card card-project mb-2" style={{width:"20rem", height:"26rem", backgroundColor: props.mode === 'dark'? '#222' : '#fbfbfb', color: props.mode === 'dark'? '#fbfbfb' : '#222'}}>            
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                            <img src="/assets/Untitled design (10).png" class="card-img-top" alt="..." />
                                    <div className="card-body p-3 d-flex flex-column" style={{height: "5rem"}}>               
                                        <div className='d-flex flex-column'>
                                            <h5 class="card-title">Weather Forecast</h5>
                                            <h6 class={` mb-2 ${props.mode === 'dark' ? '' : 'text-muted'}`} style={Mystyle}>HTML, CSS, JS</h6>
                                            <p class="card-text">Get accurate and up-to-date forecasts tailored to your location, so you're always prepared for the elements.</p>
                                        </div>
                                    </div>
                            </div>
                            <div class="flip-card-back">
                                <div className="card-body p-3 d-flex flex-column mt-5">
                                    <div class="links mt-5">
                                        <h5 style={{fontSize: '1rem' , color:"#00dcd0", margin: "40px 5px"}}>Click button to download source code</h5>
                                        <a href="#" class="btn mx-3" style={{color: props.mode === 'dark'? '#fbfbfb' : '#222'}}><i class="fas fa-link"></i> Visit Site</a>
                                        <a href="#" class="btn " style={Mystyle}><i class="fab fa-github"></i> Github</a>
                                    </div>
                                </div>
                            
                            </div>
                        </div>        
                        </div>
                    </div>
                    <div className="col-md-4 col-12 mb-3 d-flex justify-content-center">
                        <div className="flip-card card-project mb-2" style={{width:"20rem", height:"26rem", backgroundColor: props.mode === 'dark'? '#222' : '#fbfbfb', color: props.mode === 'dark'? '#fbfbfb' : '#222'}}>            
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                            <img src="/assets/Untitled design (12).png" class="card-img-top" alt="..." />
                                    <div className="card-body p-3 d-flex flex-column" style={{height: "5rem"}}>               
                                        <div className='d-flex flex-column'>
                                            <h5 class="card-title">Password Generator</h5>
                                            <h6 class={` mb-2 ${props.mode === 'dark' ? '' : 'text-muted'}`} style={Mystyle}>HTML, CSS, JS</h6>
                                            <p class="card-text">Generate strong and unique passwords with ease, customized to your specifications for length and complexity.</p>
                                        </div>
                                    </div>
                            </div>
                            <div class="flip-card-back">
                                <div className="card-body p-3 d-flex flex-column mt-5">
                                    <div class="links mt-5">
                                        <h5 style={{fontSize: '1rem' , color:"#00dcd0", margin: "40px 5px"}}>Click button to download source code</h5>
                                        <a href="#" class="btn mx-3" style={Mystyle}><i class="fas fa-link"></i> Visit Site</a>
                                        <a href="#" class="btn " style={Mystyle}><i class="fab fa-github"></i> Github</a>
                                    </div>
                                </div>
                            
                            </div>
                        </div>        
                        </div>
                    </div>

            


            
            
            
            

            
        
        </div>
    </div>
        
    </main>
      </>
    )
  }