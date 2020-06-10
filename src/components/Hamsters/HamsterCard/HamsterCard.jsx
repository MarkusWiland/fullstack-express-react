import React from 'react';
import './HamsterCard.css'
function HamsterCard({ hamster }) {
    return (
        <>

            <div className="HamsterCard">
                <img src={hamster.imgName} alt="text" />
                <header>{hamster.name}</header>
                <article>
                    <h3>{hamster.favFood}</h3>
                    <h4>{hamster.age}</h4>
                </article>
            </div>



        </>


    );
}

export default HamsterCard;
