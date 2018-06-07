
const localStorage = window.localStorage


const ExerciceReducer = (state = JSON.parse(localStorage.getItem('exercice')), action) => {

    if (action.type === "SET_EXERCICE") {

        localStorage.setItem('exercice', JSON.stringify(action.exercice))
        //console.log(JSON.parse(localStorage.getItem('exercice')));
        return JSON.parse(localStorage.getItem('exercice'))
    }
    

    if (action.type === "UPDATE_EXERCICE") {
       //console.log(action.exercice)
        return action.exercice
    }

   
    return state;
}


export default ExerciceReducer
