import { useState } from 'react'
import LoadingBar from 'react-top-loading-bar'


import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Project from './components/Project'
import About from './components/About'
import Alert from './components/Alert'
import Skills from './components/Skills'
import Contact from './components/Contact'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


function App(props) {
  const [progress, setProgress] = useState(0);
  const [mode, setMode] = useState('dark')
  const toggleStyle = (cls)=>{
    if(mode === 'dark')
    {
      document.body.style.backgroundColor = "#fbfbfb"
      setMode("light")
    }
    else{
      document.body.style.backgroundColor = "#111"
      setMode('dark')
    }
  }
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert(null);
    }, 1500);
}

  return (
    <>
    <BrowserRouter>
      <LoadingBar
          color='#00dcd0'
          progress={progress}
          // onLoaderFinished={() => setProgress(0)}
        />
      <Navbar mode={mode} setProgress={setProgress} toggleStyle={toggleStyle} />
      <Alert alert={alert}/>
      <Routes>
        <Route exact path="/" element={
                  <Home mode={mode} />
                  }/>
        <Route exact path="about/*"  element={
                <About mode={mode} setProgress={setProgress}/>
              }/>
        <Route exact path="skills/*" element={
                  <Skills mode={mode} />
                  }/>
        <Route exact path="projects/*" element={
                  <Project mode={mode} />
                  }/>
        <Route exact path="contact/*" element={
                  <Contact mode={mode} showAlert={showAlert} setProgress={setProgress}/>
                  }/>
            
      
      
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
