import React from 'react';
import './HamsterCard.css'

function HamsterCard({ hamster, ham }) {

    const handleClick = () => {
        ham(hamster)
    }
    return (
        <>
            <div className="HamsterCard" onClick={handleClick} >
                <img src={`/assets/${hamster.imgName}`} alt="Hamster" className="hamsterImage" />
                <section className="textArea">
                    <aside>
                        <span>Name:</span> {hamster.name}</aside>
                    <aside>
                        <span> Favroitmat:</span>  {hamster.favFood}</aside>
                    <aside> <span>Hamster ID:</span> {hamster.id}</aside>
                    <aside> <span> Ålder:</span> {hamster.age}</aside>
                </section>
            </div>

        </>

    );
}

export default HamsterCard;
