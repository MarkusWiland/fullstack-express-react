import React, { useState, useEffect } from 'react';
import StatsTable from './Table/StatsTable'

import './TopStats.css'
import { Link } from 'react-router-dom';
function TopStats() {
    const [stats, setState] = useState(null)

    useEffect(() => {
        const getStats = async () => {
            try {
                const URL = '/api/charts/top'
                const response = await fetch(URL)
                    .then(res => res.json())

                setState(response)
            } catch (err) {
                console.error(`This didn't work, ${err}`)
            }
        }
        getStats()


    }, [])
    return (
        <div className="stats">
            <Link to="/topstats">Top</Link>
            <Link to="/bottomstats">Bottom</Link>
            {stats ? <StatsTable stats={stats} /> : null}
        </div>
    );
}

export default TopStats;
