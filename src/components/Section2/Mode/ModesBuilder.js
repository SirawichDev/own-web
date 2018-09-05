import React,{Component} from 'react';
import Mode from './Mode/Mode';
class ModesBuilder extends Component {
        render(){
            return this.props.mode.map((mode,index) => {
                return (
                    <Mode name={mode.name}
                            descripe={mode.descripe}
                            image={mode.imageurl}
                            key={index}/>
                )
            });
        }
};

export default ModesBuilder;