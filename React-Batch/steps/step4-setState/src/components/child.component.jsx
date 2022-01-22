import { Component } from "react";
 
class ChildComp extends Component{
    state = {
        rank : 5
    }
    
    render(){
        return <div>
                    <h1>Child Component</h1>
                    <h2>Title : { this.props.title } | Comp Rank { this.state.rank } | Version : { this.props.version }</h2>
                    <button onClick={ ()=>{
                        this.setState({
                            rank : 10
                        })
                        console.log(this.state);
                    }}>Increase Rank</button>
               </div>
    }
};
 
export default ChildComp