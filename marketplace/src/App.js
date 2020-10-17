import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import home from './pages/home'
import './App.css';
import selection from './pages/selection';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={home}/>
      <Route exact path="/selection/:zip" component={selection}/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
