import React, { Component } from 'react';

import './App.css';
import Header from './Components/Header/Header'
import EnseignantMain from './Components/EnseignantMain/EnseignantMain'
import Login from './Components/Login/Login'
import SignUp from './Components/SignUp/SignUp'
import EspaceEtudiantMain from './Components/EspaceEtudiantMain/EspaceEtudiantMain'
import Ajouter from './Components/Ajouter/Ajouter'
import Modifier from './Components/Modifier/Modifier'

class App extends Component {
      render () {
            return <Ajouter />
      }
}

export default App;
