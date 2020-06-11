import React from 'react';
import './HamsterCard.css'

function HamsterCard({ hamster }) {

    const winner = (e) => {
        console.log(e.currentTarget.id)
    }

    return (
        <>

            <div className="HamsterCard" onClick={winner} id={hamster.id}>
                <img src={`http://localhost:2048/assets/${hamster.imgName}`} className="hamsterImage" />
                <header>{hamster.name}</header>
                <article>
                    <h3>{hamster.favFood}</h3>
                    <h3>{hamster.id}</h3>
                    <h4>{hamster.age}</h4>
                </article>
            </div>



        </>


    );
}

export default HamsterCard;
