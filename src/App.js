import React, { Component } from 'react';
import {render} from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// Import modules
import { Login } from './components/Login';
import { MainPage } from './components/MainPage';

import './App.css';
import 'rsuite/dist/styles/rsuite.min.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Login />
      </div>
    );
  }
}

render((
  <Router>
    <Route path="/" Component={MainPage} />
  </Router>
), document.getElementById('root'));

export default App;
