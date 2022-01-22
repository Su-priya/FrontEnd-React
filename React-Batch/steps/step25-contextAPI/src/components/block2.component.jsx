import React,{ Component } from "react";

class Block2Comp extends Component{
    render(){
        return <div style={ { border : '2px solid grey', padding : '10px', width : '200px', margin : '10px', float : 'left' }}>
            <h1>Block 2 Component</h1>
            <h2>Version : {this.props.ver }</h2>
        </div>
    }
}

export default Block2Comp;