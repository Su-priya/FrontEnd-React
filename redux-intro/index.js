const redux = require("redux");
const thunkMiddleWare = require("redux-thunk").default;
const axios = require("axios");
// configurations for redux
const createStore = redux.createStore;
const applyMiddleWare = redux.applyMiddleware;
 
// actions
const AXIOS_USER_REQUEST = "AXIOS_USER_REQUEST";
const AXIOS_USER_SUCCESS = "AXIOS_USER_SUCCESS";
const AXIOS_USER_ERROR = "AXIOS_USER_ERROR";
 
// action creators
const fetchUsers = ()=>{
    return {
        type : AXIOS_USER_REQUEST
    }
}
const fetchUserSuccess = (users)=>{
    return {
        type : AXIOS_USER_SUCCESS,
        payload : users
    }
}
const fetchUsersError = (error)=>{
    return {
        type : AXIOS_USER_ERROR,
        payload : error
    }
}
 
// default state
const initialState = {
    loading : false,
    users : [],
    error : ''
}
 
// reducers
const reducer = (state = initialState, action)=>{
    switch(action.type){
        case AXIOS_USER_REQUEST : return {
            ...state,
            loading : true
        }
        case AXIOS_USER_SUCCESS : return {
            ...state,
            loading : false,
            users : action.payload,
            error : ''
        }
        case AXIOS_USER_ERROR : return {
            ...state,
            loading : false,
            users : [],
            error : action.payload
        }
        default : return state
    }
}
 
// middleware action
const thunkFetchUsers = ()=>{
    return function(dispatch){
        dispatch( fetchUsers() );
    }
};
 
// thunk action
const thunkAjaxFetchUsers = ()=>{
    return function(dispatch){
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
            dispatch( fetchUserSuccess( response.data ))
        })
        .catch((error)=>{
            dispatch( fetchUsersError( error ) )
        })
    }
}
 
// create a store
const store = createStore( reducer, applyMiddleWare(thunkMiddleWare) );
 
// subscribe and unsubscribe
 
const unsubscribe = store.subscribe(()=>{
    console.log(store.getState());
});
 
store.dispatch( thunkFetchUsers() );
 
setTimeout(()=>{
    store.dispatch( thunkAjaxFetchUsers() );
},2000)