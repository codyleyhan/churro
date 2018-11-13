import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Main from "./components/Main";
import NewGroup from "./components/NewGroup";
import MyTasks from "./components/MyTasks";
import AddChore from "./components/AddChore";

import "./styles/index.scss";

const App = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <main>
      <Route path="/" exact component={Main} />
      <Route path="/new" exact component={NewGroup} />
      <Route path="/tasks" exact component={MyTasks} />
      <Route path="/tasks/:id" exact component={MyTasks} />
      <Route path="/tasks/:id/complete" component={MyTasks} />
      <Route path="/addchore" exact component={AddChore} />
    </main>
  </Router>
);

export default App;
