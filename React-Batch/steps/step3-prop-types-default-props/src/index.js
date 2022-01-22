import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ChildComp from './components/child.component';
import FunChildComp from './components/funchild.component';
 
class MainApp extends Component{
  render(){
    return <div>
            <h1>Welcome to your life</h1>
            <ChildComp rank={ 5 } version={ 101 } title="IBM Bangalore"/>
            <hr/>
            <ChildComp version={ 102 } title="IBM Kolkata"/>
            <hr/>
            <ChildComp rank={ 7 }  title="IBM Hyderabad"/>
            <hr/>
            <ChildComp rank={ 8 } version={ 104 }  />
            <hr/>
            <ChildComp />
            <hr/>
            <FunChildComp rank={ 5 } version={ 101 } title="IBM Bangalore"/>
            <hr/>
            <FunChildComp version={ 102 } title="IBM Kolkata"/>
            <hr/>
            <FunChildComp rank={ 7 }  title="IBM Hyderabad"/>
            <hr/>
            <FunChildComp rank={ 8 } version={ 104 }  />
            <hr/>
            <FunChildComp />
          </div>
  }
}
ReactDOM.render(<MainApp/>,  document.getElementById('root') );