import React from "react";


function FunComp(props){
        console.log("Function Component's render was called")
    return <div>
        <h1>Function Based Component</h1>
        <h2>Power is : { props.pow }</h2>
    </div>
}


export default FunComp;