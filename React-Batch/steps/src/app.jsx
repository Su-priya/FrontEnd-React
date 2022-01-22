import { Component } from "react";
 
class ChildComp extends Component{
    state = {
        username : "Batman",
        userpower : 6,
        usercity : "gotham"
    }
    render(){
        return <h1>Child Component</h1>
    }
}
 
export default ChildComp;