import { createStore, combineReducers } from "redux";
import UserReducer from './Reducers/UserReducer'
import ExerciceReducer from "./Reducers/ExerciceReducer";



const store = createStore(
    combineReducers({
      user:UserReducer,
      exercice:ExerciceReducer
        })
  );
  

  export default store;
