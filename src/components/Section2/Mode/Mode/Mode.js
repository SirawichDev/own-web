import React, {Component}  from 'react';
import './Mode.css';
class Mode extends Component{ 
    render(){
        console.log(this.props.image)
    return (

            <div className="flip">
                <div className="front"  style={{ backgroundImage: `url(${this.props.image})` }}>
                    <h1 class="text-shadow">{this.props.name}</h1>
                </div>
                <div className="back">
                    <h2>{this.props.des}</h2>
                    <p>..</p>
                </div>
            </div>


    )
}
};


export default Mode;