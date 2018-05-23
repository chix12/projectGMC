import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header'
import EnseignantMain from './Components/Enseignant/EnseignantMain/EnseignantMain'
import Login from './Components/Login/Login'
import SignUp from './Components/Etudiant/SignUp/SignUp'
import EspaceEtudiantMain from './Components/Etudiant/EspaceEtudiantMain/EspaceEtudiantMain'
import Ajouter from './Components/Enseignant/Ajouter/Ajouter'
import Modifier from './Components/Enseignant/Modifier/Modifier'
import Etudiant from './Components/Admin/Etudiant/Etudiant'
import Enseignant from './Components/Admin/Enseignant/Enseignant'
import Routes from './Routes/Routes'
import {BrowserRouter as Router} from 'react-router-dom'
import AjouterEnseignant from './Components/Admin/Enseignant/AjouterEnseignant';



class App extends Component {
      render () {
            return (
                  <Router>
                     <div>
                      <Header/>

                      <Routes />
                    </div>
                  </Router>
                )
        
      }
}

export default App;
