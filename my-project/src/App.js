import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header'
import Routes from './Routes/Routes'
import {BrowserRouter as Router} from 'react-router-dom'
import { Provider } from "react-redux";
import appStore from "./store";
import Editeur from "./Components/Etudiant/EspaceEtudiantMain/Editeur"



class App extends Component {

     
      render () {
            return (
                  <Provider store={appStore}>
                  <Router>
                     <div>
                      <Header />
                        <Routes />
                      <Routes />
                      
                    </div>
                  </Router>
                  </Provider>
                )
        
      }
}

export default App;
