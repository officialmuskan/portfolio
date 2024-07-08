import React, { useState } from 'react'
import Typewriter from 'typewriter-effect'
import Alert from '../components/Alert'
import PropTypes from 'prop-types'




export default function Contact(props){
  const [msg, setmsg]=useState({name: "",
    email: "",
    sub: "",
    msg: ""})
    const handleSubmit = async(e)=>{
      e.preventDefault();
      const response = await fetch("http://localhost:5000/api/mesg/send",{
        method: 'POST',
        headers:{
                'Content-Type': 'application/json'
            },
        body: JSON.stringify({name: msg.name,email: msg.email, sub:msg.sub, msg:msg.msg})
      })
      const json = await response.json();
      console.log(json)
    }
    const onChange = (e)=>{
      setmsg({...msg, [e.target.name] : e.target.value})
  }
  const Mystyle={color: props.mode === 'dark'? '#fbfbfb' : '#222'}
  const [alert, setAlert] = useState(null);
  // const [aler, setAler] = useState(null);
 
  const showAlert = (message, type,e)=>{
    e.preventDefault();

    
  setAlert({ type: type, msg: message });
  
  setTimeout(() => {
    setAlert(null);
  }, 3000);
  console.log(alert);
 }
 
 
  
    return(
      <>
        <main style={{marginTop: "90px", backgroundColor: props.mode === 'dark'? '#111' : '#fbfbfb', color: props.mode === 'dark'? '#fbfbfb' : '#212529'}}>
                <div className="d-flex flex-row justify-content-evenly flex-wrap" style={{backgroundColor: props.mode === 'dark'? '#111' : '#fbfbfb', color: props.mode === 'dark'? '#fbfbfb' : '#212529'}}>
          
                <div class="text-start">
                <h1 className='text-start'  style={{fontSize: 'calc(1.5rem + 1vw)' , color:"#00dcd0", marginBottom: "40px"}}>Feel free to Contact Me</h1>
                            
                </div>
                <Alert alert={alert}/>
  
  <div class="contact-content" style={{background: props.mode === 'dark'? 'rgba(0,0,0,0.6)' : ''}}>
    <div class="contact-form">
      <h2 id="form-title" style={{color: props.mode === 'dark'? '#fbfbfb' : '#212529'}}>Send me a message</h2>
    <form onSubmit={handleSubmit}>
      <fieldset>
        <div class="form-field" style={{color: props.mode === 'dark'? '#fbfbfb' : '#212529' , borderBottom: props.mode === 'dark'? '1px solid rgba(49, 234, 240, 0.092)' : '1px solid rgba(49, 234, 240, 0.8)'}}>
          <input name="name" onChange={onChange} type="text" id="name" placeholder="Your Name" style={Mystyle} required></input>
        </div>
      <div class="form-field" style={{color: props.mode === 'dark'? '#fbfbfb' : '#212529' , borderBottom: props.mode === 'dark'? '1px solid rgba(49, 234, 240, 0.092)' : '1px solid rgba(49, 234, 240, 0.8)'}}>
          <input name="email"  onChange={onChange} type="email" id="email" placeholder="Your Email" style={Mystyle} required></input>
        </div>
      <div class="form-field" style={{color: props.mode === 'dark'? '#fbfbfb' : '#212529' , borderBottom: props.mode === 'dark'? '1px solid rgba(49, 234, 240, 0.092)' : '1px solid rgba(49, 234, 240, 0.8)'}}>
          <input name="Subject" onChange={onChange} type="text" id="subject" placeholder="Subject" style={Mystyle} required></input>
        </div>
    <div class="form-field" style={{color: props.mode === 'dark'? '#fbfbfb' : '#212529' , borderBottom: props.mode === 'dark'? '1px solid rgba(49, 234, 240, 0.092)' : '1px solid rgba(49, 234, 240, 0.8)'}}>
          <textarea name="message" onChange={onChange} type="text" id="message" placeholder="Your Message" style={Mystyle} required></textarea>
        </div>
      </fieldset>
      
  <button id="form-btn" >Send</button>
    
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
  Contact.propTypes = {
    mode: PropTypes.string.isRequired,
};