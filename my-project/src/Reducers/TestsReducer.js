

const TestsReducer = (state = [], action) => {
    
    if (action.type === "SET_TESTS") {
       
        return action.testTab
    }

    return state;
}


export default TestsReducer
