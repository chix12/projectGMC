

const ExerciceArrayReducer = (state = [], action) => {


    if (action.type === "SET_EXERCICE_ARRAY") {
       
        return action.exerciceArray
    }

    return state;
}


export default ExerciceArrayReducer
