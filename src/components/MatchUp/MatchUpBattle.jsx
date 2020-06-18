import React from 'react';

function MatchUpBattle({ matchUp }) {


    return (
        <div className="matchup">


            {matchUp.map((hamster) => (
                <section key={hamster.id}>
                    <aside>{hamster.contestants.opponent.name}</aside>
                    <aside>{hamster.contestants.winningHamster.name}</aside>
                </section>

            ))}

        </div>
    );
}

export default MatchUpBattle; 