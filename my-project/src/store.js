import { createStore, combineReducers } from "redux";
//import axios from 'axios'
//import {autoRehydrate} from 'redux-persist'
//import {applyMiddleware,compose} from 'redux'



const UserReducer = (state = {}, action) => {
   
    if (action.type === "SET_USER") {
     
      return action.user
    }
  
    return state;
  };


  
  


const store = createStore(
    combineReducers({
      user:UserReducer,
     
//compse(applyMiddleware(...middlewares),autoRehydrate())
   

        })
  );
  

  export default store;
