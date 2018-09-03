import React, { Component } from 'react';
import './App.css';
import Headers from './Section1/Headers/Header';
import Mode from './Section2/Mode/Mode';

class App extends Component {
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
  render() {
    return (
      <div>
        <Headers/>
        <Mode mode={this.state.Mode}/>
      </div>
    );
  }
}

export default App;
