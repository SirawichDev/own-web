import React, { Component } from 'react';
import Headers from './Section1/Headers/Header';
import Mode from './Section2/Mode/Modes';

class App extends Component {
  constructor(props){
    super();
    this.state ={
        Mode:[
            {name: "Front-End",descripe:"Vuejs,React,Angular",imageurl:"http://blog.openwebsolutions.in/wp-content/uploads/2018/01/banner.jpg"},
            {name: "Back-End", descripe:"Nodejs,Golang,Django,Spring",imageurl:"https://4qr7k2a2xza2vctux33bisalkw-wpengine.netdna-ssl.com/wp-content/uploads/2015/05/Internship-hiring-03.png"},
            {name: "Full-Stack", descripe:"Using Golang ,Vuejs, GCloud", imageurl:"https://razrlab.com/wp-content/uploads/2018/01/Full-Stack-Developer.png"}
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
