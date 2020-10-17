import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import home from './pages/home'
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={home}/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
