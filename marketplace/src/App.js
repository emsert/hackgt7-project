import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import home from './pages/home'
import './App.css';
import selection from './pages/selection';
import shopping from './pages/shopping';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={home}/>
        <Route exact path="/selection/:zip" component={selection}/>
        <Route exact path="/shopping/:address" component={shopping}/>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
