import React, { useState, useEffect } from 'react';
import './Upload.css'

function Upload() {
    const [ham, setHam] = useState([])
    const [id, setId] = useState(ham.length)
    const [name, setName] = useState('')
    const [loves, setLoves] = useState('')
    const [favFood, setFavFood] = useState('')
    const [age, setAge] = useState(0)

    const getAllHamsters = async () => {
        const hamsters = await fetch('/api/hamsters')
        const res = await hamsters.json()
        setHam(res)
    }

    const handleSubmit = async (e) => {
        try {
            e.preventDefault()
            postNewHamster(name, age, favFood, loves)
            setId(id + 1)
        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        getAllHamsters()
    }, [])


    return (
        <div className="formContainer">
            <form onSubmit={handleSubmit}>
                <label>ID:</label>
                <input type="number" name="name" min={id} max="200"
                    value={id}
                    onChange={e => setId(Number(e.target.value))}
                    placeholder="write the name of the hamster..."

                />
                <label>Name:</label>
                <input type="text" name="name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="write the name of the hamster..."

                />


                <label>Age:</label>
                <input type="number" name="Age" min="1" max="100"
                    value={age}
                    onChange={e => setAge(Number(e.target.value))}
                    placeholder="write the age of the hamster..."

                />

                <label>loves to do:</label>
                <input type="text" name="Loves"
                    value={loves}
                    onChange={e => setLoves(e.target.value)}
                    placeholder="Loves to do..." />


                <label>Favorite Food:</label>
                <input type="text" name="Loves"
                    value={favFood}
                    onChange={e => setFavFood(e.target.value)}
                    placeholder="Favorite Food..." />


                <button>submit</button>
            </form >

            <section className="look">
                <div className="lookContainer">
                    <aside> ID: <span>{id}</span></aside>
                    <aside> Name: <span>{name}</span></aside>
                    <aside> Age: <span>{age}</span></aside>
                    <aside> loves: <span>{loves}</span></aside>
                    <aside> Favorite Food: <span>{favFood}</span></aside>
                </div>
            </section>
        </div >

    );
}

const postNewHamster = async (name, img, age, imgName = "default.jpg", favFood, loves) => {
    const hamster = {
        name,
        img,
        age,
        imgName,
        favFood,
        loves,
        id: 41,
        games: 0,
        wins: 0,
        defeats: 0

    }

    const url = '/api/hamsters'

    await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(hamster)
    })

}
export default Upload;
