import React from 'react'
import {Route} from 'react-router-dom'

import SignUp from '../Components/Etudiant/SignUp/SignUp'
import EnseignantMain from '../Components/Enseignant/EnseignantMain/EnseignantMain'
import Login from '../Components/Login/Login'

import Modifier from '../Components/Enseignant/Modifier/Modifier'



const Routes =()=>{
    return (
        <div>
            <Route exact path='/' component={EnseignantMain}/>
            <Route exact path='/signup' component={SignUp}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/modifier' component={Modifier}/>
        </div>
    )
}

export default Routes