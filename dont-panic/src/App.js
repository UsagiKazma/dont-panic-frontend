import React from 'react';
import { Link, Switch, Route } from 'react-router-dom'
import Menu from './components/Menu'
import Form from './components/Form'
import Scoreboard from './components/Scoreboard'
import Enter from './components/Enter'
import Canvas from './components/Canvas'
import './App.scss'

function App() {
  return (
    <div className="container">
      <div className="App">
        <div className="nav">
          <Link to='/Game' style={{textDecoration:'none', color:'black'}}> Game </Link>
          <Link to='/Scoreboard' style={{textDecoration:'none', color:'black'}}> Scoreboard </Link>
          <Link to='/Menu' style={{textDecoration:'none', color:'black'}}> Menu </Link>
        </div>
        <h1 className="glitch" data-text="Don't Panic">Don't Panic</h1>
        <Switch>
          <Route
              exact path="/"
              render={() => <Enter />}/>
          <Route
              path="/Game"
              render={() => <Canvas />}/>
          <Route
              path="/Scoreboard"
              render={() => <Scoreboard />}/>
          <Route
              path="/Menu"
              render={() => <Menu />}/>
        </Switch>
      </div>
    </div>
  );
}

export default App;
