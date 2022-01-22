import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Herolist from './herolist';
 
class MainApp extends Component{
  render(){
    return <div> <Herolist/> </div>
  }
}
 
ReactDOM.render(<MainApp/>,
  document.getElementById('root')
);