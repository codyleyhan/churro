import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Main from './components/Main'

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={Main} />
      </Router>
    );
  }
}

export default App;
