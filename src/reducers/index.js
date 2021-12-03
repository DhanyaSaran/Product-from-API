import { combineReducers } from 'redux';

//let data=require('../newtx.json')

// let data=require('../Connect APIs Copy.postman_collection.json')

const postReducer=(state=[],action)=>{
    if(action.type=='FETCH_POSTS')
        return action.payload
    return state
}


// const jsonReducer=()=>{
//     console.log(data.item[14].response[0].body)
//     // console.log(data.item[14].response[0].body[0])
//     return  data.item[14].response[0].body
// }


//working
// const jsonReducer=()=>{
//     console.log(data)
//     // console.log(data.item[14].response[0].body[0])
//     return  data
// }


export default combineReducers({
    posts: postReducer,
  //  json:jsonReducer
  });
  