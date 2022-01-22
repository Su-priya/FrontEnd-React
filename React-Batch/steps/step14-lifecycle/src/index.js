import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ChildComp from './components/child.component';
 
/* 
Mounting
These methods are called in the following order when an instance of a component is being created and inserted into the DOM:
    constructor()
    static getDerivedStateFromProps()
    render()
    componentDidMount() 
    
Updating
An update can be caused by changes to props or state. These methods are called in the following order when a component is being re-rendered:
    static getDerivedStateFromProps()
    shouldComponentUpdate()
    render()
    getSnapshotBeforeUpdate()
    componentDidUpdate()
   
Unmounting
This method is called when a component is being removed from the DOM:
    componentWillUnmount()
 
Error Handling
These methods are called when there is an error during rendering, in a lifecycle method, or in the constructor of any child component.
    static getDerivedStateFromError()
    componentDidCatch()
 
*/
 
 
class MainApp extends Component{
      state = {
            power : 5
      };
      constructor(){
           super();
          /*  this.state = {
                 power : 10
           } */
            console.log("MainApp's constructor happened");
      }
      componentDidMount(){
            // useful in making AJAX calls
            console.log("MainApp's componentDidMount event happened");
      };
      increasePower = (evt)=>{
            this.setState({
                  power : evt.target.value
            })
      }
      render(){
            console.log("MainApp's render event happened");
            return <div className="container">
                  <h1>Welcome to your life</h1>
                  <h1>Power is : { this.state.power }</h1>
                  <input type="range" onInput={ this.increasePower } />
                  <hr/>
                   { this.state.show ? <ChildComp pow={this.state.power} }/>
                  </div>
      }
};
 
ReactDOM.render(<MainApp/>,  document.getElementById('root') );
 
 
 