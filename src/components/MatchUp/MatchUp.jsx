import React, { useState, useEffect } from 'react';
import HamsterCard from '../Hamsters/HamsterCard/HamsterCard';

function MatchUp() {
    const [matchUp, setMatchUp] = useState([]);

    const getMatchUp = async (id1, id2) => {
        const res = await fetch(`/api/battle/${id1}/${id2}`);
        const hamsters = res.json();
        console.log(hamsters);
        setMatchUp(hamsters);
    };
    useEffect(() => {
        getMatchUp();
    }, []);

    return (
        <div className="matchup">
            <HamsterCard matchUp={matchUp} />
            {matchUp && matchUp.map(hamster => <div>{hamster.name}</div>)}
        </div>
    );
}

export default MatchUp; 