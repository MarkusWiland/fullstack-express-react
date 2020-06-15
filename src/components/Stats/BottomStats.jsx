import React, { useState, useEffect } from 'react';
import StatsTable from './Table/StatsTable'

import './BottomStats.css'
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
            <Link to="/TopStats">Top</Link>
            <Link to="/BottomStats">Bottom</Link>
            {stats ? <StatsTable stats={stats} /> : null}
        </div>
    );
}

export default BottomStats;
