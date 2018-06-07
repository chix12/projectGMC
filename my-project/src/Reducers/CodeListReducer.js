

const CodeListReducer = (state = [], action) => {
    if (action.type === "SET_CODE_LIST") {
       console.log('store',action.codeList)
        return action.codeList
    }
   
    return state;
}


export default CodeListReducer
