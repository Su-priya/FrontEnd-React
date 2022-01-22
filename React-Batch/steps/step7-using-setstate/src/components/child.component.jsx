import { Component } from "react";
class ChildComp extends Component{
    state = {
        power : 0
    };
    /*
    constructor(){
        super();
        this.increasePower=this.increasePower.bind(this);
    }
    increasePower(){
        this.setState({
            power:this.state.power+1
        })
    }
    */
   increasePower = ()=>{
       this.setState({
           power: this.state.power+1
       })
   }
   setPower = (evt)=>{
        this.setState({
            power: Number(evt.target.value)
        })
   }
   

    render(){
        return <div>
                    <h1>Child Component</h1>
                    <h2>Power : { this.state.power }</h2>
                    {/* <button onClick={()=>{ this.increasePower()  }}>Increase Power</button> */}
                    {/* <button onClick={ this.increasePower.bind(this) }>Increase Power</button> */}
                    <button onClick={ this.increasePower }>Increase Power</button>
                    <br/>
                    <input value={this.state.power} onInput={ (evt)=>{this.setPower(evt)}} type="range"/>
              
               </div>
    }
}
export default ChildComp;