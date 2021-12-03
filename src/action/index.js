import axios from 'axios'
import { requestOptions } from '../constants/Header';
const base_url = ("https://api.beta.ekoconnect.in")

export const fetchPosts = () => async dispatch => {
  fetch("https://api.beta.ekoconnect.in/transactions", requestOptions)
  .then((response) => response.json())
  .then((result) =>
  dispatch({ type: 'FETCH_POSTS', payload: result })
      )
  .catch(error => console.log('error', error))
 
    //dispatch({ type: 'FETCH_POSTS', payload: response.data });

  };


  export const jsonData=(data)=>{
    return ({
      type:'JSON_DATA',
      payload:data
    })
  }
  
     

