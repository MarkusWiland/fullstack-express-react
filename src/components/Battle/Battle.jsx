import React, { useState, useEffect } from 'react';
import HamsterCard from '../Hamsters/HamsterCard/HamsterCard';
import './Battle.css'
function Battle() {
    const [randomHamster1, setRandomHamster1] = useState(null)
    const [randomHamster2, setRandomHamster2] = useState(null)


    useEffect(() => {
        const getHamsters = async () => {
            // kanske behöver en loop, för att se till så det blir olika hamstrar do while loop.
            const data1 = await fetch('http://localhost:2048/api/hamsters/random')
                .then(res => res.json())
            const data2 = await fetch('http://localhost:2048/api/hamsters/random')
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
                    randomHamster1 ? <HamsterCard hamster={randomHamster1} /> : null}
                <h3>VS</h3>
                {randomHamster2 ? <HamsterCard hamster={randomHamster2} /> : null}
            </section>
        </div>
    );
}

export default Battle;
