import React,{ PureComponent } from "react";
 
class PureClassComp extends PureComponent{

    render(){
        console.log(" Pure Class Component's render was called")
        return <div>
                    <h1>Class Based Component</h1>
                    <h2>Power is : { this.props.pow }</h2>
               </div>
    }
}
 
export default PureClassComp;