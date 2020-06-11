import React from 'react';
import Home from './components/Home'
import Hamsters from './components/Hamsters/Hamsters'
import Battle from './components/Battle/Battle'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import './App.css';

function App() {

  return (
    <Router>
      <div className="App">
        <header className="menu">
          <h1 className="logo">Markus Wiland</h1>
          <nav className="navigation">
            <ul className="nav_links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/hamsters">Hamsters</Link>
              </li>
              <li>
                <Link to="/battle">Battle</Link>
              </li>

            </ul>
          </nav>
          <h2 className="cta"><button>Click me</button></h2>
        </header>
        <main className="container">
          <section>
            <Switch>
              <Route path="/battle">
                <Battle />
              </Route>
              <Route path="/hamsters">
                <Hamsters />
              </Route>

              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </section>
        </main>
        <footer>
          <h3>Footer</h3>
        </footer>
      </div>
    </Router>
  );
}

export default App;
