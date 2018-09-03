import React,{Component} from 'react';
import './Mode.css';
import Mode from './Mode/Mode';
class Modes extends Component {
    constructor(props){
        super();
    }
        render(){
            return this.props.mode.map((mode,index) => {
                return (
                    <Mode name={mode.name}
                            descript={mode.descript}
                            image={mode.imageurl}
                            key={index}/>
                )
            });
    }
    };


export default Modes;