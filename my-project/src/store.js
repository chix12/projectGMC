import { createStore, combineReducers } from "redux";
import UserReducer from './Reducers/UserReducer'
import ExerciceReducer from "./Reducers/ExerciceReducer";
import ExerciceArrayReducer from "./Reducers/ExerciceArrayReducer";
import CodeListReducer from "./Reducers/CodeListReducer"
import TestsReducer from "./Reducers/TestsReducer";


const store = createStore(
    combineReducers({
      user:UserReducer,
      exercice:ExerciceReducer,
      exerciceArray:ExerciceArrayReducer,
      codeList:CodeListReducer,
      tests:TestsReducer
      
      })
  );
  

  export default store;
