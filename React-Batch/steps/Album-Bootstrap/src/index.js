import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NavbarComp from './components/Navbar.component';
import HeaderComp from './components/Header.component';
import MainComp from './components/Main.component';
import FooterComp from './components/Footer.component';
 
class MainApp extends Component{
      render(){
        return <div>
                 
                 <NavbarComp/>
                 <HeaderComp/>
                 <MainComp/>
                 <FooterComp/>
                 
               </div>
      }
    }
 
ReactDOM.render(<MainApp/>,  document.getElementById('root') );
 
 
 