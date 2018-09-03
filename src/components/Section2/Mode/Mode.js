import React,{Component} from 'react';
import './Mode.css';
import ModeOne from './Mode-1/Mode-one';
class  Mode extends Component {

    constructor(props){
        super();
        this.state ={
            Mode:[
                {name: "Front-End",descripe:"Vuejs,React,Angular",imageurl:""},
                {name: "Back-End", descripe:"Nodejs,Golang,Python",imageurl:""},
                {name: "Full-Stack", descripe:"Using Golang ,Vuejs, gCloud", imageurl:""}
            ]
        }
    }

    render(){
    return (
        <div>
            <ModeOne name="Vuejs"
                         des="Vuejs,React,Angular"/>
        </div>
    )
}
};

export default Mode;