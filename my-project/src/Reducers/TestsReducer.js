

const TestsReducer = (state = [], action) => {
    console.log('store',action.testTab)

    if (action.type === "SET_TESTS") {
       
        return action.testTab
    }

    return state;
}


export default TestsReducer
