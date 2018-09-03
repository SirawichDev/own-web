import React  from 'react';
import './Mode.css';
const Mode = (props) => {
    return (
        <div>
<div class="flip">
    <div class="front">
       <h1 class="text-shadow">Front-End</h1>
    </div>
    <div class="back">
       <h2>Vuejs,React,Angular</h2>
       <p>..</p>
    </div>
</div>
<div class="flip">
    <div class="front">
       <h1 class="text-shadow">Back-End</h1>
    </div>
    <div class="back">
       <h2>Golang,Nodejs,</h2>
       <p>..</p>
    </div>
</div>
<div class="flip">
    <div class="front">
       <h1 class="text-shadow">Full-Stack</h1>
    </div>
    <div class="back">
       <h2>Golang+Vuejs+GCP</h2>
       <p>.</p>
    </div>
</div>
</div>

        
    )
};

export default Mode;