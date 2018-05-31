import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header'
import Routes from './Routes/Routes'
import {BrowserRouter as Router} from 'react-router-dom'
import { Provider } from "react-redux";
import appStore from "./store";


class App extends Component {

     
      render () {
            return (
                  <Provider store={appStore}>
                  <Router>
                     <div>
                      <Header />
<<<<<<< HEAD
                      <Routes />                      
=======
                      <AjouterTest />
                                        
>>>>>>> 1f44c9e48f140db62a78a39f707ac94dea521844
                    </div>
                  </Router>
                  </Provider>
                )
        
      }
}

export default App;
