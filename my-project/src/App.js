import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import Header from './Components/Header/Header'
import EnseignantMain from './Components/EnseignantMain/EnseignantMain'

class App extends Component {
      render () {
        return <EnseignantMain />
      }
}

export default App;
