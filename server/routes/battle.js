const { Router } = require('express');
const { auth, db } = require('./../firebase');

const router = new Router();

router.get('/:id1/:id2', async (req, res) => {

    try {

        let gameArray = []
        let hamster1 = await db.collection('hamsters')
            .where('id', '==', parseInt(req.params.id1))
            .get();
        let hamster2 = await db.collection('hamsters')
            .where('id', '==', parseInt(req.params.id2))
            .get();

        hamster1.forEach(hamster => {
            gameArray.push(hamster.data())
        })
        hamster2.forEach(hamster => {
            gameArray.push(hamster.data())
        })


        res.status(200).send(gameArray)
    } catch (err) {
        res.status(500)
        console.error(err)
    }
})



router.post('/', async (req, res) => {
    try {
        const winner = req.body.winner;

        const loser = Object.values(req.body.contestants).filter((ham) => ham.id !== winner.id)[0];
        await updateGame(req.body);
        await updateHamster(winner, true);
        await updateHamster(loser, false);
        res.status(200).send({ msg: "game was recorded" });
    } catch (err) {
        console.error(err)
        res.status(500).send(err)
    }
})

async function updateGame(gameObject) {
    try {
        let date = new Date().toDateString();
        await db.collection('games').doc().set({
            id: gameObject.id,
            timeStamp: date,
            contestants: gameObject.contestants,
            winner: gameObject.winner

        })

    } catch (err) {
        console.error(err)

    }
}

async function updateHamster(contestant, isWinner) {
    try {

        let hamsterId;
        let results;
        let hamster = await db.collection('hamsters')
            .where("id", "==", parseInt(contestant.id)).get();

        hamster.forEach(async ham => {
            let hamsterData = ham.data()
            console.log(hamsterData)
            hamsterId = ham.id
            console.log(hamsterId)
            results = {
                wins: hamsterData.wins + Number(isWinner),
                defeats: hamsterData.defeats + Number(!isWinner),
                games: hamsterData.games + 1
            }
            console.log(results)
            db.collection('hamsters').doc(hamsterId).update(results);

        })

    } catch (err) {
        console.error(err)

    }
}



module.exports = router;