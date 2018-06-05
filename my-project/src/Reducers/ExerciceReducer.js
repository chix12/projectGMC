const localStorage = window.localStorage


const ExerciceReducer = (state = JSON.parse(localStorage.getItem('exercice')), action) => {

    if (action.type === "SET_EXERCICE") {

        localStorage.setItem('exercice', JSON.stringify(action.exercice))

        return JSON.parse(localStorage.getItem('exercice'))
    }

    return state;
}


export default ExerciceReducer