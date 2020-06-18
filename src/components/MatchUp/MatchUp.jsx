import React, { useState, useEffect } from 'react';
import MatchUpBattle from './MatchUpBattle'
import MatchUpWinner from './MatchUpWinner'
import { useParams } from 'react-router-dom';
function MatchUp() {
    const [matchUp, setMatchUp] = useState([]);
    const { id1, id2 } = useParams();

    const getMatchUp = async (id1, id2) => {
        const res = await fetch(`/api/games/${id1}/${id2}`);
        const hamsters = await res.json();
        setMatchUp(hamsters);
    };
    useEffect(() => {
        getMatchUp(id1, id2);
    }, [id1, id2]);

    return (
        <div className="matchup">

            {matchUp ?
                <>

                    <h1>The battle</h1>

                    <MatchUpBattle matchUp={matchUp} />
                    <h1>the winner was:</h1>
                    <MatchUpWinner matchUp={matchUp} />
                </>
                : <div><h1>hej</h1></div>}
        </div>
    );
}

export default MatchUp; 