import React from 'react';
import './HamsterCard.css'

function HamsterCard({ hamster, ham }) {



    return (
        <>
            <div className="HamsterCard" onClick={ham} >
                <img src={`/assets/${hamster.imgName}`} alt="Hamster" className="hamsterImage" />
                <header className="header">{hamster.name}</header>
                <article className="hamsterInfo">
                    <span> Favroitmat: <h3>{hamster.favFood}</h3></span>
                   Hamster ID: <h3>{hamster.id}</h3>
                   Ålder: <h4>{hamster.age}</h4>
                </article>
            </div>

        </>

    );
}

export default HamsterCard;
