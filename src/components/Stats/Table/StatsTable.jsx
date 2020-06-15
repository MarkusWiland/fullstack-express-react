import React from 'react';
import './StatsTable.css'


function StatsTable({ stats }) {

    const hamsters = (hamster, index) => {
        return (
            <tr key={index}>
                <td>{hamster.name}</td>
                <td>{hamster.games}</td>
                <td>{hamster.wins}</td>
                <td>{hamster.defeats}</td>
            </tr>
        )
    }

    return (
        <div className="stats">
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
                    {stats.map(hamsters)}
                </tbody>
            </table>

        </div >

    );
}

export default StatsTable;
