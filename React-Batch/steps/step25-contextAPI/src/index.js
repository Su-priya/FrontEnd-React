import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AWingComp from './components/awing.component';
import BWingComp from './components/bwing.component';
import VersionContext from './context/version.context';

class MainApp extends Component{
  state = {
    version : 0
}
componentDidMount(){
    setInterval(()=>{
        this.setState({
            version : Math.round(Math.random() * 1000)
        })
    }, 4000)
}
  render(){
    return <div style={ { border : '2px solid grey', padding : '10px', margin : '10px auto', display : 'table' }}>
            <h1>Welcome to your life</h1>
            <span>Version : {this.state.version}</span>
            <hr/>
            <VersionContext.Provider value = {this.state.version}>
            <AWingComp/>
            <BWingComp/>
            </VersionContext.Provider>
           </div>
  }
};

ReactDOM.render(<MainApp/>,  document.getElementById('root') );