import React from 'react';
import Home from './components/Home'
import Battle from './components/Battle/Battle'
import TotalStats from './components/Stats/TotalStats'
import TopStats from './components/Stats/TopStats'
import BottomStats from './components/Stats/BottomStats'
import Upload from './components/Form/Upload'
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
                <Link to="/totalstats" className="atag">stats</Link>
              </li>
              <li>
                <Link to="/upload" className="atag">upload</Link>
              </li>

            </ul>
          </nav>

        </header>
        <main className="container">
          <section className="section">
            <Switch>
              <Route path="/battle/:id1/:id2" component={Battle} />

              <Route path="/battle" exact component={Battle} />

              <Route path="/matchup/:id1/:id2" component={MatchUp} />

              <Route path="/matchup" exact component={MatchUp} />

              <Route path="/totalstats" component={TotalStats} />

              <Route path="/topstats" component={TopStats} />

              <Route path="/bottomstats" component={BottomStats} />

              <Route path="/upload" component={Upload} />

              <Route path="/" exact component={Home} /> >

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
