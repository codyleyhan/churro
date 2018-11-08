import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Main from './components/Main';
import NewGroup from './components/NewGroup';
import MyTasks from './components/MyTasks';

import './styles/index.scss';

const App = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <main>
      <Route path="/" exact component={Main} />
      <Route path="/new" exact component={NewGroup} />
      <Route path="/tasks" exact component={MyTasks} />
      <Route path="/tasks/:id" component={MyTasks} />
    </main>    
  </Router>
);

export default App;
