import React,{ Component } from "react";

class Block4Comp extends Component{
    render(){
        return <div style={ { border : '2px solid grey', padding : '10px', width : '200px', margin : '10px', float : 'left' }}>
            <h1>Block 4 Component</h1>
            <h2>Version : {this.props.ver }</h2>
        </div>
    }
}

export default Block4Comp;