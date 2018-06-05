import { createStore, combineReducers } from "redux";
import UserReducer from './Reducers/UserReducer'
import ExerciceReducer from "./Reducers/ExerciceReducer";



const store = createStore(
    combineReducers({
      user:UserReducer,
      exercice:ExerciceReducer
<<<<<<< HEAD
      })
=======
        })
>>>>>>> ffca67069468f6c1b6a369402df2dc5be60438cc
  );
  

  export default store;
