import React from 'react'
import {Route,Redirect} from 'react-router-dom'

import Login from '../Components/Login/Login'
import SignUp from '../Components/Etudiant/SignUp/SignUp'

import EnseignantMain from '../Components/Enseignant/EnseignantMain/EnseignantMain'
import Modifier from '../Components/Enseignant/Modifier/Modifier'
import Ajouter from '../Components/Enseignant/Ajouter/Ajouter';

import EtudiantMain from '../Components/Etudiant/EspaceEtudiantMain/EspaceEtudiantMain'
import AjouterEnseignant from '../Components/Admin/Enseignant/AjouterEnseignant';

import Enseignant from '../Components/Admin/Enseignant/Enseignant';
import Etudiant from '../Components/Admin/Etudiant/Etudiant';

import ModifierEnseignant from '../Components/Admin/Enseignant/ModifierEnseignant';
import ModifierEtudiant from '../Components/Admin/Etudiant/ModifierEtudiant';



const Routes =()=>{
    return (
        <div>
            <Route exact path='/' component={Login} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={SignUp}/>
            <Route exact path = '/enseignant/:id' render={(props)=><EnseignantMain {...props}/>}/>
            <Route exact path = '/enseignant' render={()=><EnseignantMain />}/>
            <Route exact path='/modifier_examen/:id' render={(props)=><Modifier {...props}/>} />
            <Route exact path='/etudiant/:id' render={(props)=><EtudiantMain {...props}/>} />
            <Route exact path='/etudiant/' render={() => <EtudiantMain />} />
            <Route exact path= '/ajouter_examen/:id' render={(props)=><Ajouter {...props}/>}/>
            <Route exact path= '/admin' component={Enseignant}/>
            <Route exact path= '/etudiant_list' component = {Etudiant} />
            <Route exact path='/enseignant_list' component={Enseignant} />
            <Route exact path='/admin/enseignant/ajouter' component={AjouterEnseignant} />
            <Route exact path='/delete_exam' render={()=><Redirect to='/enseignant'/>} />
            <Route exact path='/modifier_enseignant/:id' render={(props)=><ModifierEnseignant {...props}/>} />
            <Route exact path= '/modifier_etudiant/:id' render={(props) => <ModifierEtudiant {...props} />} />


        </div>
    )
}

export default Routes