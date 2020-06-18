import React, { useState, useEffect } from 'react';
import StatsTable from './Table/StatsTable'
import { fetchTopHamsters } from '../helpers/Stats.js'
import './TotalStats.css'
import { Link } from 'react-router-dom';
function TopStats() {
    const [topFive, setTopFive] = useState([]);

    useEffect(() => {

        fetchTopHamsters(setTopFive);

    }, [])
    return (
        <div className="stats">
            <header className="undermenu">
                <li>
                    <Link to="/allstats" className="atag">All</Link>
                </li>
                <li> <Link to="/topstats" className="atag">Top</Link></li>
                <li> <Link to="/bottomstats" className="atag">Bottom</Link></li>
            </header>
            <section className="info">
                {topFive ? <StatsTable stats={topFive} /> : null}
            </section>
        </div>
    );
}

export default TopStats;
