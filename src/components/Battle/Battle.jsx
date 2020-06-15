import React, { useState, useEffect } from 'react';
import HamsterCard from '../Hamsters/HamsterCard/HamsterCard';
import Winner from '../Hamsters/Winner'
import './Battle.css'
function Battle() {
    const [randomHamster1, setRandomHamster1] = useState(null)
    const [randomHamster2, setRandomHamster2] = useState(null)
    const [match, setMatch] = useState({})
    const updateHamster = async (winningHamster) => {
        const url = '/api/games'
        const opponent = winningHamster === randomHamster1 ? randomHamster2 : randomHamster1;
        const date = new Date().toDateString();
        const matchGame = {
            id: 1,
            timeStamp: date,
            contestants: { winningHamster, opponent },
            winner: winningHamster,
        }
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: matchGame
        })
        setMatch(response)
    }


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
        <div className="Battle">
            <section className="hamsterSection" >
                {
                    randomHamster1 ? <HamsterCard ham={updateHamster} hamster={randomHamster1} /> : null}
                <h3>VS</h3>
                {randomHamster2 ? <HamsterCard ham={updateHamster} hamster={randomHamster2} /> : null}
            </section>

            <div className="winner">
                <Winner match={match} />

            </div>
        </div>
    );
}

export default Battle;
