import React from 'react'
import {Route} from 'react-router-dom'

import SignUp from '../Components/Etudiant/SignUp/SignUp'
import Login from '../Components/Login/Login'



const Routes =()=>{
    return (
        <div>
            <Route exact path='/' component={Login}/>
            <Route exact path='/signup' component={SignUp}/>
        </div>
    )
}

export default Routes