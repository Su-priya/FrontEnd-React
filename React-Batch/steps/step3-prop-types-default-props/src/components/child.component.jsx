import { Component } from "react";
import PropTypes from 'prop-types';
 
class ChildComp extends Component{
    static defaultProps = {
        title : "Default Title",
        rank : 1,
        version : 10
    }
    static propTypes = {
        title : PropTypes.string,
        version : PropTypes.number.isRequired,
        rank : PropTypes.number
    }
    render(){
        return <div>
                    <h1>Child Component</h1>
                    <h2>Title : { this.props.title } | Rank { this.props.rank } | Version : { this.props.version }</h2>
               </div>
    }
};
 
export default ChildComp