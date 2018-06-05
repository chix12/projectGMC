
const localStorage = window.localStorage


const ExerciceReducer = (state = JSON.parse(localStorage.getItem('exercice')), action) => {

    if (action.type === "SET_EXERCICE") {

        localStorage.setItem('exercice', JSON.stringify(action.exercice))
        //console.log(JSON.parse(localStorage.getItem('exercice')));
        return JSON.parse(localStorage.getItem('exercice'))
    }


    if (action.type === "SET_EXERCICE") {
        if (action.exercice={})
            exercices= []
        else{
            exercices.push(action.exercice)
            localStorage.setItem('exercice', JSON.stringify(exercices))
        }
            
        
        return exercices
    }

    return state;
}


export default ExerciceReducer
