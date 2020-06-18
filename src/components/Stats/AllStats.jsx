import React, { useState, useEffect } from 'react';


import './AllStats.css'
import {
    Link
} from 'react-router-dom';
function AllStats() {
    const [stats, setState] = useState(null)
    const [games, setGames] = useState([])

    useEffect(() => {
        const getStats = async () => {
            try {
                const URL = '/api/stats/total'
                const res = await fetch(URL)
                const total = await res.json();
                setState(total)
            } catch (err) {
                console.error(`This didn't work, ${err}`)
            }
        }
        const getMatches = async () => {
            try {
                const URL = '/api/games'
                const res = await fetch(URL)
                const total = await res.json();

                setGames(total)
            } catch (err) {
                console.error(`This didn't work, ${err}`)
            }
        }
        getMatches()
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
            <section className="infoTotalGames">
                {!!stats && stats.msg}

                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Games</th>
                            <th>Wins</th>
                            <th>Defeats</th>
                        </tr>
                    </thead>
                    <tbody>
                        {games.map((hamster, index) => (
                            <tr key={index}>
                                <td>{hamster.name}</td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </div>

    );
}

export default AllStats;
