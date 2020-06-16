import React from 'react';


import './Winner.css'

function Winner({ match: { age, games, favFood, imgName, loves, name, wins } }) {

    return (
        <div className="winner">
            <>
                <h1>Winner is: {name}</h1>
                <section className="winnerContainer">
                    <aside className="leftSide">
                        <img src={`/assets/${imgName}`} alt="Hamster" className="image" />
                    </aside>
                    <aside className="rightSide">
                        <div><span>Name:</span> {name}</div>
                        <div><span>Age:</span> {age}</div>
                        <div><span>Games:</span> {games}</div>
                        <div><span>FavFood:</span> {favFood}</div>
                        <div><span>Loves:</span> {loves}</div>
                        <div><span>Wins:</span> {wins}</div>
                    </aside>
                </section>
            </>
        </div>
    );
}

export default Winner;
