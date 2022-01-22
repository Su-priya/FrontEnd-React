import { Component } from "react";
 
class ChildComp extends Component{
    state = {
        childpower : 0
    }
    undodata = {};
    constructor(){
        super();
        console.log("ChildComp's constructor was called")
    }
    static getDerivedStateFromProps(props, existingState){
        console.log("ChildComp's getDerivedStateFromProps was called");
        return {
            childpower : props.pow
        }
    }
    componentDidMount(){
        console.log("ChildComp's componentDidMount was called")
    }
    shouldComponentUpdate(props, existingState){
        console.log("ChildComp's shouldComponentUpdate was called");
        // console.log(arguments[0],arguments[1]);
        if(props.pow <= 50){
            return true;
        }else{
            return false
        }
    }
    getSnapshotBeforeUpdate(){
        console.log("ChildComp's getSnapshotBeforeUpdate was called");
        this.undodata = this.state;
        console.log(this.undodata);
        return true;
    }
    componentDidUpdate(){
        console.log("ChildComp's componentDidUpdate was called")
    }
    componentWillUnmount(){
        console.log("ChildComp's componentWillUnmount was called")
    }
    render(){
        console.log("ChildComp's render was called")
        return <div style={ { outline: "2px solid black", padding: "10px", width : "450px", height : "200px"}}>
                    <h1>Child Component</h1>
                    <h2>Prop's Pow is : { this.props.pow }</h2>
                    <h2>Child Power is : { this.state.childpower }</h2>
                </div>
    }
}
 
export default ChildComp;