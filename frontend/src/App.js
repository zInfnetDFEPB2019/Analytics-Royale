import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './pages/MainPage/mainPage';
import TopBar from './components/TopBar/topBar';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <Switch>
        <Route exact path="/" component={Main}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
