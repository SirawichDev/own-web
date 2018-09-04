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
                    <h2>{this.props.descripe}</h2>
                    <br/>
                    <br/>
                    <h1> ❤️ Check Out </h1>
                </div>
            </div>


    )
}
};


export default Mode;