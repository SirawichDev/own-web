import React  from 'react';
import './Header.css';
const Headers = (props) => {
    return (  
        <div class="Header">
        <div class="Header-background"></div>
        <div class="Header-content">
        <div class="Header-hero">
            <h1>Welcome To My Portfolio <br/> Enjoy It : )</h1>
            <br/>
            <button class="Button">Let's Tour</button>
        </div>
        <div class="Header-visuals">
            <div class="framer"></div>
        </div>
        </div>
        </div>   
    )
};

export default Headers;