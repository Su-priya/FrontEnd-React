import { Component } from "react";
import Block3Comp from "./block3.component";
import Block4Comp from "./block4.component";

class BWingComp extends Component{
    render(){
        return <div style={ { border : '2px solid grey', padding : '10px', width : '600px', margin : '10px', float : 'left'  }}>
            <h1>B Wing Component</h1>
            <span>Version : {this.props.ver}</span>
            <hr />
            <Block3Comp ver={this.props.ver}/>
            <Block4Comp ver={this.props.ver}/>
        </div>
    }
}

export default BWingComp;