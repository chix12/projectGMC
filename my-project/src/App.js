import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header'
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
        
      }
}

export default App;
