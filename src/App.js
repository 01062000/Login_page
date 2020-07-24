import React from 'react';
import Signup from './Signup';
import Signin from './Signin';
//import './App.css';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <>
      <Switch>
        <Route path = "/" exact component = {Signin}/>
        <Route path = "/Signup" exact component = {Signup}/>
        <Redirect to = "/" />
      </Switch>
    </>
    </BrowserRouter>
  );
}

export default App;
