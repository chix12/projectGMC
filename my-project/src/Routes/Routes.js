import React from 'react'
import {Route} from 'react-router-dom'

import SignUp from '../Components/Etudiant/SignUp/SignUp'
import EnseignantMain from '../Components/Enseignant/EnseignantMain/EnseignantMain'
import Login from '../Components/Login/Login'

import Modifier from '../Components/Enseignant/Modifier/Modifier'
import Ajouter from '../Components/Enseignant/Ajouter/Ajouter';
import AjouterEnseignant from '../Components/Admin/Enseignant/AjouterEnseignant';
import Enseignant from '../Components/Admin/Enseignant/Enseignant';



const Routes =()=>{
    return (
        <div>
            <Route exact path='/signup' component={SignUp}/>
            <Route exact path='/login' component={Login}/>
            
            <Route exact path='/modifier' component={Modifier}/>
            <Route exact path = '/admin/enseignant' component = {Enseignant} />
            <Route exact path= '/admin/enseignant/ajouter' component ={AjouterEnseignant}/>
            <Route exact path = '/enseignant' component={EnseignantMain}/>
            <Route exact path= '/ajouterexamen' component ={Ajouter}/>
        </div>
    )
}

export default Routes