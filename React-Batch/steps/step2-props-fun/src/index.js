import React, { Component } from 'react';
import ReactDOM from 'react-dom';
 
class HeroList extends Component{
  render(){
    return  <div>
      <h1> { this.props.title } | Version  : { this.props.version + 1 } </h1>
            {/* <ol>
              { this.props.heroes.map(function(val, idx, arr){
                  return <li key={ idx }>{ val }</li>
                }) }
            </ol> */}
            {
              this.props.children
            }
        </div>
  }
}
class MainApp extends Component{
  message = "Welcome to your life";
  avengers = ['Ironman','Antman','Hulk','Black Widow', 'Black Panther', 'Doctor Strange']
  justiceleague = ['Batman','Superman','Aquaman','Wonder Women'];
  indicheroes = ['Shaktiman','Chota Bhim','Krish'];
  render(){
    return <div>
            <h1>{ this.message.toUpperCase() }</h1>
            <HeroList version={ 1001 } title="Avengers" heroes={ this.avengers } />
            <hr/>
            <HeroList version="1002" title="Justice League" heroes={ this.justiceleague } />
            <hr/>
            <HeroList version={ 1003 } title="Indic Heroes" heroes={ this.indicheroes } />
            <hr/>
            <HeroList>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi perferendis corporis dolore reiciendis? Quod ullam architecto a animi reprehenderit earum! Voluptatum illo libero, nam officiis aliquam suscipit? Atque, earum quidem.
              </p>
            </HeroList>
          </div>
  }
}
ReactDOM.render(<MainApp/>,  document.getElementById('root') );