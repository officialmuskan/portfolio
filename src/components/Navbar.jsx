import React,{useState} from "react";
import {  Link, useLocation } from "react-router-dom";


export default function Navbar(props){
    let location = useLocation();
    const [sidebarCollapsed, setSidebarCollapsed] = useState(true);

    
    React.useEffect(() => {
       
        props.setProgress(100)
        setTimeout(() =>{
            props.setProgress(0);
        }, 0.1);
        setSidebarCollapsed(true)
        
      }, [location]);
    
      const toggleSidebar = () => {
        setSidebarCollapsed(!sidebarCollapsed);
      };
    

    return(
        <>
            <header>
            {/* <!-- Sidebar --> */}
            <nav id="sidebarMenu" style={{backgroundColor: props.mode === 'dark'? 'black' : '#fbfbfb', color: props.mode === 'dark'? '#fbfbfb' : 'black'}} className={`collapse d-lg-block sidebar ${sidebarCollapsed ? "collapse" : ""}`} data-bs-toggle="collapse">
                <div className="position-sticky d-flex flex-column text-center align-items-center" style={{marginTop: "9vw"}}>    
                    <ul className="nav d-flex flex-column align-items-start ">

                        <li className="nav-item d-flex flex-row">
                        
                            <Link to="/" style={{paddingTop: '15px' }}> <i className="fa-solid fa-house fa-fw me-3"></i></Link>
                            <Link
                                to="/"

                                className={`list-group-item nav-link list-group-item-action pt-2 ripple ${location.pathname === "/" ? "" : "item"}`}
                                aria-current="true"
                            >
                                {/* {`nav-link ${location.pathname === '/about' ? "active":""}`} */}
                                
                                <span style={{color: location.pathname === '/' ? '#00dcd0' : '',   }} >Home</span>
                            </Link>
                        
                        </li>
                        <li className="nav-item d-flex flex-row">
                            <Link to="about" style={{paddingTop: "15px"}}> <i className="fa-solid fa-user fa-fw me-3"></i></Link>
                            <Link
                                to="about"
                                className={`list-group-item nav-link list-group-item-action pt-2 ripple ${location.pathname === "/about" ? "" : "item"}`}
                                >
                                <span style={{color: location.pathname === '/about' ? '#00dcd0' : '' }}>About Me</span>
                            </Link>
                        </li>
                        <li className="nav-item d-flex flex-row">
                            <Link to="skills" style={{paddingTop: "15px", color: "white"}}> <i className="fa-solid fa-list fa-fw me-3"></i></Link>
                            
                            <Link 
                                to="skills"
                                className={`list-group-item nav-link list-group-item-action pt-2 ripple ${location.pathname === "/skills" ? "" : "item"}`}
                                ><span  style={{color: location.pathname === '/skills' ? '#00dcd0' : ''}} >Skills</span></Link>
                        </li>

                        <li className="nav-item d-flex flex-row">
                            <Link to="projects" style={{paddingTop: "15px", color: "white"}}> <i className="fa-solid fa-folder-open fa-fw me-3"></i></Link>
                            
                            <Link 
                                to="projects"
                                className={`list-group-item nav-link list-group-item-action pt-2 ripple ${location.pathname === "/projects" ? "" : "item"}`}
                                ><span style={{color: location.pathname === '/projects' ? '#00dcd0' : ''}}>Projects</span></Link>
                        </li>
                        <li className="nav-item d-flex flex-row">
                            <Link to="contact" style={{paddingTop: "15px", color: "white"}}> <i className="fa-solid fa-phone fa-fw me-3"></i></Link>
                            
                            <Link 
                                to="contact"
                                className={`list-group-item nav-link list-group-item-action pt-2 ripple ${location.pathname === "/contact" ? "" : "item"}`}
                                ><span style={{color: location.pathname === '/contact' ? '#00dcd0' : '' }}>Contact</span></Link>
                        </li>
                    </ul>
                </div>
            </nav>
            {/* <!-- Sidebar --> */}

            {/* <!-- Navbar --> */}
            <nav id="main-navbar" style={{backgroundColor: props.mode === 'dark'?'black' : '#fbfbfb'}} className="navbar navbar-expand-lg fixed-top">            
                <div className="container-fluid">                    
                    <button
                            className="navbar-toggler"
                            type="button"
                            onClick={toggleSidebar}
                            data-bs-toggle="collapse"
                            data-bs-target="#sidebarMenu"
                            aria-controls="sidebarMenu"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                            style={{border: "none", outline: "0"}}
                            >
                    <i className="fas fa-bars"></i>
                    </button>

                    <a className="navbar-brand" href="/">
                    <img
                        className="imagelogo"
                        src="/assets/Screenshot_2023-09-25_230321-removebg-preview.png"
                        height="60"
                        alt=""
                        loading="lazy"
                        style={{marginLeft: "10px"}}
                        />
                    </a>
                    
                    <a className="nav-item me-lg-0">                         
                        <i style={{marginRight: "20px"}} onClick={props.toggleStyle} className={`fa-${props.mode === 'dark' ?'regular' : 'solid'}  fa-${props.mode === 'dark' ?'sun' : 'moon'} fa-2xl`}></i>  
                    </a>
                    
                    
                </div>
            
            </nav>
    
        </header>
        </>
    )
    

    
    
}