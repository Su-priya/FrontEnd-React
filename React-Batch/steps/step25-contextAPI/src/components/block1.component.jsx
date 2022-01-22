import React,{ Component } from "react";
import VersionContext from "../context/version.context";

class Block1Comp extends Component{
    render(){
        return <div style={ { border : '2px solid grey', padding : '10px', width : '200px', margin : '10px', float : 'left' }}>
            <h1>Block 1 Component</h1>
            <VersionContext.Consumer>
                {(value)=>{
                    return <h2>Version : {value}</h2>
                }}
            
            </VersionContext.Consumer>
        </div>
    }
}

export default Block1Comp;