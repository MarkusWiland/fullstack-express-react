import React, { useState, useEffect } from 'react';
import HamsterCard from './HamsterCard/HamsterCard'
import './Hamsters.css'
function Hamsters() {

    const [randomHamster, setrandomHamster] = useState([])
    const getHamsters = async () => {
        const randomHamster = await fetch('http://localhost:3000/hamsters/random')
            .then(res => res.json())
        console.log(randomHamster)
        setrandomHamster(randomHamster)
    }

    useEffect(() => {

        getHamsters()

    }, [])
    return (
        <div className="Hamsters">

            <HamsterCard Hamsters={randomHamster} />

        </div>
    );
}

export default Hamsters;
