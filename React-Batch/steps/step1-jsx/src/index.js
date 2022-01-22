import  { Component } from 'react';
import ReactDOM from 'react-dom';

// ReactDOM.render(<h1>Welcome to your life</h1>,document.getElementById('root'));
/*
function elm(){
  return <h1>Welcometo your life</h1>
}
ReactDOM.render(elm(),document.getElementById('root'));
*/

/*
class Elm extends Component{
  render(){
    return <h1>Welcome To Your Life</h1>
  }
}
ReactDOM.render(<Elm/>,document.getElementById('root'));
*/

/*
function Elm(){
  return <h1>Welcome to your Life</h1>
}
*/
/*
JSX Elements
----------------
1. use className instead of class attribute
2. use htmlFor instead of for attribute on a label tag
3. render method must return a single root node 
   if required you can wrap them in a single root node like div/section/article
   or use React.Fragment ar its alias <>
4. while writing inline styles use camel cased or pascal cased property names
5. for event names use camel cased or pascal cased
6. orphan tags must be closed inline
7. on unmanaged inputs use defaultvalue instead of value attribute
*/
class MainApp extends Component{
  render(){
    return <>
         <div className="box">
             <h1>{5+6}</h1>
             <label htmlFor="cb">Agree to Terms:</label>
             <input id="cb" type="checkbox"/>
          </div>

          <section style={{backgroundColor:"cyan"}}>
             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus nostrum doloremque tempora impedit consequatur, nobis eos voluptatem fugiat similique obcaecati vero iste earum numquam hic iusto vitae sed repellat exercitationem!
          </section>
          <button onClick={function(){
            alert("you clicked me")
          }}>Click Me</button>
          <hr/>
          <br/>
          <input/>
          <img/>
           </>
  }
}
ReactDOM.render(<MainApp/>,document.getElementById('root'));