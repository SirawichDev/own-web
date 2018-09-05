import React  from 'react';
import head from './Header.css';
const Headers = (props) => {
    const BtnRound= 'ButtonSide rounded';
    const HeadVr = 'Header-visuals';
    return (  
        <div className="Header">
        <div className="Header-background"></div>
        <div className="Header-content">
        <div className="Header-hero">
            <h1>Welcome To My Portfolio <br/> Enjoy It : )</h1>
            <br/>
            <button className="Button">Let's Tour</button>
        </div>
     
        <div className={HeadVr}>
            <button className={BtnRound}><span className="text-green">Hire Me</span></button>
            <button className={BtnRound}><span className="text-green">My Blog</span></button>
            <div className="framer"></div>
        </div>
        </div>
        </div>   
    )
};

export default Headers;