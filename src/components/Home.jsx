import React, { useState, useEffect } from 'react';
import HamsterCard from './Hamsters/HamsterCard/HamsterCard'

import './Home.css'
function Home() {

    const [Hamsters, setHamsters] = useState([])
    const getHamsters = async () => {
        const hamsters = await fetch('http://localhost:2048/api/hamsters')
            .then(res => res.json())
        console.log(hamsters)
        setHamsters(hamsters)
    }

    useEffect(() => {

        getHamsters()

    }, [])
    return (
        <div className="Home">

            {Hamsters.map((hamster) => <HamsterCard hamster={hamster} />)}
        </div>
    );
}

export default Home;
