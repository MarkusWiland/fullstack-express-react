import React, { useState, useEffect } from 'react';

import { fetchTotalGames, fetchMatchup } from '../helpers/Stats.js'
import './TotalStats.css'
import {
    Link
} from 'react-router-dom';
function TotalStats() {
    const [totalGames, setTotalGames] = useState(null)
    const [matchup, setMatchup] = useState([])

    useEffect(() => {
        fetchTotalGames(setTotalGames);
        fetchMatchup(setMatchup);
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
                {!!totalGames && totalGames.msg}

                <table className="table">
                    <thead>
                        <tr>
                            <th>TimeStamp</th>
                            <th>Hamster 1</th>
                            <th>Hamster 2</th>
                            <th>Winner</th>
                        </tr>
                    </thead>
                    <tbody>

                        {matchup.map((hamster, index) => (
                            <tr key={index}>
                                <td>{hamster.timeStamp}</td>
                                <td>ID:{hamster.contestants.winningHamster.id} {hamster.contestants.winningHamster.name}</td>
                                <td>ID:{hamster.contestants.opponent.id} {hamster.contestants.opponent.name}</td>
                                <td>{hamster.winner.name}</td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </div>

    );
}

export default TotalStats;
