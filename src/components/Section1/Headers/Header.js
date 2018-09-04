import React  from 'react';
import './Header.css';
const Headers = (props) => {
    return (  
        <div className="Header">
        <div className="Header-background"></div>
        <div className="Header-content">
        <div className="Header-hero">
            <h1>Welcome To My Portfolio <br/> Enjoy It : )</h1>
            <br/>
            <button className="Button">Let's Tour</button>
        </div>
     
        <div className="Header-visuals">
            <button className="ButtonSide rounded"><span className="text-green">Hire Me</span></button>
            <button className="ButtonSide rounded"><span className="text-green">My Blog</span></button>
            <div className="framer"></div>
        </div>
        </div>
        </div>   
    )
};

export default Headers;