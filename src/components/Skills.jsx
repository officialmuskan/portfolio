import React, { useState } from 'react'
import Typewriter from 'typewriter-effect'

import PropTypes from 'prop-types'





export default function Skills(props){
  return(
    <>
    <main style={{marginTop: "50px", backgroundColor: props.mode === 'dark'? '#111' : '#fbfbfb', color: props.mode === 'dark'? '#fbfbfb' : '#222'}}>
    <div className="d-flex flex-column justify-content-center flex-wrap
            " style={{backgroundColor: props.mode === 'dark'? '#111' : '#fbfbfb', color: props.mode === 'dark'? '#fbfbfb' : '#212529', marginTop: "100px" ,marginLeft: "6vw",marginRight: "4vw"}}>
            <div className="row">
            <div className="row mb-3">
            <h1 style={{fontSize: 'calc(2rem)' , color:"#00dcd0", marginLeft:"8px"}}>My Skills</h1>
            </div>
            <div className="col-md-3 col-12 mb-3 d-flex justify-content-center">
                <div className="card p-3 mb-2 d-flex justify-content-center" style={{height: "15rem", width:"15rem", backgroundColor: props.mode === 'dark'? '#222' : '#fbfbfb', color: props.mode === 'dark'? '#fbfbfb' : '#222'}}>
                    
                    <img src="/src/assets/Untitled_design__7_-removebg-preview.png" className="logo mb-3"  height="100px" width="100px"/>
                    <div className="card-body d-flex flex-column" style={{height: "5rem"}} >
                        
                        <div className='d-flex justify-content-between align-items-center'>
                            <h5 className="heading text-start" >HTML</h5>
                            <span className='text-end text2 mt-2'>100%</span>
                            </div>
                            <div className="">
                                <div className="progress mt-2">
                                    <div className="progress-bar" role="progressbar" style={{width: "100%", background:"#00dcd0"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                
                            </div>
                        
                     </div>
                  </div>
            </div>
            <div className="col-md-3 col-12 mb-3 d-flex justify-content-center">
                <div className="card p-3 mb-2 d-flex justify-content-center" style={{height: "15rem", width:"15rem" , backgroundColor: props.mode === 'dark'? '#222' : '#fbfbfb', color: props.mode === 'dark'? '#fbfbfb' : '#222'}}>
                    
                    <img src="/src/assets/Untitled_design__8_-removebg-preview.png" className="logo mb-3" alt="..." height="105px" width="100px"/>
                    <div className="card-body d-flex flex-column" style={{height: "5rem"}}>
                       
                        <div className='d-flex justify-content-between align-items-center'>
                            <h5 className="heading text-start">CSS</h5>
                            <span className='text-end text2 mt-2'>80%</span>
                            </div>
                            <div className="text-center">
                                
                                <div className="progress mt-2">
                                    <div className="progress-bar" role="progressbar" style={{width: "80%", background:"#00dcd0"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                
                            </div>
                        
                     </div>
                  </div>
            </div>
            <div className="col-md-3 col-12 mb-3 d-flex justify-content-center">
                <div className="card p-3 mb-2 d-flex justify-content-center " style={{height: "15rem", width:"15rem" , backgroundColor: props.mode === 'dark'? '#222' : '#fbfbfb', color: props.mode === 'dark'? '#fbfbfb' : '#222'}}>
                    
                    <img src="/src/assets/Untitled design (5).png" className="logo mb-3" alt="..." height="105px" width="100px"/>
                    <div className="card-body d-flex flex-column" style={{height: "5rem"}}>
                        
                        <div className='d-flex justify-content-between align-items-center'>
                            <h5 className="heading text-start">JAVASCRIPT</h5>
                            <span className='text-end text2 mt-2'>70%</span>
                            </div>
                            <div className="text-center">
                                
                                <div className="progress mt-2">
                                    <div className="progress-bar" role="progressbar" style={{width: "70%" , background:"#00dcd0"}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                
                            </div>
                        
                     </div>
                  </div>
            </div> 
            <div className="col-md-3 col-12 mb-3 d-flex justify-content-center">
                <div className="card p-3 mb-2 d-flex justify-content-center" style={{height: "15rem", width:"15rem" , backgroundColor: props.mode === 'dark'? '#222' : '#fbfbfb', color: props.mode === 'dark'? '#fbfbfb' : '#222'}}>
                    
                    <img src="/src/assets/Untitled_design__6_-removebg-preview.png" className="logo mb-3" alt="..." height="100px" width="100px"/>
                    <div className="card-body d-flex flex-column" style={{height: "5rem"}}>
                        
                            <div className='d-flex justify-content-between align-items-center'>
                            <h5 className="heading text-start">React</h5>
                            <span className='text-end text2 mt-2'>70%</span>
                            </div>
                            <div className="text-center">
                                
                                <div className="progress mt-2">
                                    
                                    <div className="progress-bar" role="progressbar" style={{width: "70%" , background:"#00dcd0"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                
                            </div>
                        </div>
                     
                  </div>
            </div>

            <div className="col-md-3 col-12 mb-3 d-flex justify-content-center">
                <div className="card p-3 mb-2 d-flex justify-content-center" style={{height: "15rem", width:"15rem", backgroundColor: props.mode === 'dark'? '#222' : '#fbfbfb', color: props.mode === 'dark'? '#fbfbfb' : '#222'}}>
                    
                    <img src="/src/assets/ISO_C++_Logo.svg.png" className="logo mb-3"  height="105px" width="100px"/>
                    <div className="card-body d-flex flex-column" style={{height: "5rem"}} >
                        
                        <div className='d-flex justify-content-between align-items-center'>
                            <h5 className="heading text-start" >C++</h5>
                            <span className='text-end text2 mt-2'>90%</span>
                            </div>
                            <div className="">
                                <div className="progress mt-2">
                                    <div className="progress-bar" role="progressbar" style={{width: "90%", background:"#00dcd0"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                
                            </div>
                        
                     </div>
                  </div>
            </div> 
            <div className="col-md-3 col-12 mb-3 d-flex justify-content-center">
                <div className="card p-3 mb-2 d-flex justify-content-center" style={{height: "15rem", width:"15rem", backgroundColor: props.mode === 'dark'? '#222' : '#fbfbfb', color: props.mode === 'dark'? '#fbfbfb' : '#222'}}>
                    
                    <img src="/src/assets/Untitled_design__9_-removebg-preview.png" className="logo mb-3"  height="105px" width="100px"/>
                    <div className="card-body d-flex flex-column" style={{height: "5rem"}} >
                        
                        <div className='d-flex justify-content-between align-items-center'>
                            <h5 className="heading text-start" >Mongo DB</h5>
                            <span className='text-end text2 mt-2'>60%</span>
                            </div>
                            <div className="">
                                <div className="progress mt-2">
                                    <div className="progress-bar" role="progressbar" style={{width: "60%", background:"#00dcd0"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
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