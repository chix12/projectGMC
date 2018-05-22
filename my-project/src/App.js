import React, { Component } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Login from './Components/Login/Login.js'
import SignUp from './Components/SignUp/SignUp';
import EspaceEtudiantMain from './Components/EspaceEtudiantMain/EspaceEtudiantMain';


class App extends Component {
      render () {
        return <EspaceEtudiantMain />
      }
}

export default App;
