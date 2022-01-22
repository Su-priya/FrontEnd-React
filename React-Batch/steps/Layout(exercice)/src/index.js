import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import HeaderComp from './components/header.component';
import MainComp from './components/main.component';
import FooterComp from './components/footer.component';

class MainApp extends Component{
  render(){
    return <div>
             <h1>Welcome to your life </h1>
             <HeaderComp/>
             <MainComp/>
             <FooterComp/>
           </div>
  }
}
ReactDOM.render(<MainApp/>,  document.getElementById('root') );
 
