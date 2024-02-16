import react, { useState } from "react";
import MsgContext from "./msgContext";

const MsgState = (props) =>{
    // const msgin = []
    // const [msg, setMsg] = useState(msgin)
    const host = "http://localhost:5000"
    console.log("hi")
    const addMsg = async(name, email, sub, msg)=>{

        const response = await fetch(`${host}api/mesg/send`,
        {
          method:"POST",
          headers: {
            "Content-Type": "application/json",
            
            
          },
          body:JSON.stringify({name, email, sub, msg})
        });
        const json = await response.json();
        console.log(json)
        // setMsg(notes.concat(note))
        
        
    }

    return(
        <MsgContext.Provider value={{addMsg}}>
            {props.children}
        </MsgContext.Provider>
    )
}

export default MsgState;



