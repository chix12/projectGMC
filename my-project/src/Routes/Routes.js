import React from 'react'
import {Route} from 'react-router-dom'

import Login from '../Components/Login/Login'
import SignUp from '../Components/Etudiant/SignUp/SignUp'

import EnseignantMain from '../Components/Enseignant/EnseignantMain/EnseignantMain'
import Modifier from '../Components/Enseignant/Modifier/Modifier'
import Ajouter from '../Components/Enseignant/Ajouter/Ajouter';

import EtudiantMain from '../Components/Etudiant/EspaceEtudiantMain/EspaceEtudiantMain'
import AjouterEnseignant from '../Components/Admin/Enseignant/AjouterEnseignant';

import Enseignant from '../Components/Admin/Enseignant/Enseignant';
import Etudiant from '../Components/Admin/Etudiant/Etudiant';



const Routes =()=>{
    return (
        <div>
            <Route exact path='/' component={Login} />
            <Route exact path='/signup' component={SignUp}/>
            <Route exact path = '/enseignant' component={EnseignantMain}/>
            <Route exact path='/modifier' component={Modifier} />
            <Route exact path='/etudiant' component= {EtudiantMain} />
            <Route exact path= '/ajouterexamen' component ={Ajouter}/>
            <Route exact path= '/admin' component={Enseignant}/>
            <Route exact path= '/etudiant_list' component = {Etudiant} />
            <Route exact path='/enseignant_list' component={Enseignant} />
            <Route exact path='/admin/enseignant/ajouter' component={AjouterEnseignant} />

        </div>
    )
}

export default Routes