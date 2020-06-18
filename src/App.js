import React from 'react';
import Home from './components/Home'
import Battle from './components/Battle/Battle'
import AllStats from './components/Stats/AllStats'
import TopStats from './components/Stats/TopStats'
import BottomStats from './components/Stats/BottomStats'
import Form from './components/Form/Form'
import Footer from './components/Footer/Footer'
import MatchUp from './components/MatchUp/MatchUp'

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
          <h1 className="logo">Hamster Waaars</h1>
          <nav className="navigation">
            <ul className="nav_links">
              <li>
                <Link to="/" className="atag">Home</Link>
              </li>
              <li>
                <Link to="/matchup" className="atag">MatchUp</Link>
              </li>
              <li>
                <Link to="/battle" className="atag">Battle</Link>
              </li>
              <li>
                <Link to="/allstats" className="atag">stats</Link>
              </li>
              <li>
                <Link to="/form" className="atag">form</Link>
              </li>

            </ul>
          </nav>

        </header>
        <main className="container">
          <section className="section">
            <Switch>
              <Route path="/battle/:id1/:id2">
                <Battle />
              </Route>
              <Route path="/battle">
                <Battle />
              </Route>
              <Route path="/matchup">
                <MatchUp />
              </Route>
              <Route path="/allstats">
                <AllStats />
              </Route>
              <Route path="/topstats">
                <TopStats />
              </Route>
              <Route path="/bottomstats">
                <BottomStats />
              </Route>
              <Route path="/form">
                <Form />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </section>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );

}

export default App;
