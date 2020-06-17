import React, { useState, useEffect } from 'react';


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


            {hamsters.map((hamster) => (
                <section key={hamster.id}>
                    <header>{hamster.name}</header>

                    <aside>{hamster.favFood}</aside>

                </section>

            ))}

        </div>
    );
}

export default Home;
