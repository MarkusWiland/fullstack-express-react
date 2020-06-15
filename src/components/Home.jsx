import React, { useState, useEffect } from 'react';
import HamsterCard from './Hamsters/HamsterCard/HamsterCard'

import './Home.css'
function Home() {

    const [hamsters, setHamsters] = useState([])
    const getHamsters = async () => {
        try {
            const data = await fetch('/api/hamsters')
                .then(res => res.json())

            setHamsters(data)
        } catch (err) {
            console.error(err)

        }
    }

    useEffect(() => {

        getHamsters()

    }, [])
    return (
        <div className="Home">

            {hamsters.map((hamster) => <HamsterCard hamster={hamster} key={hamster.id} />)}
        </div>
    );
}

export default Home;
