import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header'
import EnseignantMain from './Components/Enseignant/EnseignantMain/EnseignantMain'
import Login from './Components/Login/Login'
import SignUp from './Components/Etudiant/SignUp/SignUp'
<<<<<<< HEAD
import EspaceEtudiantMain from './Components/Etudiant/EspaceEtudiantMain/EspaceEtudiantMain'
import Ajouter from './Components/Enseignant/Ajouter/Ajouter'
import Modifier from './Components/Enseignant/Modifier/Modifier'
import Etudiant from './Components/Admin/Etudiant/Etudiant'

class App extends Component {
      render () {
            return <Etudiant />
=======
import Ajouter from './Components/Enseignant/Ajouter/Ajouter'
import Modifier from './Components/Enseignant/Modifier/Modifier'
import Routes from './Routes/Routes'
import {BrowserRouter as Router} from 'react-router-dom'

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
>>>>>>> 6416b0ac82fb9531384a6892e15a11f072585009
      }
}

export default App;
