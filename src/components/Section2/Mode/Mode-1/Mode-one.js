import React, {Component}  from 'react';
import './Mode-one.css';
class Mode extends Component{ 
    render(){
    return (
        <div>
            <div className="flip">
                <div className="front">
                    <h1 class="text-shadow">{props.name}</h1>
                </div>
                <div className="back">
                    <h2>{props.des}</h2>
                    <p>..</p>
                </div>
            </div>
        </div>

    )
}
};


export default Mode;