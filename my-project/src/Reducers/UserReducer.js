
const localStorage = window.localStorage


const UserReducer = (state = JSON.parse(localStorage.getItem('user')), action) => {

    if (action.type === "SET_USER") {
      
        localStorage.setItem('user',JSON.stringify(action.user))
      
      return JSON.parse(localStorage.getItem('user'))
    }
  
    return state;
  }


  export default UserReducer