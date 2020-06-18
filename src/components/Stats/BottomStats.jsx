import React, { useState, useEffect } from 'react';
import StatsTable from './Table/StatsTable'
import { fetchBottomHamsters } from "./helpers/stats.js"
import './TotalStats.css'
import { Link } from 'react-router-dom';
function BottomStats() {
    const [bottomFive, setBottomFive] = useState([]);
    useEffect(() => {
        fetchBottomHamsters(setBottomFive)
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
                {bottomFive ? <StatsTable stats={bottomFive} /> : null}
            </section>
        </div>
    );
}

export default BottomStats;
