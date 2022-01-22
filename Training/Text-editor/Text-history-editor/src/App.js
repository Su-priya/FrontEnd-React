import React from "react";
import './App.css';

class App extends React.Component {

  state={
    curTime : new Date().toLocaleString(),
  };
  
  render(){
    return (
      <div className="App">
        <h3>Logged on: {this.state.curTime}</h3>
        <button onClick={ ()=>{
                       alert("Your notes is saved successfully on "+Date().toLocaleString());
                      //  <p>{this.state.curTime}</p>
                    }}>Save</button>

         
      </div>
      
    );
    
  }
}

export default App;