import { createStore, combineReducers } from "redux";

const UserReducer = (state = localStorage.getItem('user'), action) => {


    if (action.type === "SET_USER") {
      
       localStorage.setItem('user',JSON.stringify(action.user))
      
      return localStorage.getItem('user')
    }
  
    return state;
  }





const store = createStore(
    combineReducers({
      user:UserReducer,
      
     
  

        })
  );
  

  export default store;
