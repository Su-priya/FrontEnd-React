import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ChildComp from './components/child.component';

 
class MainApp extends Component{
  render(){
    return <div>
            <h1>Welcome to your life</h1>
            <ChildComp rank={ 5 } version={ 101 } title="IBM Bangalore"/>
          </div>
  }
}
ReactDOM.render(<MainApp/>,  document.getElementById('root') );