import { Component } from "react";
import Block1Comp from "./block1.component";
import Block2Comp from "./block2.component";

class AWingComp extends Component{
   /*state = {
        version : 0
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                version : Math.round(Math.random() * 1000)
            })
        }, 4000)
    } */
    render(){
        return <div style={ { border : '2px solid grey', padding : '10px', width : '600px', margin : '10px', float : 'left' }}>
            <h1>A Wing Component</h1>
            <span>Version : {this.props.ver}</span>
            <hr/>
            <Block1Comp></Block1Comp>
            <Block2Comp></Block2Comp>
        </div>
    }
}

export default AWingComp;