import React, { useState, useEffect } from 'react';
import StatsTable from './Table/StatsTable'

import './AllStats.css'
import { Link } from 'react-router-dom';
function BottomStats() {
    const [stats, setState] = useState(null)

    useEffect(() => {
        const getStats = async () => {
            try {
                const URL = '/api/charts/bottom'
                const response = await fetch(URL)
                    .then(res => res.json())
                console.log(response)
                setState(response)
            } catch (err) {
                console.error(`This didn't work, ${err}`)
            }
        }
        getStats()


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
                {stats ? <StatsTable stats={stats} /> : null}
            </section>
        </div>
    );
}

export default BottomStats;
