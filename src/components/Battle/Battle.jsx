import React, { useState, useEffect } from 'react';
import HamsterCard from '../Hamsters/HamsterCard/HamsterCard';

import Winner from '../Hamsters/Winner'
import './Battle.css'

function Battle() {
    //declaring useState 
    const [hamster1, setHamster1] = useState({});
    const [hamster2, setHamster2] = useState({});

    const [hamsters, setHamsters] = useState([])
    const [showWinner, setShowWinner] = useState(false)
    const [match, setMatch] = useState(null)

    // Post function
    const postHamster = async (winningHamster) => {
        const url = '/api/battle'
        const opponent = winningHamster === hamster1 ? hamster2 : hamster1;

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
    // get all the hamsters
    const getAllHamsters = async () => {
        const hamsters = await fetch('/api/hamsters')
            .then(res => res.json())
        setHamsters(hamsters)
    }
    // change which hamster you want to duell
    const getFirstHamster = async (id) => {
        const hamsters = await fetch('/api/hamsters/' + id)
            .then(res => res.json())
        setHamster1(hamsters)
    }
    const getSecondHamster = async (id) => {
        const hamsters = await fetch('/api/hamsters/' + id)
            .then(res => res.json())
        setHamster2(hamsters)
    }

    // useEffect, render once
    useEffect(() => {
        const getHamsters = async () => {
            // kanske behöver en loop, för att se till så det blir olika hamstrar do while loop.
            const data1 = await fetch('/api/hamsters/random')
                .then(res => res.json())
            const data2 = await fetch('/api/hamsters/random')
                .then(res => res.json())

            setHamster1(data1)
            setHamster2(data2)
        }
        getAllHamsters()
        getHamsters()
    }, [])
    return (
        <div className="battle">
            <h1>Battle Stars</h1>

            <section className="hamsterSection" >

                <aside>

                    {!!hamster1 && <HamsterCard ham={postHamster} hamster={hamster1} />}
                    <select>
                        {hamsters.sort((a, b) => a.id - b.id).map((hamster) => (
                            hamster.id === hamster1?.id ?
                                <option key={hamster.id} value={hamster.id} selected>
                                    {hamster.name}
                                </option>
                                :
                                <option key={hamster.id} value={hamster.id} onClick={() => getFirstHamster(hamster.id)}>
                                    {hamster.name}
                                </option>
                        ))}
                    </select>
                </aside>

                <aside><h3>VS</h3></aside>
                <aside>
                    {!!hamster2 && <HamsterCard ham={postHamster} hamster={hamster2} />}
                    <select>
                        {hamsters.sort((a, b) => a.id - b.id).map((hamster) => (
                            hamster.id === hamster2?.id ?
                                <option key={hamster.id} value={hamster.id} selected>
                                    {hamster.name}
                                </option>
                                :
                                <option key={hamster.id} value={hamster.id} onClick={() => getSecondHamster(hamster.id)}>
                                    {hamster.name}
                                </option>
                        ))}
                    </select>
                </aside>
            </section>

            <section onClick={() => setShowWinner(true)}>
                {showWinner &&
                    <aside>
                        {match ? <Winner match={match.winner} /> : null}
                    </aside>
                }
            </section>
        </div>
    );
}

export default Battle;
