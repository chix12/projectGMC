import { createStore, combineReducers } from "redux";
import UserReducer from './Reducers/UserReducer'
import ExerciceReducer from "./Reducers/ExerciceReducer";
import ExerciceArrayReducer from "./Reducers/ExerciceArrayReducer";


const store = createStore(
    combineReducers({
      user:UserReducer,
      exercice:ExerciceReducer,
      exerciceArray:ExerciceArrayReducer
      
      })
  );
  

  export default store;
