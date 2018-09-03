import React,{Component} from 'react';
import './Mode.css';
import Modes from './Mode-1/Mode-one';
class  Modes extends Component {
        render(){
            return this.props.mode.map((mode,index) => {
                return (
                    <Modes name={mode.name}
                            descript={mode.descript}
                            key={index}/>
                )
            });
    }
    };


export default Modes;