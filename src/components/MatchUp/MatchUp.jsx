import React, { useState, useEffect } from 'react';

function MatchUp() {
    const [matchUp, setMatchUp] = useState([]);

    const getMatchUp = async (id1, id2) => {
        const res = await fetch(`/api/games/4/5`);
        const hamsters = await res.json();
        console.log(hamsters);
        setMatchUp(hamsters);
    };
    useEffect(() => {
        getMatchUp();
    }, [matchUp]);

    return (
        <div className="matchup">

            {matchUp && matchUp.map(hamster => <div>{hamster.name}</div>)}
        </div>
    );
}

export default MatchUp; 