import { createStore, combineReducers } from "redux";
import UserReducer from './Reducers/UserReducer'
import ExerciceReducer from "./Reducers/ExerciceReducer";
import ExerciceArrayReducer from "./Reducers/ExerciceArrayReducer";
import CodeListReducer from "./Reducers/CodeListReducer"


const store = createStore(
    combineReducers({
      user:UserReducer,
      exercice:ExerciceReducer,
      exerciceArray:ExerciceArrayReducer,
      codeList:CodeListReducer
      
      })
  );
  

  export default store;
