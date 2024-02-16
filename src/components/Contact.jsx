import React, { useState } from 'react'
import Typewriter from 'typewriter-effect'

import PropTypes from 'prop-types'




export default function Contact(props){
  const Mystyle={color: props.mode === 'dark'? '#fbfbfb' : '#222'}
    return(
      <>
        <main style={{marginTop: "90px", backgroundColor: props.mode === 'dark'? '#111' : '#fbfbfb', color: props.mode === 'dark'? '#fbfbfb' : '#212529'}}>
                <div className="d-flex flex-row justify-content-evenly flex-wrap" style={{backgroundColor: props.mode === 'dark'? '#111' : '#fbfbfb', color: props.mode === 'dark'? '#fbfbfb' : '#212529'}}>
          
                <div class="text-start">
                <h1 className='text-start'  style={{fontSize: 'calc(1.5rem + 1vw)' , color:"#00dcd0", marginBottom: "40px"}}>Feel free to Contact Me</h1>
                            
                </div>
  
  <div class="contact-content" style={{background: props.mode === 'dark'? 'rgba(0,0,0,0.6)' : ''}}>
    <div class="contact-form">
      <h2 id="form-title" style={{color: props.mode === 'dark'? '#fbfbfb' : '#212529'}}>Send me a message</h2>
    <form action="mailto:npeel3497@gmail.com" method="post" enctype="text/plain">
      <fieldset>
        <div class="form-field" style={{color: props.mode === 'dark'? '#fbfbfb' : '#212529' , borderBottom: props.mode === 'dark'? '1px solid rgba(49, 234, 240, 0.092)' : '1px solid rgba(49, 234, 240, 0.8)'}}>
          <input name="name" type="text" id="name" placeholder="Your Name" style={Mystyle} ></input>
        </div>
      <div class="form-field" style={{color: props.mode === 'dark'? '#fbfbfb' : '#212529' , borderBottom: props.mode === 'dark'? '1px solid rgba(49, 234, 240, 0.092)' : '1px solid rgba(49, 234, 240, 0.8)'}}>
          <input name="email" type="email" id="email" placeholder="Your Email" style={Mystyle}></input>
        </div>
      <div class="form-field" style={{color: props.mode === 'dark'? '#fbfbfb' : '#212529' , borderBottom: props.mode === 'dark'? '1px solid rgba(49, 234, 240, 0.092)' : '1px solid rgba(49, 234, 240, 0.8)'}}>
          <input name="Subject" type="text" id="subject" placeholder="Subject" style={Mystyle}></input>
        </div>
    <div class="form-field" style={{color: props.mode === 'dark'? '#fbfbfb' : '#212529' , borderBottom: props.mode === 'dark'? '1px solid rgba(49, 234, 240, 0.092)' : '1px solid rgba(49, 234, 240, 0.8)'}}>
          <textarea name="message" type="text" id="message" placeholder="Your Message" style={Mystyle}></textarea>
        </div>
      </fieldset>
  <input id="form-btn" type="submit" value="send" />
    </form>
</div>
  
    <div class="contact-info">
      <h3>Email Me At </h3>
      <a href="mailto:muskanchhabra.0806@gmail.com" style={{color: props.mode === 'dark'? '#666' : '#212529'}}>muskanchhabra.0806@gmail.com</a>
      <h3>Find Me On </h3>
      <div class="contact-links">
        <a href="https://www.instagram.com/muskanchh1/"><i class="fa-brands fab fa-instagram"></i> </a>
        <a href="https://www.linkedin.com/in/muskan-chhabra-661052227/"><i class="fab fa-linkedin"></i></a>
        <a href="https://github.com/officialmuskan"><i class="fab fa-github"></i></a>
        {/* <a><i class="fab fa-codepen"></i></a> */}
      </div>
    </div>
    </div>
                    

                </div>
            
            </main>
      </>
    )
  }