import React, { useState, useEffect } from 'react';
import HamsterCard from '../Hamsters/HamsterCard/HamsterCard';
import { useParams } from "react-router-dom";
import { fetchHamster } from "./helpers/randomHamster";
import { fetchIdHamster } from "./helpers/idHamster"
import { postHamster } from "./helpers/WinnerClick"
import Winner from '../Hamsters/Winner'
import './Battle.css'

function Battle() {
    //declaring useState 
    const [hamster1, setHamster1] = useState({});
    const [hamster2, setHamster2] = useState({});
    const params = useParams();
    const [hamsters, setHamsters] = useState([])
    const [showWinner, setShowWinner] = useState(false)
    const [match, setMatch] = useState(null)

    // Post function



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
            if (params.id1 && params.id2) {
                fetchIdHamster(setHamster1, params.id1);
                fetchIdHamster(setHamster2, params.id2);
            } else {
                await fetchHamster(setHamster1);
                await fetchHamster(setHamster2, hamster1.id);
            }
        }
        getHamsters()
        getAllHamsters()

    }, [params])
    return (
        <div className="battle">
            <h1>Battle Stars</h1>

            <section className="hamsterSection" >

                <aside>

                    {!!hamster1 && <HamsterCard ham={postHamster} setMatch={setMatch} hamster={hamster1} />}
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
