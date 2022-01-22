import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ClassComp from './components/class.component';
import FunComp from './components/function.component';
import MemoFunComp from './components/memo.component';
import PureClassComp from './components/pure.component';
 
class MainApp extends Component{
  state = {
    power : 0
  }
  render(){
    return <div className="container">
            <h1>Welcome to your life</h1>
            <h2>Power on the MainApp Component : { this.state.power }</h2>
            <input type="range" value={ this.state.power } onInput={(evt)=>{ this.setState({ power : evt.target.value })}}/>
             <button onClick={()=>{this.setState({power : 10})}}>Set Power to 10</button>
            <hr/>
            <ClassComp pow={ this.state.power }/>
            <hr/>
            <FunComp pow={ this.state.power }/>
            <hr/>
            <PureClassComp pow={ this.state.power }/>
            <hr/>
            <MemoFunComp pow={ this.state.power }/>
           </div>
  }
};
 
ReactDOM.render(<MainApp/>,  document.getElementById('root') );