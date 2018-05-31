import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header'
import Routes from './Routes/Routes'
import {BrowserRouter as Router} from 'react-router-dom'
import { Provider } from "react-redux";
import appStore from "./store";
import AjouterTest from './Components/Enseignant/Ajouter/AjouterTest/AjouterTest';


class App extends Component {

     
      render () {
            return (
                  <Provider store={appStore}>
                  <Router>
                     <div>
                      <Header />
                      <AjouterTest />
                                        
                    </div>
                  </Router>
                  </Provider>
                )
        
      }
}

export default App;
