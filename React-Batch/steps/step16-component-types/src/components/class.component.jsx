import React,{ Component } from "react";
 
class ClassComp extends Component{
/*    shouldComponentUpdate(prop,prevState){
        if(this.props.pow === prop.pow){
            return false
        }else{
            return true
        }
    }    */
    render(){
        console.log("Class Component's render was called")
        return <div>
                    <h1>Class Based Component</h1>
                    <h2>Power is : { this.props.pow }</h2>
               </div>
    }
}
 
export default ClassComp;