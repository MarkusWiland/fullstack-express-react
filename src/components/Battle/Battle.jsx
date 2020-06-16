import React, { useState, useEffect } from 'react';
import HamsterCard from '../Hamsters/HamsterCard/HamsterCard';
import Winner from '../Hamsters/Winner'
import './Battle.css'
function Battle() {
    //declaring useState 
    const [randomHamster1, setRandomHamster1] = useState(null)
    const [randomHamster2, setRandomHamster2] = useState(null)
    const [showWinner, setShowWinner] = useState(false)
    const [match, setMatch] = useState(null)

    // functions
    const postHamster = async (winningHamster) => {
        const url = '/api/games'
        const opponent = winningHamster === randomHamster1 ? randomHamster2 : randomHamster1;

        const matchGame = {
            id: Math.ceil(Math.random() * 99999999),
            contestants: { winningHamster, opponent },
            winner: winningHamster,
        }
        await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(matchGame)
        })
        setShowWinner(true)
        setMatch(matchGame)
    }
    // useEffect, render once
    useEffect(() => {
        const getHamsters = async () => {
            // kanske behöver en loop, för att se till så det blir olika hamstrar do while loop.
            const data1 = await fetch('/api/hamsters/random')
                .then(res => res.json())
            const data2 = await fetch('/api/hamsters/random')
                .then(res => res.json())

            setRandomHamster1(data1)
            setRandomHamster2(data2)
        }
        getHamsters()

    }, [])
    return (
        <div className="battle">
            <h1>Battle Stars</h1>
            <section className="hamsterSection" >
                <aside>

                    {randomHamster1 ? <HamsterCard ham={postHamster} hamster={randomHamster1} /> : null}
                </aside>
                <aside> <h3>VS</h3></aside>

                <aside>

                    {randomHamster2 ? <HamsterCard ham={postHamster} hamster={randomHamster2} /> : null}
                </aside>
            </section>

            <section className={showWinner}>

                {match ? <Winner match={match.winner} /> : null}


            </section>
        </div>
    );
}

export default Battle;
