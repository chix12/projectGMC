import { createStore, combineReducers } from "redux";
import UserReducer from './Reducers/UserReducer'



const store = createStore(
    combineReducers({
      user:UserReducer,
      
     
  

        })
  );
  

  export default store;
