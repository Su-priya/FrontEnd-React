import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ChildComp from './components/child.component';
 
class MainApp extends Component{
  render(){
    return <div className="container">
            <h1>Welcome to your life</h1>
            <ChildComp/>
           </div>
  }
};
 
ReactDOM.render(<MainApp/>,  document.getElementById('root') );