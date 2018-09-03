import React  from 'react';
import './Mode-one.css';
const Mode_one = (props) => {
    return (
        <div>
<div className="flip">
    <div className="front">
       <h1 class="text-shadow">{props.name}</h1>
    </div>
    <div className="back">
       <h2>Vuejs,React,Angular</h2>
       <p>..</p>
    </div>
</div>
</div>

        
    )
};

export default Mode_one;