import PropTypes from 'prop-types';
 
function FunChildComp({title, rank, version}){
// function FunChildComp(props){
 //   let {title, rank, version} = props
    return <div>
            <h1>Function Child Component</h1>
            <h2>Title : { title } | Rank : { rank } | Version : { version }</h2>
        </div>
}
 
FunChildComp.propTypes = {
    title : PropTypes.string,
    version : PropTypes.number.isRequired,
    rank : PropTypes.number
};
 
FunChildComp.defaultProps = {
    title : "Default Title",
    rank : 1,
    version : 10
}
export default FunChildComp